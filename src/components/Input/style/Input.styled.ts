import styled from 'styled-components/macro';
import { styleMixins } from 'styles';

const { defaultTextStyle } = styleMixins.text;

const StyledInputContainer = styled.div`
  width: 100%;
  max-width: 306px;
`;

const StyledInputLabel = styled.span`
  ${(props) => defaultTextStyle(props, 'small')}
  margin-top: 4px;
  color: ${(props) => props.theme.colors.gray_800};
`;

const StyledInputEditablePlaceholder = styled.span`
  ${(props) => defaultTextStyle(props)}
  color: ${(props) => props.theme.colors.gray_800};
  position: absolute;
  left: 16px;
  top: 17px;
  z-index: 1;
  text-align: left;
  user-select: none;
  pointer-events: none;
  transition: all 0.2s ease;
`;

const StyledInputWrap = styled.div`
  overflow: hidden;
  position: relative;
  height: 56px;
  width: 100%;
  border-radius: ${(props) => props.theme.decoration.defaultBorderRadius};
  background: ${(props) => props.theme.colors.gray_200};
  border: 2px solid transparent;
  display: flex;

  &:hover {
    border: 2px solid ${(props) => props.theme.colors.blue_500};
  }

  & .ant-input {
    ${(props) => defaultTextStyle(props)}
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    color: ${(props) => props.theme.colors.gray_1000};
    padding: 26px 40px 6px 16px;
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
    width: 100%;
  }

  &.small {
    height: 40px;
    max-width: 184px;

    & .ant-input {
      padding: 11px 14px;

      &::placeholder {
        color: ${(props) => props.theme.colors.gray_800};
      }
    }

  }

  &.focus {
    border-color: ${(props) => props.theme.colors.blue_500};
    background: ${(props) => props.theme.colors.white};

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
      left: 52px;
    }

    & svg {
      width: 20px;
      height: 20px;
    }

    & .ant-input-prefix {
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      color: ${(props) => props.theme.colors.blue_500};
    }

    & .ant-input {
      padding-left: 52px;
    }
  }

  &.error {
    border-color: ${(props) => props.theme.colors.red_500};

    ${StyledInputEditablePlaceholder},
    ${StyledInputLabel},
    & .ant-input-prefix {
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

    ${StyledInputEditablePlaceholder} {
      color: ${(props) => props.theme.colors.gray_600};
    }
  }

  &.auto {
    max-width: 100%;
  }
`;

export const Styled = {
  StyledInputContainer,
  StyledInputLabel,
  StyledInputWrap,
  StyledInputEditablePlaceholder,
};
