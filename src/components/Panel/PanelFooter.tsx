import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "styles";
import { Styled } from "./style/PanelFooter.styled";
import { IPanelFooterProps } from "./model/PanelFooter.model";

const {
  PanelFooterWrap,
} = Styled;

const PanelFooter: FC<IPanelFooterProps> = (
  {
    style,
    className,
    children,
  }) => {

  return (
    <ThemeProvider theme={theme}>
      <PanelFooterWrap style={style} className={className}>
        {children}
      </PanelFooterWrap>
    </ThemeProvider>
  );
}

export default PanelFooter;