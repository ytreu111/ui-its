export interface ICheckboxOption {
  label: string;
  value: any;
  disabled?: boolean;
}

export interface ICheckboxGroupProps {
  options?: Array<ICheckboxOption>;
  value?: Array<any>,
  onChange?: (values: Array<any>) => void;
}