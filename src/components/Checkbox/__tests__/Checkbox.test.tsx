import { render, screen, prettyDOM } from '@testing-library/react';
import Checkbox from '../Checkbox';
import userEvent from '@testing-library/user-event';
import { CheckpointTestElemsEnum } from './Checkpoint.test.model';
import { ActiveCheckBoxIcon, CheckBoxIcon } from 'ui-its-icons';

const onChange = jest.fn();

describe('Компонент Checkbox', () => {
  test('Наличие текста', () => {
    render(<Checkbox>checkbox</Checkbox>);
    expect(screen.getByText('checkbox')).toBeInTheDocument();
  });
  test('Наличие иконки при перемещении', () => {
    render(<Checkbox moved>checkbox</Checkbox>);
    expect(screen.getByTestId(CheckpointTestElemsEnum.moveIcon)).toBeInTheDocument();
  });
  test('Изменение иконок при клике', () => {
    render(<Checkbox onChange={onChange}>checkbox</Checkbox>);
    expect(screen.getByTestId(CheckpointTestElemsEnum.nonActiveIcon)).toBeInTheDocument();
    userEvent.click(screen.getByText('checkbox'));
    expect(screen.getByTestId(CheckpointTestElemsEnum.activeIcon)).toBeInTheDocument();
    expect(onChange).toBeCalledTimes(1);
  });
  test('Кастомная иконка', () => {
    render(<Checkbox
      iconRender={(checked) => checked
        ? <ActiveCheckBoxIcon data-testid={CheckpointTestElemsEnum.activeIcon} />
        : <CheckBoxIcon data-testid={CheckpointTestElemsEnum.nonActiveIcon} />}
    >
      checkbox
    </Checkbox>);

    expect(screen.getByTestId(CheckpointTestElemsEnum.nonActiveIcon)).toBeInTheDocument();
    userEvent.click(screen.getByText('checkbox'));
    expect(screen.getByTestId(CheckpointTestElemsEnum.activeIcon)).toBeInTheDocument();
  });
  test('disabled', () => {
    const { baseElement } = render(<Checkbox disabled>checkbox</Checkbox>);
    expect(prettyDOM(baseElement)).toMatchSnapshot();
    userEvent.click(screen.getByText('checkbox'));
    expect(screen.getByTestId(CheckpointTestElemsEnum.nonActiveIcon)).toBeInTheDocument();
  });
});