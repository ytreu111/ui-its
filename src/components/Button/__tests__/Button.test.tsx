import { render, screen, prettyDOM } from '@testing-library/react';
import Button from '../Button';
import { ButtonType, ButtonTypeEnum } from '../model/Button.model';
import { ButtonTestElemsEnum } from './Button.test.model';
import userEvent from '@testing-library/user-event';

const onClick = jest.fn();

describe('Компонент Button', () => {
  test('Указание типа', () => {
    const { rerender } = render(<Button />);

    expect(screen.getByTestId(ButtonTypeEnum.primary)).toBeInTheDocument();

    for (let buttonType of Object.values(ButtonTypeEnum)) {
      rerender(<Button type={buttonType as ButtonType} />);
      expect(screen.getByTestId(buttonType)).toBeInTheDocument();
    }
  });
  test('Наличие иконки загрузки', () => {
    render(<Button loading />);
    expect(screen.getByTestId(ButtonTestElemsEnum.loading)).toBeInTheDocument();
  });
  test('Эффект при нажатии', () => {
    render(<Button clickEffect onClick={onClick}/>);
    const button = screen.getByRole('button');
    userEvent.click(button);
    userEvent.click(button);
    const wave = screen.getAllByTestId(ButtonTestElemsEnum.wave);
    expect(wave.length).toBe(1);
    expect(onClick).toBeCalledTimes(2);
  });
  test('ClassName', () => {
    const { baseElement, rerender } = render(<Button className={'test'}/>);
    expect(prettyDOM(baseElement)).toMatchSnapshot();
    rerender(<Button disabled rounded>button</Button>)
    expect(prettyDOM(baseElement)).toMatchSnapshot();
  });
});