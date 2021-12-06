import { ChangeEvent, FC, MouseEventHandler, useCallback, useEffect, useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";
import { CheckBoxIcon, ActiveCheckBoxIcon } from 'ui-its-icons';

import { ICheckboxProps } from "./model/Checkbox.model";
import { Styled } from "./style/Checkbox.styled";
import theme from "styles/theme/theme";

const {
  CheckboxWrap,
  CheckboxText,
  CheckboxIcon,
  CheckboxInput,
  CheckboxDragIcon,
} = Styled;

const Checkbox: FC<ICheckboxProps> = (
  {
    checked = false,
    value,
    checkboxSize,
    moved,
    disabled,
    name,
    iconRender,
    onChange,
    children,
  }) => {
  const [checkedInput, setCheckedInput] = useState<boolean>(false);

  useEffect(() => setCheckedInput(checked), [checked]);

  const checkboxIcon = useMemo(() => {
    if (iconRender) {
      return iconRender(checkedInput);
    } else {
      return checkedInput ? <ActiveCheckBoxIcon/> : <CheckBoxIcon/>;
    }
  }, [iconRender, checkedInput]);

  const className = useMemo(() => {
    const className: Array<string> = [];

    if (disabled) className.push('disabled');

    return className.join(' ');
  }, [disabled]);

  const onChangeInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    const checked = target.checked;

    setCheckedInput(checked);

    if (onChange) onChange(checked, value, event);
  }, [onChange, value]);

  const onClickLabel: MouseEventHandler<HTMLLabelElement> = useCallback((event) => {
    if (moved || disabled) event.preventDefault();
  }, [disabled, moved]);

  return (
    <ThemeProvider theme={theme}>
      <CheckboxWrap onClick={onClickLabel} className={className}>
        <CheckboxIcon checkboxSize={checkboxSize}>{checkboxIcon}</CheckboxIcon>
        {moved && <CheckboxDragIcon/>}
        <CheckboxInput name={name} type="checkbox" onChange={onChangeInput} checked={checkedInput}/>
        {children && <CheckboxText>{children}</CheckboxText>}
      </CheckboxWrap>
    </ThemeProvider>
  );
}

export default Checkbox;