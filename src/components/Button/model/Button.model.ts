import { ReactNode } from "react";
import CSS from "csstype";

import IPadding from "types/interface/IPadding";
import IMargin from "types/interface/IMargin";

export interface IButtonProps extends IPadding, IMargin{
  type?: ButtonType;
  size?: SizeType;
  disabled?: boolean;
  buttonStyle?: StyleType;
  icon?: ReactNode;
  iconSize?: IIconSize | number;
  iconColor?: CSS.Property.Color;
  iconMargin?: number;
  loading?: boolean;
  onClick?: (e: MouseEvent, value?: string) => void;
  clickEffect?: boolean;
  rounded?: boolean;
  children?: ReactNode;
  fontSize?: CSS.Property.FontSize;
  width?: CSS.Property.Width;
  value?: string;
  className?: string;
}

interface IIconSize {
  width: CSS.Property.Width;
  height: CSS.Property.Height;
}

export enum ButtonTypeEnum {
  primary = 'primary',
  danger = 'danger',
  orange = 'orange',
  yellow = 'yellow',
  green = 'green',
  purple = 'purple',
  magenta = 'magenta',
  blue = 'blue',
  white = 'white',
}

export enum ButtonSizeEnum {
  large = 'large',
  default = 'default',
  small = 'small',
}

export enum ButtonStyleEnum {
  default = 'default',
  translucent = 'translucent',
  transparent = 'transparent',
}

export type ButtonType = keyof typeof ButtonTypeEnum;

export type SizeType = keyof typeof ButtonSizeEnum;

export type StyleType = keyof typeof ButtonStyleEnum;