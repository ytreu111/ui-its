import CSS from 'csstype';

export interface ITextAreaProps {
  resizable?: boolean;
  placeholder?: string;
  editableHelp?: string;
  disabled?: boolean;
  readonly?: boolean;
  value?: string | number;
  error?: boolean;
  label?: string;
  width?: CSS.Property.Width | number;
  height?: CSS.Property.Height | number;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
}

export interface IStyledTextAreaProps {
  resizable?: boolean;
}

export interface IStyledTextAreaWrapProps {
  width?: CSS.Property.Width | number;
  height?: CSS.Property.Height | number;
}