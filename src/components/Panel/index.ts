import { FC } from "react";
import InternalPanel from "./Panel";
import { IPanelProps } from "./model/Panel.model";
import PanelHeader from "./PanelHeader";
import PanelFooter from "./PanelFooter";

export interface CompoundedComponent extends FC<IPanelProps> {
  Header: typeof PanelHeader,
  Footer: typeof PanelFooter,
}

const Panel = InternalPanel as CompoundedComponent;
Panel.Header = PanelHeader;
Panel.Footer = PanelFooter;

export type { IPanelProps } from './model/Panel.model'
export type { IPanelHeaderProps } from './model/PanelHeader.model'
export type { IPanelFooterProps } from './model/PanelFooter.model'
export default Panel