import React, { FC, ReactElement, ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";

import { ICheckboxGroupProps, ICheckboxOption } from "./model/Group.model";
import { theme } from "styles";
import { Styled } from "./style/Group.styled";
import Checkbox from "./Checkbox";
import { ICheckboxProps } from "./model/Checkbox.model";

const {
  GroupWrap,
} = Styled;

const checkboxProps = (checkbox: ICheckboxOption, groupValue: Set<any>) => {
  const key: string = typeof checkbox.value === 'object' ? JSON.stringify(checkbox.value) : checkbox.value;
  const checked = groupValue.has(checkbox.value);

  return { key, checked };
}

const getCheckboxComponent = (checkbox: ReactElement<any, any>, groupValue: Set<any>, onChangeCheckbox: any) => {
  if (checkbox.type === Checkbox && checkbox.props?.value) {
    const { key, checked } = checkboxProps(checkbox.props, groupValue);

    return (
      <Checkbox {...checkbox.props} key={key} checked={checked} onChange={onChangeCheckbox}>
        {checkbox.props.children}
      </Checkbox>
    )
  }

  return null;
}

const childrenCheckbox = (children: ReactNode, groupValue: Set<any>, onChangeCheckbox: any, content?: Array<ReactNode>) => {
  let newContent = content ? [...content] : [];

  if (children && typeof children === 'object') {
    if (Array.isArray(children)) {
      for (const element of children) {
        if (element.type === React.Fragment) {
          newContent = childrenCheckbox(element.props.children, groupValue, onChangeCheckbox, newContent);
        } else {
          const newComponent = getCheckboxComponent(element, groupValue, onChangeCheckbox);
          newContent.push(newComponent);
        }
      }
    } else {
      if ('type' in children) {
        if (children.type === React.Fragment) {
          newContent = childrenCheckbox(children.props.children, groupValue, onChangeCheckbox, newContent);
        } else {
          const newComponent = getCheckboxComponent(children, groupValue, onChangeCheckbox);
          newContent.push(newComponent);
        }
      }
    }
  }

  return newContent;
}

const Group: FC<ICheckboxGroupProps> = (
  {
    options,
    value = [],
    onChange,
    children,
  }) => {
  const [groupValue, setGroupValue] = useState<Set<any>>();

  useEffect(() => setGroupValue(new Set(value)), [value]);

  const onChangeCheckbox = useCallback((checked: boolean, value: any) => {
    const newGroupValue = new Set(groupValue);

    if (newGroupValue.has(value)) {
      newGroupValue.delete(value);
    } else {
      newGroupValue.add(value);
    }

    setGroupValue(newGroupValue);
    if (onChange) onChange(Array.from(newGroupValue));
  }, [groupValue, onChange]);

  const content = useMemo(() => {
    let content: Array<ReactElement<ICheckboxProps, typeof Checkbox>> = [];

    if (options && !!options.length && groupValue) {
      content = options.map((el) => {
        const { key, checked } = checkboxProps(el, groupValue);

        return <Checkbox key={key} onChange={onChangeCheckbox} checked={checked} value={el.value}>{el.label}</Checkbox>
      })
    }

    return content;
  }, [groupValue, onChangeCheckbox, options]);

  const childrenContent = useMemo(() => {
    if (children && groupValue) {
      return childrenCheckbox(children, groupValue, onChangeCheckbox);
    }

    return null;
  }, [children, groupValue, onChangeCheckbox])

  return (
    <ThemeProvider theme={theme}>
      <GroupWrap>
        {content}
        {childrenContent}
      </GroupWrap>
    </ThemeProvider>
  );
}

export default Group;