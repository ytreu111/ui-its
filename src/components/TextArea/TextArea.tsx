import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";

import { Styled } from './style/TextArea.styled'
import theme from "styles/theme/theme";
import { ITextAreaProps } from "./model/TextArea.model";

const {
  StyledTextAreaWrap,
  StyledTextArea,
  StyledTextAreaPlaceholder,
  StyledTextAreaLabel,
  SuccessIcon,
} = Styled;

const TextArea: FC<ITextAreaProps> = (
  {
    resizable = false,
    placeholder,
    editableHelp = 'Введите данные',
    disabled,
    value,
    error = false,
    label,
    width,
    height,
    onChange,
    onBlur,
    onFocus,
  }) => {
  const [inputValue, setInputValue] = useState<string>();

  useEffect(() => setInputValue(value), [value]);

  const className = useMemo(() => {
    const className: Array<string> = [];

    if (disabled) className.push('disabled');

    if (!!inputValue) className.push('placeholder_top');

    if (error) className.push('error');

    return className.join(' ');
  }, [disabled, error, inputValue]);

  const onFocusInput = useCallback(() => {
    if (onFocus) onFocus();
  }, [onFocus]);

  const onBlurInput = useCallback(() => {
    if (onBlur) onBlur();
  }, [onBlur]);

  const onChangeInput = useCallback((event) => {
    const value = event.currentTarget.value;
    setInputValue(value);

    if (onChange) onChange(value);
  }, [onChange]);

  return (
    <ThemeProvider theme={theme}>
      <StyledTextAreaWrap className={className} width={width} height={height}>
        <StyledTextArea
          resizable={resizable}
          onFocus={onFocusInput}
          onBlur={onBlurInput}
          onChange={onChangeInput}
          value={inputValue}
          placeholder={editableHelp}
        />
        {placeholder && <StyledTextAreaPlaceholder>{placeholder}</StyledTextAreaPlaceholder>}
        {label && <StyledTextAreaLabel>{label}</StyledTextAreaLabel>}
        {!!inputValue && !error && <SuccessIcon />}
      </StyledTextAreaWrap>
    </ThemeProvider>
  );
}

export default TextArea;