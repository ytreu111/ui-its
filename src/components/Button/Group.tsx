import React, { FC, ReactElement, ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import _ from "underscore";
import { StarIcon } from "ui-its-icons";

import { IButtonGroupProps, IButtonOptions } from "./model/Group.model";
import { ButtonStyleEnum, ButtonTypeEnum } from "./model/Button.model";
import Button from "./Button";
import { Styled } from "./style/Group.styled";

const {
  GroupWrap,
} = Styled;

const getButtonComponent = (button: ReactElement, buttonOptions: IButtonOptions, currentValue?: string) => {
  const props = button.props;
  const selectButton = props.value && props.value === currentValue;
  const currentButtonType = props.type ?? ButtonTypeEnum.primary;
  const buttonIcon = props.icon ? props.icon : selectButton ? undefined : buttonOptions.defaultIcon;
  const buttonKey = button.key ?? props.value ?? _.uniqueId();
  const className = button.props?.className?.split(' ') ?? [];

  let buttonChildren;
  let currentButtonStyle;

  className.push('group__button')

  if (selectButton) {
    currentButtonStyle = buttonOptions.selectButton;
    buttonChildren = props.children;
    className.push('group__button--active');
  } else {
    currentButtonStyle = buttonOptions.deselectButton;
    buttonChildren = null;
  }

  const buttonProps = {
    ...button.props,
    buttonStyle: currentButtonStyle,
    type: currentButtonType,
    children: buttonChildren,
    icon: buttonIcon,
    onClick: buttonOptions.onChange,
    className: className.join(' '),
  }

  return <Button key={buttonKey} {...buttonProps}/>
}

const childrenButton = (children: ReactNode, buttonOptions: IButtonOptions, currentValue?: string, content?: Array<ReactNode>) => {
  let newContent = content ? [...content] : [];

  if (children && typeof children === 'object') {
    if (Array.isArray(children)) {
      for (const element of children) {
        if (element.type === React.Fragment) {
          newContent = childrenButton(element.props.children, buttonOptions, currentValue, newContent);
        } else if (element.type === Button) {
          const button = getButtonComponent(element, buttonOptions, currentValue);
          newContent.push(button);
        }
      }
    } else {
      if ('type' in children) {
        if (children.type === React.Fragment) {
          newContent = childrenButton(children.props.children, buttonOptions, currentValue, newContent);
        } else if (children.type === Button) {
          const button = getButtonComponent(children, buttonOptions, currentValue);
          newContent.push(button);
        }
      }
    }
  }

  return newContent;
}

const Group: FC<IButtonGroupProps> = (
  {
    value,
    buttonGap = 8,
    selectButton = ButtonStyleEnum.default,
    deselectButton = ButtonStyleEnum.translucent,
    defaultIcon = <StarIcon/>,
    onChange,
    defaultValue,
    children,
  }) => {
  const [groupValue, setGroupValue] = useState<string>();

  useEffect(() => {
    if (defaultValue) setGroupValue(defaultValue);
  }, [defaultValue]);

  const onChangeButton = useCallback((event, value) => {
    if (onChange) onChange(event, value);
    setGroupValue(value);
  }, [onChange]);

  const content = useMemo(() => {
    if (children) {
      const currentValue = value ?? groupValue;
      const buttonOptions = {
        selectButton,
        deselectButton,
        defaultIcon,
        onChange: onChangeButton,
      }

      return childrenButton(children, buttonOptions, currentValue);
    }

    return null;
  }, [children, defaultIcon, deselectButton, groupValue, onChangeButton, selectButton, value])

  return (
    <GroupWrap gap={buttonGap}>
      {content}
    </GroupWrap>
  );
}

export default Group;