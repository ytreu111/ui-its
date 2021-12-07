import { ReactNode } from 'react';
import CSS from "csstype";
export interface IInputProps {
    value?: string;
    disabled?: boolean;
    small?: boolean;
    placeholder?: string;
    editableHelp?: string;
    label?: string;
    icon?: ReactNode;
    error?: boolean;
    onChange?: (value: string) => void;
    onBlur?: () => void;
    onFocus?: () => void;
    name?: string;
    width?: number | CSS.Property.Width;
    optional?: () => void;
    optionalIcon?: ReactNode;
    type?: InputType;
}
export declare enum InputTypeEnum {
    password = "password"
}
export declare type InputType = keyof typeof InputTypeEnum;
