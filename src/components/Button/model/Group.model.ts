import { StyleType } from './Button.model';
import { ReactNode } from 'react';

export interface IButtonGroupProps {
  value?: string;
  buttonGap?: number;
  selectButton?: StyleType,
  deselectButton?: StyleType,
  defaultIcon?: ReactNode,
  onChange?: (event: MouseEvent, value?: string) => void;
  defaultValue?: string;
}

type ButtonOptionsFields = 'selectButton' | 'deselectButton' | 'defaultIcon' | 'onChange';

export type ButtonOptions = Required<Pick<IButtonGroupProps, ButtonOptionsFields>>;