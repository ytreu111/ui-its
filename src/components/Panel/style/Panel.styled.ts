import styled from 'styled-components';
import { styleMixins } from "styles";

const { hideScrollbar, getDefaultBeatifiedScrollbar } = styleMixins.other;

const PanelWrap = styled.div`
  transition: all 0.3s;
  overflow-y: scroll;
  overflow-x: hidden;
  height: fit-content;
  display: flex;
  position: relative;
  flex-direction: column;

  box-shadow: 0 2px 8px rgba(47, 128, 237, 0.12);
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.decoration.largeBorderRadius};

  ${hideScrollbar()}
`

const PanelContentWrap = styled.div`
  display: grid;
  align-content: start;
  grid-gap: ${(props) => props.theme.padding.default};
  padding: ${(props) => props.theme.padding.default};
  flex: 1 1 auto;
  overflow-y: scroll;
  overflow-x: hidden;

  ${(props) => getDefaultBeatifiedScrollbar(props)};
`

export const Styled = {
  PanelWrap,
  PanelContentWrap,
}