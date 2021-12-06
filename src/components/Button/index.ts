import { FC } from "react";

import InternalButton from "./Button";
import Group from './Group'
import { IButtonProps } from "./model/Button.model";

export interface CompoundedComponent extends FC<IButtonProps> {
  Group: typeof Group;
}

const Button = InternalButton as CompoundedComponent;

Button.Group = Group;

export type { IButtonProps, ButtonStyleEnum, ButtonSizeEnum, ButtonTypeEnum } from './model/Button.model'
export type { IButtonGroupProps } from './model/Group.model'
export default Button;