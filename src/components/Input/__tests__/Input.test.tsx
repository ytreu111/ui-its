import { render, screen, prettyDOM, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from '../Input';
import { StarIcon } from 'ui-its-icons';
import { InputTestElemsEnum } from './Input.test.model';

const onChange = jest.fn();
const onFocus = jest.fn();
const onBlur = jest.fn();
const optional = jest.fn();

describe('Компонент Input', () => {
  test('className', () => {
    const { baseElement } = render(
      <Input
        className={'test'}
        small
        error
        icon={<StarIcon />}
      />,
    );
    expect(prettyDOM(baseElement)).toMatchSnapshot();
  });
  test('disabled', () => {
    render(<Input disabled />);
    const input = screen.getByTestId('input');
    userEvent.click(input);
    expect(input).not.toHaveFocus();
    expect(input).toBeDisabled();
  });
  test('focus/blur', () => {
    const { baseElement } = render(
      <Input
        onFocus={onFocus}
        onBlur={onBlur}
      />,
    );

    const input = screen.getByTestId(InputTestElemsEnum.input);
    const inputSnapshot = prettyDOM(baseElement);

    userEvent.click(input);
    expect(input).toHaveFocus();
    expect(onFocus).toHaveBeenCalledTimes(1);

    fireEvent.focusOut(input);
    expect(inputSnapshot).toBe(prettyDOM(baseElement));
    expect(onBlur).toHaveBeenCalledTimes(1);
  });
  test('Функционал кнопки(optional)', () => {
    const { rerender } = render(
      <Input
        optional={optional}
      />,
    );

    const optionalIcon = screen.getByTestId(InputTestElemsEnum.optional);
    expect(optionalIcon).toBeInTheDocument();
    userEvent.click(optionalIcon);
    expect(optional).toHaveBeenCalledTimes(1);

    rerender(<Input
      optionalIcon={<StarIcon data-testid={'optional-test'} />}
      optional={optional}
    />);
    const testOptionalIcon = screen.getByTestId('optional-test');
    expect(testOptionalIcon).toBeInTheDocument();
    userEvent.click(testOptionalIcon);
    expect(optional).toHaveBeenCalledTimes(2);
  });
  test('Тип', () => {
    const { rerender } = render(<Input />);
    expect(screen.getByTestId(InputTestElemsEnum.input)).toBeInTheDocument();
    rerender(<Input type={'password'} />);
    expect(screen.getByTestId(InputTestElemsEnum.inputPassword)).toBeInTheDocument();
  });
  test('label', () => {
    render(<Input label={'input'} />);
    expect(screen.getByText('input')).toBeInTheDocument();
  });
  test('onChange', () => {
    render(<Input onChange={onChange} />);
    userEvent.click(screen.getByTestId(InputTestElemsEnum.input));
    userEvent.keyboard('input');
    expect(onChange).toHaveBeenCalledTimes(5);
  });
});