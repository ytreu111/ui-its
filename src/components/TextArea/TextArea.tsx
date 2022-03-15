import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Styled } from './style/TextArea.styled';
import theme from 'styles/theme/theme';
import { ITextAreaProps } from './model/TextArea.model';
import { TextAreaTestElemsEnum } from './__tests__/TextArea.test.model';

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
    readonly
  }) => {
  const [inputValue, setInputValue] = useState<string | number>();

  useEffect(() => setInputValue(value), [value]);

  const className = useMemo(() => {
    const className: Array<string> = [];

    if (disabled) className.push('disabled');

    if (inputValue) className.push('placeholder_top');

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
      <StyledTextAreaWrap
        data-testid={TextAreaTestElemsEnum.textAreaWrap}
        className={className}
        width={width}
        height={height}
      >
        <StyledTextArea
          data-testid={TextAreaTestElemsEnum.textArea}
          resizable={resizable}
          onFocus={onFocusInput}
          onBlur={onBlurInput}
          onChange={onChangeInput}
          value={inputValue}
          placeholder={editableHelp}
          disabled={disabled}
          readOnly={readonly}
        />
        {placeholder && <StyledTextAreaPlaceholder>{placeholder}</StyledTextAreaPlaceholder>}
        {label && <StyledTextAreaLabel>{label}</StyledTextAreaLabel>}
        {!!inputValue && !error && <SuccessIcon data-testid={TextAreaTestElemsEnum.successIcon}/>}
      </StyledTextAreaWrap>
    </ThemeProvider>
  );
};

export default TextArea;