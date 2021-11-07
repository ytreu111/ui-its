import React, { FC, useCallback, useMemo, useState } from 'react';
import { Input as InputAntd } from 'antd';
import { ThemeProvider } from 'styled-components';

import { Styled } from './style/Input.styled';
import { InputProps } from './model/Input.model';
import { theme } from 'styles';

const {
  StyledInputContainer,
  StyledInputWrap,
  StyledInputEditablePlaceholder,
  StyledInputLabel,
} = Styled;

const Input: FC<InputProps> = (
  {
    value = '',
    disabled,
    small,
    placeholder,
    editableHelp = 'Введите данные',
    label,
    icon,
    error,
    allowClear,
    autoWidth,
    onChange,
    onBlur,
    onFocus,
    name,
  }) => {
  const [visiblePlaceholder, setVisiblePlaceholder] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const showClearButton = useMemo(
    () => !!(allowClear && !!inputValue && !disabled),
    [allowClear, disabled, inputValue],
  );

  const placeholderText = useMemo(
    () => (visiblePlaceholder ? editableHelp : placeholder)
    , [editableHelp, placeholder, visiblePlaceholder]);

  const classNameWrap = useMemo(() => {
    const className: Array<string> = [];

    if (small) className.push('small');

    if (autoWidth) className.push('auto');

    if (icon) className.push('icon');

    if (visiblePlaceholder) className.push('focus');

    if (visiblePlaceholder || !!inputValue) className.push('placeholder_top');

    if (error) className.push('error');

    if (showClearButton) className.push('clear');

    if (disabled) className.push('disabled');

    return className.join(' ');
  }, [autoWidth, disabled, error, icon, inputValue, showClearButton, small, visiblePlaceholder]);

  const onFocusInput = useCallback(() => {
    setVisiblePlaceholder(true);
    if (onFocus) onFocus();
  }, [onFocus]);

  const onBlurInput = useCallback(() => {
    setVisiblePlaceholder(false);
    if (onBlur) onBlur();
  }, [onBlur]);

  const onChangeInput = useCallback((e) => {
    setInputValue(e.currentTarget.value);
    if (onChange) onChange(e.currentTarget.value);
  }, [onChange]);

  return (
    <ThemeProvider theme={theme}>
      <StyledInputContainer>
        <StyledInputWrap className={classNameWrap}>
          {!small && <StyledInputEditablePlaceholder>{placeholder}</StyledInputEditablePlaceholder>}
          <InputAntd
            onFocus={onFocusInput}
            onBlur={onBlurInput}
            disabled={disabled}
            prefix={icon}
            value={inputValue}
            placeholder={placeholderText}
            onChange={onChangeInput}
            name={name}
          />
        </StyledInputWrap>
        {label && <StyledInputLabel>{label}</StyledInputLabel>}
      </StyledInputContainer>
    </ThemeProvider>
  );
};

export default Input;
