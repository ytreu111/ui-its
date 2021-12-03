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
  left: 14px;
  top: 17px;
  z-index: 1;
  text-align: left;
  user-select: none;
  pointer-events: none;
  transition: all 0.1s linear;
  width: calc(100% - 28px);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const OptionalInput = styled.div`
  position: absolute;
  height: 20px;
  top: 50%;
  transform: translateY(-50%);
  right: 14px;
  color: ${(props) => props.theme.colors.blue_500};
  cursor: pointer;
  z-index: 1;

  & svg {
    width: 20px;
    height: 20px;
  }
`

const StyledInputWrap = styled.div<{width?: number | string}>`
  overflow: hidden;
  position: relative;
  height: 56px;
  width: ${(props) => props.width
          ? typeof props.width === "number" ? `${props.width}px` : props.width
          : 'auto'};
  cursor: text;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.gray_200};
  border: 2px solid transparent;
  display: flex;
  transition: all 0.1s linear;

  &:hover {
    border: 2px solid ${(props) => props.theme.colors.blue_500};
  }

  & .ant-input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    color: ${(props) => props.theme.colors.gray_1000};
    padding: 26px 14px 6px;
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

  & .ant-input-affix-wrapper {
    background: transparent;
    border: none;
    padding: 0;
    width: 100%;

    &::before {
      content: unset;
    }

    &::after {
      content: unset;
    }

    & .ant-input-prefix {
      margin-right: 0;
      margin-left: 14px;
      color: ${(props) => props.theme.colors.blue_500};

      & svg {
        height: 20px;
        width: 20px;
      }
    }

    & .ant-input-suffix {
      margin-left: 0;
      margin-right: 14px;
      color: ${(props) => props.theme.colors.blue_500};

      & svg {
        width: 20px;
        height: 20px;
      }
    }

    & .ant-input {
      padding: 26px 14px 6px;
    }

    & .ant-input-password-icon {
      color: inherit;
    }
  }

  &.optional {
    & .ant-input {
      padding-right: 48px;
    }

    & ${StyledInputEditablePlaceholder} {
      width: calc(100% - 64px);
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
      font-size: ${(props) => props.theme.fontSettings.small};
      color: ${(props) => props.theme.colors.blue_500};
      transform: translateY(-10px);
    }
  }

  &.icon {
    & ${StyledInputEditablePlaceholder} {
      left: 48px;
      width: calc(100% - 64px);
    }

    &.optional {
      & ${StyledInputEditablePlaceholder} {
        width: calc(100% - 96px);
      }
    }
  }

  &.small {
    height: 40px;

    & .ant-input {
      padding: 8px 12px;

      &::placeholder {
        color: ${(props) => props.theme.colors.gray_800};
      }
    }

    & .ant-input-affix-wrapper {
      & .ant-input-prefix {
        margin-left: 8px;
      }

      & .ant-input-suffix {
        margin-right: 8px;
      }
    }

    &.optional {
      & .ant-input {
        padding-right: 36px;
      }
    }

    & ${OptionalInput} {
      right: 8px;
    }
  }

  &.error {
    border-color: ${(props) => props.theme.colors.red_500};

    & .ant-input-suffix,
    & .ant-input-prefix,
    & ${StyledInputEditablePlaceholder},
    & ${OptionalInput},
    & + ${StyledInputLabel} {
      color: ${(props) => props.theme.colors.red_500};
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
`;

export const Styled = {
  StyledInputContainer,
  StyledInputLabel,
  StyledInputWrap,
  OptionalInput,
  StyledInputEditablePlaceholder,
};
