import { PropsWithChildren } from "react";
import * as CSS from "csstype";

export interface IButtonProps extends PropsWithChildren<any> {
  type?: ButtonType;
  size?: SizeType;
  disabled?: boolean;
  style?: StyleType;
  icon?: JSX.Element
  iconSize?: IIconSize | number;
  iconColor?: CSS.Property.Color;
  iconMargin?: number;
  loading?: boolean;
  onClick?: (e: MouseEvent) => void;
  clickEffect?: boolean;
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
}

export enum ButtonSizeEnum {
  large = 'large',
  default = 'default',
  small = 'small',
}

export enum ButtonStyle {
  //TODO Временно убрано по просьбе дизайнеров, тк оно не используется в системе
  // stroke = 'stroke',
  default = 'default',
  translucent = 'translucent',
}

export type ButtonType = keyof typeof ButtonTypeEnum;

export type SizeType = keyof typeof ButtonSizeEnum;

export type StyleType = keyof typeof ButtonStyle;