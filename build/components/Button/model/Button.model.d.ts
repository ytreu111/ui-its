import { ReactNode } from "react";
import CSS from "csstype";
import IPadding from "types/interface/IPadding";
import IMargin from "types/interface/IMargin";
export interface IButtonProps extends IPadding, IMargin {
    type?: ButtonType;
    size?: SizeType;
    disabled?: boolean;
    style?: StyleType;
    icon?: ReactNode;
    iconSize?: IIconSize | number;
    iconColor?: CSS.Property.Color;
    iconMargin?: number;
    loading?: boolean;
    onClick?: (e: MouseEvent) => void;
    clickEffect?: boolean;
    rounded?: boolean;
    children?: ReactNode;
    fontSize?: CSS.Property.FontSize;
    width?: CSS.Property.Width;
}
interface IIconSize {
    width: CSS.Property.Width;
    height: CSS.Property.Height;
}
export declare enum ButtonTypeEnum {
    primary = "primary",
    danger = "danger",
    orange = "orange",
    yellow = "yellow",
    green = "green",
    purple = "purple",
    magenta = "magenta",
    blue = "blue",
    transparent = "transparent"
}
export declare enum ButtonSizeEnum {
    large = "large",
    default = "default",
    small = "small"
}
export declare enum ButtonStyle {
    default = "default",
    translucent = "translucent"
}
export declare type ButtonType = keyof typeof ButtonTypeEnum;
export declare type SizeType = keyof typeof ButtonSizeEnum;
export declare type StyleType = keyof typeof ButtonStyle;
export {};
