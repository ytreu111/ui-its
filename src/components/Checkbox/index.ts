import { FC } from "react";

import InternalCheckbox from "./Checkbox";
import Group from "./Group";
import { ICheckboxProps } from "./model/Checkbox.model";

export interface CompoundedComponent extends FC<ICheckboxProps> {
  Group: typeof Group
}

const Checkbox = InternalCheckbox as CompoundedComponent;

Checkbox.Group = Group;

export type { ICheckboxProps } from './model/Checkbox.model'
export default Checkbox;