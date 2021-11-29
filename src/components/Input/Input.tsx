import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Styled } from './style/Input.styled';
import { Input as InputAntd } from 'antd';
import { InputProps } from './model/Input.model';
import { StarIcon } from "ui-its-icons";
import theme from "../../styles/theme/theme";

const {
  StyledInputContainer,
  StyledInputWrap,
  StyledInputEditablePlaceholder,
  StyledInputLabel,
  OptionalInput,
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
    autoWidth,
    onChange,
    onBlur,
    onFocus,
    name,
    width,
    optional,
    optionalIcon,
  }) => {
  const [visiblePlaceholder, setVisiblePlaceholder] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => setInputValue(value ?? undefined), [value]);

  const placeholderText = useMemo(
    () => (visiblePlaceholder ? editableHelp : placeholder),
    [editableHelp, placeholder, visiblePlaceholder],
  );

  const classNameWrap = useMemo(() => {
    const className: Array<string> = [];

    if (small) className.push('small');

    if (autoWidth) className.push('auto');

    if (icon) className.push('icon');

    if (visiblePlaceholder) className.push('focus');

    if (visiblePlaceholder || !!inputValue) className.push('placeholder_top');

    if (error) className.push('error');

    if (disabled) className.push('disabled');

    if (optional) className.push('optional')

    return className.join(' ');
  }, [autoWidth, disabled, error, icon, inputValue, optional, small, visiblePlaceholder]);

  const optionalButton = useMemo(() => {
    const icon = optionalIcon ? optionalIcon : <StarIcon/>;
    const iconColor = error ? theme.colors.red_500 : theme.colors.blue_500;

    return (
      <OptionalInput
        p={0}
        iconMargin={0}
        icon={icon}
        type={'transparent'}
        iconColor={iconColor}
        onClick={optional}
      />
    )
  }, [error, optional, optionalIcon])

  const onFocusInput = useCallback(() => {
    setVisiblePlaceholder(true);
    if (onFocus) onFocus();
  }, [onFocus]);

  const onBlurInput = useCallback(() => {
    setVisiblePlaceholder(false);
    if (onBlur) onBlur();
  }, [onBlur]);

  const onChangeInput = useCallback(
    (e) => {
      setInputValue(e.currentTarget.value);
      if (onChange) onChange(e.currentTarget.value);
    },
    [onChange],
  );

  return (
    <StyledInputContainer>
      <StyledInputWrap className={classNameWrap} width={width}>
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
        {optional && optionalButton}
      </StyledInputWrap>
      {label && <StyledInputLabel>{label}</StyledInputLabel>}
    </StyledInputContainer>
  );
};

export default Input;
