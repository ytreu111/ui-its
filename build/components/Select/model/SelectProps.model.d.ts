import CSS from "csstype";
export interface IOptionProps {
    value: string | number;
    label: string;
}
export interface ISelectProps {
    placeholder?: string;
    value?: string;
    searchPlaceholder?: string;
    disabled?: boolean;
    showSearch?: boolean;
    label?: string;
    options?: Array<IOptionProps>;
    required?: boolean;
    error?: boolean;
    allowClear?: boolean;
    small?: boolean;
    mode?: SelectMode;
    width?: number | CSS.Property.Width;
    onChange?: (value: string | Array<string> | undefined, option: any) => void;
    onFocus?: () => void;
    onBlur?: () => void;
}
declare type SelectMode = keyof typeof SelectModeEnum;
export declare enum SelectModeEnum {
    default = "default",
    multiple = "multiple"
}
export {};
