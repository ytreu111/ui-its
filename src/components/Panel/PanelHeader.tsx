import React, { FC } from "react";
import theme from "styles/theme/theme";
import { ThemeProvider } from "styled-components";
import { Styled } from "./style/PanelHeader.styled";
import { IPanelHeaderProps } from "./model/PanelHeader.model";

const {
  PanelHeaderWrap,
} = Styled;

const PanelHeader: FC<IPanelHeaderProps> = (
  {
    style,
    className,
    children,
  }) => {

  return (
    <ThemeProvider theme={theme}>
      <PanelHeaderWrap className={className} style={style}>
        {children}
      </PanelHeaderWrap>
    </ThemeProvider>
  );
}

export default PanelHeader;