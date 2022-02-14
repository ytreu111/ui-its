import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { StarIcon } from "ui-its-icons";
import { Input as InputAntd } from 'antd';

import { Styled } from './style/Input.styled';
import { IInputProps, InputTypeEnum } from './model/Input.model';
import theme from "styles/theme/theme";
import { ThemeProvider } from "styled-components";

const {
  StyledInputContainer,
  StyledInputWrap,
  StyledInputEditablePlaceholder,
  StyledInputLabel,
  OptionalInput,
} = Styled;

const Input: FC<IInputProps> = (
  {
    value = '',
    disabled,
    small,
    placeholder,
    editableHelp = 'Введите данные',
    label,
    icon,
    error,
    onChange,
    onBlur,
    onFocus,
    name,
    width,
    optional,
    optionalIcon,
    type,
  }) => {
  const [visiblePlaceholder, setVisiblePlaceholder] = useState(false);
  const [inputValue, setInputValue] = useState<string>();

  useEffect(() => setInputValue(value), [value]);

  const placeholderText = useMemo(
    () => (visiblePlaceholder ? editableHelp : placeholder),
    [editableHelp, placeholder, visiblePlaceholder],
  );

  const classNameWrap = useMemo(() => {
    const className: Array<string> = [];

    if (small) className.push('small');

    if (icon) className.push('icon');

    if (visiblePlaceholder) className.push('focus');

    if (visiblePlaceholder || !!inputValue) className.push('placeholder_top');

    if (error) className.push('error');

    if (disabled) className.push('disabled');

    if (optional) className.push('optional')

    return className.join(' ');
  }, [disabled, error, icon, inputValue, optional, small, visiblePlaceholder]);

  const optionalButton = useMemo(() => {
    if (optional) {
      const icon = optionalIcon ? optionalIcon : <StarIcon/>;

      return (
        <OptionalInput onClick={optional}>
          {icon}
        </OptionalInput>
      )
    }

    return null;
  }, [optional, optionalIcon])

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

  const input = useMemo(() => {
    if (type === InputTypeEnum.password) {
      return (
        <InputAntd.Password
          onFocus={onFocusInput}
          onBlur={onBlurInput}
          disabled={disabled}
          value={inputValue}
          placeholder={placeholderText}
          onChange={onChangeInput}
          name={name}
          prefix={icon}
        />
      )
    } else {
      return (
        <>
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
          {optionalButton}
        </>
      )
    }
  }, [disabled, icon, inputValue, name, onBlurInput, onChangeInput, onFocusInput, optionalButton, placeholderText, type])

  return (
    <ThemeProvider theme={theme}>
      <StyledInputContainer>
        <StyledInputWrap className={classNameWrap} width={width}>
          {!small && <StyledInputEditablePlaceholder>{placeholder}</StyledInputEditablePlaceholder>}
          {input}
        </StyledInputWrap>
        {label && <StyledInputLabel>{label}</StyledInputLabel>}
      </StyledInputContainer>
    </ThemeProvider>
  );
};

export default Input;
