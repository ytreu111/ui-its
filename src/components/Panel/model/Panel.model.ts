import { CSSProperties, ReactNode } from "react";

export interface IPanelProps{
  className?: string;
  style?: CSSProperties;
  headerContent?: ReactNode;
  headerStyle?: CSSProperties;
  headerClass?: string;
  headerComponent?: ReactNode;
  footerContent?: ReactNode;
  footerStyle?: CSSProperties;
  footerClass?: string;
  footerComponent?: ReactNode;
  contentStyle?: CSSProperties;
  contentClass?: string;
}