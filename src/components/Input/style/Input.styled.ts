import styled from 'styled-components';
import { styleMixins } from "styles";

const {defaultTitleStyle} = styleMixins.text;

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  & * {
    box-sizing: border-box;
  }
`;

const StyledInputLabel = styled.span`
  margin-top: 4px;
  color: ${(props) => props.theme.colors.gray_800};
  ${(props) => defaultTitleStyle(props, 7)}
`;

const StyledInputEditablePlaceholder = styled.span`
  color: ${(props) => props.theme.colors.gray_800};
  ${(props) => defaultTitleStyle(props, 6)}
  position: absolute;
  left: 16px;
  top: 17px;
  z-index: 1;
  text-align: left;
  user-select: none;
  pointer-events: none;
  transition: all 0.2s ease;
  width: calc(100% - 32px);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const OptionalInput = styled.div`
  position: absolute;
  height: 20px;
  top: 50%;
  transform: translateY(-50%);
  right: 18px;
  color: ${(props) => props.theme.colors.blue_500};
  cursor: pointer;
  
  & svg{
    width: 20px;
    height: 20px;
  }
`

const StyledInputWrap = styled.div<{width?: number | string}>`
  overflow: hidden;
  position: relative;
  height: 56px;
  width: 100%;
  cursor: text;
  max-width: ${(props) => props.width
          ? typeof props.width === "number" ? `${props.width}px` : props.width
          : '306px'};
  border-radius: 8px;
  background: ${(props) => props.theme.colors.gray_200};
  border: 2px solid transparent;
  display: flex;

  &:hover {
    border: 2px solid ${(props) => props.theme.colors.blue_500};
  }

  & .ant-input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    color: #35446F;
    padding: 26px 16px 6px;
    font-weight: 600;
    font-size: 14px;
    line-height: 140%;
    box-shadow: none;
    outline: none;

    &:hover {
      border: none !important;
    }

    &::placeholder {
      color: transparent;
    }
  }
  
  & .ant-input-password{
    width: 100%;
    
    & .ant-input-suffix{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 18px;
      color: ${(props) => props.theme.colors.blue_500};
      
      & svg{
        width: 20px;
        height: 20px;
      }
    }
  }

  &.small {
    height: 40px;

    & .ant-input {
      padding: 11px 14px;

      &::placeholder {
        color: ${(props) => props.theme.colors.gray_800};
      }
    }
  }

  &.focus {
    border-color: ${(props) => props.theme.colors.blue_500};

    & .ant-input::placeholder {
      color: ${(props) => props.theme.colors.gray_600};
    }
  }

  &.placeholder_top {
    & ${StyledInputEditablePlaceholder} {
      font-size: ${(props) => props.theme.fontSettings.small}
      color: ${(props) => props.theme.colors.blue_500};
      transform: translateY(-10px);
    }
  }

  &.icon {

    & .ant-input-affix-wrapper {
      width: 100%;
    }

    & ${StyledInputEditablePlaceholder} {
      left: 52px;
      width: calc(100% - 68px);
    }

    & .ant-input-prefix {
      left: 16px;
      position: absolute;
      height: 100%;
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.colors.blue_500};
    }

    & .ant-input {
      padding-left: 52px;
    }
  }
  
  &.optional {

    & .ant-input{
      padding-right: 46px;
    }
  }

  &.error {
    border-color: ${(props) => props.theme.colors.red_500};

    & .ant-input-prefix,
    & ${StyledInputEditablePlaceholder},
    & ${OptionalInput},
    & + ${StyledInputLabel} {
      color: ${(props) => props.theme.colors.red_500};
    }
  }

  &.clear {
    & .ant-input {
      padding-right: 8px;
    }
  }

  &.disabled {
    background: ${(props) => props.theme.colors.gray_200};
    border-color: transparent;

    & .ant-input-prefix,
    ${StyledInputEditablePlaceholder} {
      color: ${(props) => props.theme.colors.gray_600};
    }
  }

  &.auto {
    width: 100%;
    max-width: 100%;
  }
`;

export const Styled = {
  StyledInputContainer,
  StyledInputLabel,
  StyledInputWrap,
  OptionalInput,
  StyledInputEditablePlaceholder,
};
