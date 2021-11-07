import { ReactNode } from 'react';
export interface InputProps {
    value?: string;
    disabled?: boolean;
    small?: boolean;
    placeholder?: string;
    editableHelp?: string;
    label?: string;
    icon?: ReactNode;
    error?: boolean;
    allowClear?: boolean;
    autoWidth?: boolean;
    onChange?: (value: string) => void;
    onBlur?: () => void;
    onFocus?: () => void;
    name?: string;
}
