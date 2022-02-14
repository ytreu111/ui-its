import React, { useState, useMemo, useCallback, useRef, useEffect, FC } from 'react';
import { Select as SelectANTD } from 'antd';
import _ from 'underscore';
import { ChevronDownIcon, BaselineCheckIcon, CloseIcon } from 'ui-its-icons';

import { IOptionProps, ISelectProps, SelectModeEnum } from './model/SelectProps.model';
import { Styled } from './style/Select.styled';
import theme from "styles/theme/theme";
import { ThemeProvider } from "styled-components";

const {Option} = SelectANTD;

const {
  StyledSelect,
  Placeholder,
  MultipleLabel,
  HelpPlaceholder,
} = Styled;

const Select: FC<ISelectProps> = (
  {
    placeholder,
    value,
    searchPlaceholder,
    disabled,
    showSearch,
    label,
    options = [],
    required,
    error,
    allowClear,
    small,
    mode ,
    width,
    onChange,
    onFocus,
    onBlur,
  }) => {
  const [inputValue, changeValue] = useState<string | Array<string>>();
  const [focused, changeFocus] = useState(false);
  const [isError, changeError] = useState(error);
  const [isSearch, changeSearch] = useState(false);
  // Коэффициент для умножения количества пунктов меню отображаемых в селекте
  const [countOptionsList, setCountOptionsList] = useState(2);

  const [filterOptions, setFilterOptions] = useState<Array<IOptionProps>>([]);

  const selectWrapRef = useRef(null);

  useEffect(() => changeError(error), [error]);
  useEffect(() => changeValue(value), [value]);

  const icon = useMemo(() => (
    inputValue && !isError ? <BaselineCheckIcon/> : <ChevronDownIcon/>
  ), [inputValue, isError]);

  const selectClassName = useMemo(() => {
    let className = [];

    if (disabled) className.push('disabled');

    if (focused) className.push('focused');

    if (isError) className.push('error');

    if (allowClear) className.push('clear');

    if (small) className.push('small');

    if (showSearch) className.push('search');

    if ((Array.isArray(inputValue) && inputValue.length) || (!Array.isArray(inputValue) && !!inputValue)) {
      className.push('selected');
    }

    return className.join(' ');
  }, [disabled, focused, inputValue, isError, allowClear, small, showSearch]);

  const showSearchPlaceholder = useMemo(() => focused && showSearch, [focused, showSearch]);

  const searchPlaceholderText = useMemo(() => {
    return showSearchPlaceholder && <span>{searchPlaceholder || 'Поиск данных...'}</span>;
  }, [searchPlaceholder, showSearchPlaceholder]);

  const selectedItem = useMemo(() => options.filter((el) => el.value === inputValue), [options, inputValue]);

  const optionsWithFirst = useMemo(() => {
    const currentOptions = !!filterOptions.length ? filterOptions : options;

    return _.without(currentOptions, selectedItem[0]);
  }, [filterOptions, options, selectedItem]);

  const selectedOptions = useMemo(() => {
    return _.first(
      [...selectedItem, ...optionsWithFirst].map((el) => (
        <Option {...el} className={'styledOption'} key={el.value}>
          {el?.label}
        </Option>
      )),
      countOptionsList * 10,
    );
  }, [countOptionsList, optionsWithFirst, selectedItem]);

  const multipleLabel = useMemo(() => {
    if (mode === 'multiple' && Array.isArray(inputValue) && inputValue.length > 0 && !isSearch) {
      return <MultipleLabel>Выбрано значений: {inputValue.length}</MultipleLabel>;
    }

    return null;
  }, [isSearch, mode, inputValue]);

  const onChangeHandler = useCallback(
    (value: string | Array<string>, option: any) => {
      changeValue(value);

      if (required) {
        const error = Array.isArray(value) ? !value.length : !value;
        changeError(error);
      }

      if (onChange) onChange(value, option);
    },
    [onChange, required],
  );

  const onBlurHandler = useCallback(() => {
    if (required && !inputValue) {
      changeError(true);
    } else if (!error) {
      changeError(false);
    }

    changeSearch(false);

    if(onBlur) onBlur();
  }, [required, inputValue, error, onBlur]);

  const onFocusHandler = useCallback(() => {
    if(onFocus) onFocus();
  }, [onFocus]);

  const onDropdownVisibleChange = useCallback((open) => {
    changeFocus(open);

    if(!open){
      setCountOptionsList(2);
    }
  }, [])

  const onScrollHandler = useCallback((event) => {
    const {target} = event;
    const {scrollTop, offsetHeight, scrollHeight} = target;
    const availableScroll =
      scrollTop && offsetHeight && scrollHeight ? scrollTop + offsetHeight === scrollHeight : false;

    if (availableScroll) {
      setCountOptionsList(countOptionsList + 1);
    }
  }, [countOptionsList]);

  const onSearchHandler = useCallback((value: string) => {
    if (value) {
      const searchOptions = options.filter((el) => el.label.toLocaleLowerCase().includes(value.toLocaleLowerCase()));

      setFilterOptions(searchOptions);
      changeSearch(true);
    } else {
      setFilterOptions([]);
      changeSearch(false);
    }
  }, [options]);

  return (
    <ThemeProvider theme={theme}>
      <StyledSelect ref={selectWrapRef} className={selectClassName} width={width}>
        <SelectANTD
          className={'ant-select-customize-input'}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
          onPopupScroll={onScrollHandler}
          suffixIcon={icon}
          showSearch={showSearch}
          onSearch={onSearchHandler}
          placeholder={searchPlaceholderText}
          value={inputValue}
          allowClear={allowClear}
          onDropdownVisibleChange={onDropdownVisibleChange}
          //@ts-ignore
          getPopupContainer={() => selectWrapRef.current}
          mode={mode}
          clearIcon={<CloseIcon/>}
        >
          {selectedOptions}
        </SelectANTD>
        <Placeholder>{placeholder || 'Выберите данные'}</Placeholder>
        {label && <HelpPlaceholder>{label}</HelpPlaceholder>}
        {multipleLabel}
      </StyledSelect>
    </ThemeProvider>
  );
};

export default Select;
