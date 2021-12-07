import { FC } from "react";
import ButtonGroup from './ButtonGroup';
import { IButtonProps } from "./model/Button.model";
export interface CompoundedComponent extends FC<IButtonProps> {
    Group: typeof ButtonGroup;
}
declare const Button: CompoundedComponent;
export type { IButtonProps, ButtonStyleEnum, ButtonSizeEnum, ButtonTypeEnum } from './model/Button.model';
export type { IButtonGroupProps } from './model/Group.model';
export default Button;
