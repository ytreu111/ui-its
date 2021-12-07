import { FC } from "react";

import InternalButton from "./Button";
import ButtonGroup from './ButtonGroup'
import { IButtonProps } from "./model/Button.model";

export interface CompoundedComponent extends FC<IButtonProps> {
  Group: typeof ButtonGroup;
}

const Button = InternalButton as CompoundedComponent;

Button.Group = ButtonGroup;

export type { IButtonProps, ButtonStyleEnum, ButtonSizeEnum, ButtonTypeEnum } from './model/Button.model'
export type { IButtonGroupProps } from './model/Group.model'
export default Button;