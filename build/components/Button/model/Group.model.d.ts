import { StyleType } from "./Button.model";
import { ReactNode } from "react";
export interface IButtonGroupProps {
    value?: string;
    buttonGap?: number;
    selectButton?: StyleType;
    deselectButton?: StyleType;
    defaultIcon?: ReactNode;
    onChange?: (event: MouseEvent, value?: string) => void;
    defaultValue?: string;
}
export interface IButtonOptions {
    selectButton: StyleType;
    deselectButton: StyleType;
    defaultIcon: ReactNode;
    onChange: (event: MouseEvent, value?: string) => void;
}
