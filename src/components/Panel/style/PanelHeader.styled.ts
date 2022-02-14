import styled from 'styled-components';
import { styleMixins } from "styles";

const { defaultTitleStyle } = styleMixins.text;

const PanelHeaderWrap = styled.div`
  padding: 14px 16px;
  box-shadow: 0 2px 8px rgba(47, 128, 237, 0.12);
  
  ${(props) => defaultTitleStyle(props, 6)};
  color: ${(props) => props.theme.colors.gray_1000};
`

export const Styled = {
  PanelHeaderWrap,
}