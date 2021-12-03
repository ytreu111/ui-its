import styled from 'styled-components';
import { BaselineCheckIcon } from 'ui-its-icons';

import { styleMixins } from "styles";
import { IStyledTextAreaProps, IStyledTextAreaWrapProps } from "../model/TextArea.model";

const {defaultTitleStyle} = styleMixins.text;

const StyledTextAreaPlaceholder = styled.span`
  pointer-events: none;
  position: absolute;
  left: 18px;
  top: 21px;
  color: ${(props) => props.theme.colors.gray_800};
  transition: all 0.1s linear;

  ${(props) => defaultTitleStyle(props, 7)};
`

const StyledTextAreaLabel = styled.span`
  margin-top: 4px;

  ${(props) => defaultTitleStyle(props, 7)};

  color: ${(props) => props.theme.colors.gray_800};
`

const SuccessIcon = styled(BaselineCheckIcon)`
  color: ${(props) => props.theme.colors.blue_500};
  position: absolute;
  top: 19px;
  right: 19px;

  & svg {
    width: 20px;
    height: 20px;
  }
`

const StyledTextArea = styled.textarea<IStyledTextAreaProps>`
  padding: 28px 16px 16px;
  border: 2px solid transparent;
  outline: none;
  transition: all 0.1s linear;
  height: 100%;
  border-radius: ${(props) => props.theme.decoration.defaultBorderRadius};
  background-color: ${(props) => props.theme.colors.gray_200};
  color: ${(props) => props.theme.gray_1000};
  resize: ${(props) => props.resizable ? 'both' : 'none'};

  ${(props) => defaultTitleStyle(props, 6)};

  &:hover {
    border-color: ${(props) => props.theme.colors.blue_500};
  }

  &::placeholder {
    color: transparent;
  }

  &:focus,
  &:focus-visible,
  &:active {
    border-color: ${(props) => props.theme.colors.blue_500};

    &::placeholder {
      color: ${(props) => props.theme.colors.gray_600}
    }

    & + ${StyledTextAreaPlaceholder} {
      top: 10px;
      color: ${(props) => props.theme.colors.blue_500};
    }
  }
`

const StyledTextAreaWrap = styled.div<IStyledTextAreaWrapProps>`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width ? typeof props.width === 'string' ? props.width : `${props.width}px` : 'auto'};
  height: ${(props) => props.height ? typeof props.height === 'string' ? props.height : `${props.height}px` : 'auto'};

  & * {
    box-sizing: border-box;
  }

  &.placeholder_top {
    & ${StyledTextAreaPlaceholder} {
      top: 10px;
      color: ${(props) => props.theme.colors.blue_500};
    }
  }

  &.error {

    & ${StyledTextArea} {
      border-color: ${(props) => props.theme.colors.red_500};
    }

    & ${StyledTextAreaPlaceholder} {
      color: ${(props) => props.theme.colors.red_500};
    }
  }

  &.disabled {

    & ${StyledTextArea} {
      pointer-events: none;
      resize: none;
      color: ${(props) => props.theme.colors.gray_800};
    }

    & ${StyledTextAreaPlaceholder} {
      color: ${(props) => props.theme.colors.gray_600};
    }
  }
`

export const Styled = {
  StyledTextAreaWrap,
  StyledTextArea,
  StyledTextAreaPlaceholder,
  StyledTextAreaLabel,
  SuccessIcon,
};