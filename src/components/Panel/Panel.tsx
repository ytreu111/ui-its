import React, { FC, useMemo } from "react";
import { ThemeProvider } from "styled-components";

import { IPanelProps } from "./model/Panel.model";
import { Styled } from "./style/Panel.styled";
import theme from "styles/theme/theme";
import PanelHeader from "./PanelHeader";
import PanelFooter from "./PanelFooter";

const {
  PanelWrap,
  PanelContentWrap,
} = Styled;

const Panel: FC<IPanelProps> = (
  {
    children,
    headerContent,
    headerStyle,
    headerClass,
    headerComponent,
    footerContent,
    footerStyle,
    footerClass,
    footerComponent,
    contentClass,
    contentStyle,
    ...props
  },
) => {

  const header = useMemo(() => {
    if (headerComponent) {
      return headerComponent;
    } else if (headerContent) {
      return <PanelHeader className={headerClass} style={headerStyle}>{headerContent}</PanelHeader>
    }

    return null;
  }, [headerClass, headerComponent, headerContent, headerStyle]);

  const footer = useMemo(() => {
    if (footerComponent) {
      return footerComponent;
    } else if (footerContent) {
      return <PanelFooter className={footerClass} style={footerStyle}>{footerContent}</PanelFooter>
    }

    return null;
  }, [footerClass, footerComponent, footerContent, footerStyle]);

  return (
    <ThemeProvider theme={theme}>
      <PanelWrap {...props}>
        {header}
        <PanelContentWrap className={contentClass} style={contentStyle}>
          {children}
        </PanelContentWrap>
        {footer}
      </PanelWrap>
    </ThemeProvider>
  );
}

export default Panel;