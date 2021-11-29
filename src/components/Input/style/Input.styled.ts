import styled from 'styled-components';
import Button from "components/Button/Button";

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  & * {
    box-sizing: border-box;
  }
`;

const StyledInputLabel = styled.span`
  margin-top: 4px;
  font-weight: 600;
  font-size: 13px;
  line-height: 140%;
  color: #6A7B9B;
`;

const StyledInputEditablePlaceholder = styled.span`
  color: #6A7B9B;
  font-size: 14px;
  font-weight: 600;
  line-height: 140%;
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

const OptionalInput = styled(Button)`
  position: absolute;
  height: 20px;
  top: 50%;
  transform: translateY(-50%);
  right: 18px;
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
  background: #f1f3f6;
  border: 2px solid transparent;
  display: flex;

  &:hover {
    border: 2px solid #2F80ED;
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

  &.small {
    height: 40px;

    & .ant-input {
      padding: 11px 14px;

      &::placeholder {
        color: #6A7B9B;
      }
    }
  }

  &.focus {
    border-color: #2F80ED;

    & .ant-input::placeholder {
      color: #c1cbd8;
    }
  }

  &.placeholder_top {
    & ${StyledInputEditablePlaceholder} {
      font-size: 13px;
      color: #2F80ED;
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
      color: #2F80ED;
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
    border-color: #EB5757;

    & .ant-input-prefix,
    & ${StyledInputEditablePlaceholder},
    & + ${StyledInputLabel} {
      color: #EB5757;
    }
  }

  &.clear {
    & .ant-input {
      padding-right: 8px;
    }
  }

  &.disabled {
    background: #f1f3f6;
    border-color: transparent;

    & .ant-input-prefix,
    ${StyledInputEditablePlaceholder} {
      color: #c1cbd8;
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
