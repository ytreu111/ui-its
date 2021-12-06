import styled from 'styled-components';
import { DragIcon } from "ui-its-icons";

import { styleMixins } from "styles";

const {defaultTitleStyle} = styleMixins.text;

const CheckboxText = styled.span`
  ${(props) => defaultTitleStyle(props, 7)};
  color: ${(props) => props.theme.colors.gray_1000};
  margin-left: 16px;
`;

const CheckboxIcon = styled.div<{checkboxSize?: number}>`
  width: ${(props) => props.checkboxSize ? `${props.checkboxSize}px` : '20px'};
  height: ${(props) => props.checkboxSize ? `${props.checkboxSize}px` : '20px'};
  color: ${(props) => props.theme.colors.blue_500};

  & svg {
    width: ${(props) => props.checkboxSize ? `${props.checkboxSize}px` : '20px'};
    height: ${(props) => props.checkboxSize ? `${props.checkboxSize}px` : '20px'};
  }
`

const CheckboxDragIcon = styled(DragIcon)`
  width: 20px;
  height: 20px;
  margin-left: 4px;

  & svg {
    width: 20px;
    height: 20px;
  }
`

const CheckboxInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  pointer-events: none;
`

const CheckboxWrap = styled.label`
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: max-content;

  & * {
    box-sizing: border-box;
  }

  &.disabled {
    cursor: default;
    
    & ${CheckboxIcon},
    & ${CheckboxText} {
      color: ${(props) => props.theme.colors.gray_600};
    }
  }
`;

export const Styled = {
  CheckboxWrap,
  CheckboxText,
  CheckboxIcon,
  CheckboxInput,
  CheckboxDragIcon,
}