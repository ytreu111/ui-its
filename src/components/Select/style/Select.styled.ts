import styled from 'styled-components/macro';
import { styleMixins } from "styles";
import { ISelectProps } from "../model/SelectProps.model";

const {opacityColor} = styleMixins.color;

const {defaultTitleStyle} = styleMixins.text;

const Placeholder = styled.span`
  ${(props) => defaultTitleStyle(props, 6)};

  position: absolute;
  left: 14px;
  pointer-events: none;
  transition: all 0.15s linear;
  top: 16px;
  width: calc(100% - 62px);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${(props) => props.theme.colors.gray_800};
`;

const HelpPlaceholder = styled.span`
  ${(props) => defaultTitleStyle(props, 7)}

  margin-top: 4px;
  color: ${(props) => props.theme.colors.gray_800};
`;

const MultipleLabel = styled.span`
  ${(props) => defaultTitleStyle(props, 6)}

  position: absolute;
  bottom: 6px;
  left: 14px;
  pointer-events: none;
`;

const StyledSelect = styled.div<ISelectProps>`
  box-sizing: border-box;
  width: ${(props) => props.width
          ? typeof props.width === "number" ? `${props.width}px` : props.width
          : 'auto'};
  border: 2px solid transparent;
  height: 56px;
  transition: all .1s linear;
  position: relative;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.gray_200};
  border-radius: ${(props) => props.theme.decoration.defaultBorderRadius};

  &:hover {
    border-color: ${(props) => props.theme.colors.blue_500};
  }

  & * {
    box-sizing: border-box;
  }

  //Стили селекта
  & .ant-select {
    width: 100%;
    height: 100%;
    display: block;
  }

  & .ant-select-selector {
    width: 100%;
    height: 100%;
  }

  & .ant-select-selection {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none !important;
    box-shadow: none;
    padding: 0;
    cursor: pointer;
  }

  & .ant-select-selection__rendered {
    margin: 0;
    width: 100%;
    height: 100%;
    line-height: 0;
  }

  & .ant-select-selection-selected-value {
    float: unset;
    position: absolute;
    left: 14px;
    bottom: 6px;
    ${(props) => defaultTitleStyle(props, 6)}
  }

  & .ant-select-search {
    display: none;
  }

  & .ant-select-arrow {
    pointer-events: none;
    width: auto;
    height: auto;
    right: 14px;
    margin-top: 0;
    transform: translateY(-50%);
    transition: all .2s linear;
    color: ${(props) => props.theme.colors.blue_500};
    display: block;
    font-size: 0;

    & svg {
      width: 20px;
      height: 20px;
      transform: unset;
    }
  }

  & .ant-select-dropdown {
    padding: 8px;
    box-shadow: 0 2px 8px ${(props) => opacityColor(props.theme.colors.blue_500, 0.12)};
    backdrop-filter: ${(props) => props.theme.decoration.defaultBackgroundFilter};
    border-radius: ${(props) => props.theme.decoration.defaultBorderRadius};
  }

  & .ant-select-dropdown-menu-item {
    padding: 9px 12px;
    ${(props) => defaultTitleStyle(props, 6)};
    color: ${(props) => props.theme.colors.gray_1000};
    border-radius: ${(props) => props.theme.decoration.defaultBorderRadius};
  }

  & .ant-select-dropdown-menu-item-selected,
  & .ant-select-dropdown-menu-item-active {
    background-color: ${(props) => opacityColor(props.theme.colors.blue_500, 0.08)} !important;
    color: ${(props) => props.theme.colors.blue_500} !important;
  }

  & .ant-select-selection--multiple {

    & .ant-select-selection__choice {
      display: none;
    }

    & ul {
      width: 100%;
      height: 100%;
    }

    & .ant-select-selector {
      padding: 0;
      cursor: pointer;
    }
  }

  //Стили классов компонента
  &.focused {
    border-color: ${(props) => props.theme.colors.blue_500};

    &:not(.selected).clear {
      & .ant-select-selection__clear {
        display: none;
      }
    }

    & .ant-select-arrow {
      transform: translateY(-50%) rotate(180deg);
    }

    &.search ${Placeholder} {
      top: 6px;
      font-size: ${(props) => props.theme.fontSettings.small};
      color: ${(props) => props.theme.colors.blue_500};
    }
  }

  &.selected {

    & ${Placeholder} {
      top: 6px;
      font-size: ${(props) => props.theme.fontSettings.small};
      color: ${(props) => props.theme.colors.blue_500};
    }

    &:not(.error) .ant-select-arrow {
      transition: none;
      transform: translateY(-50%);
    }

    & .ant-select-selection-selected-value {
      padding: 0;
      ${(props) => defaultTitleStyle(props, 6)}
      color: ${(props) => props.theme.colors.gray_1000};
      position: absolute;
      bottom: 6px;
      left: 14px;
      width: calc(100% - 62px);
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;

      &::after {
        content: unset;
      }
    }
  }

  &.search {
    & .ant-select-selection__placeholder {
      padding: 0 !important;
      color: ${(props) => props.theme.colors.gray_600};
      ${(props) => defaultTitleStyle(props, 6)};
      left: 14px !important;
      bottom: 6px;
      top: unset;
      transform: unset;
      margin: 0 !important;
    }

    & .ant-select-search {
      width: 100%;
      height: 100%;
      position: unset;
      margin-top: 0;
      float: unset;

      & input {
        width: calc(100% - 62px);
        height: auto;
        display: block;
        position: absolute;
        left: 14px;
        bottom: 6px;
        color: ${(props) => props.theme.colors.gray_1000};
        ${(props) => defaultTitleStyle(props, 6)};
        padding: 0;
      }
    }

    & ${Placeholder} {
      z-index: 1;
    }

    &.focused {
      & .ant-select-search {
        display: block;
      }
    }
  }

  &.clear {
    &.selected:hover {
      & .ant-select-arrow {
        display: none;
      }
    }

    & .ant-select-selection__clear {
      background: transparent;
      width: auto;
      height: auto;
      margin-top: 0;
      transform: translateY(-50%);
      right: 14px;
      z-index: 3;
      top: 50%;

      & svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  &.small {
    height: 40px;

    & .ant-select-selection-placeholder,
    & ${MultipleLabel},
    & ${Placeholder} {
      top: 50%;
      transform: translateY(-50%);
      bottom: unset;
      left: 12px;
      width: calc(100% - 56px);
    }

    & .ant-select-selection__placeholder {
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
    }

    &.search.focused,
    &.selected {
      & ${Placeholder} {
        display: none;
      }

      & .ant-select-selection-selected-value {
        top: 50%;
        transform: translateY(-50%);
        bottom: unset;
        left: 12px;
      }
    }

    & .ant-select-search {

      & input {
        padding: 0;
        z-index: 2;
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        bottom: unset;
      }
    }
  }

  &.error {
    border-color: ${(props) => props.theme.colors.red_500};

    & .ant-select-arrow,
    & ${HelpPlaceholder},
    & ${Placeholder} {
      color: ${(props) => props.theme.colors.red_500} !important;
    }

    & .ant-select-selection-selected-value {
      color: ${(props) => props.theme.colors.gray_800};
    }
  }

  &.disabled {
    pointer-events: none;

    & .ant-select-arrow,
    & ${Placeholder} {
      color: ${(props) => props.theme.colors.gray_600};
    }

    & .ant-select-selection-selected-value {
      color: ${(props) => props.theme.colors.gray_800};
    }
  }
`;

export const Styled = {
  StyledSelect,
  Placeholder,
  HelpPlaceholder,
  MultipleLabel,
};
