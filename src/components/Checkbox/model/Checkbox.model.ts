import { ChangeEvent, ReactElement } from "react";

export interface ICheckboxProps {
  checked?: boolean;
  value?: any;
  moved?: boolean;
  disabled?: boolean;
  checkboxSize?: number;
  name?: string;
  iconRender?: (checked: boolean) => ReactElement;
  onChange?: (checked: boolean, value: any, event: ChangeEvent<HTMLInputElement>) => void;
}