import { FC } from "react";
import CheckboxGroup from "./CheckboxGroup";
import { ICheckboxProps } from "./model/Checkbox.model";
export interface CompoundedComponent extends FC<ICheckboxProps> {
    Group: typeof CheckboxGroup;
}
declare const Checkbox: CompoundedComponent;
export type { ICheckboxProps } from './model/Checkbox.model';
export type { ICheckboxGroupProps } from './model/Group.model';
export default Checkbox;
