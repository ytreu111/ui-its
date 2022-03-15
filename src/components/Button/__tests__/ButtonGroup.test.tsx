import { render, screen } from '@testing-library/react';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import userEvent from '@testing-library/user-event';

const onChange = jest.fn();

describe('Компонент ButtonGroup', () => {
  test('Отсутствие кнопок', () => {
    render(<ButtonGroup />);
    expect(screen.queryByText('button')).not.toBeInTheDocument();
  });
  test('Наличие кнопок', () => {
    render(
      <ButtonGroup defaultValue={'button-1'} onChange={onChange}>
        <Button value={'button-1'} data-testid={'button-1'}>button-1</Button>
        <Button value={'button-2'} data-testid={'button-2'}>button-2</Button>
      </ButtonGroup>,
    );

    expect(screen.getByText('button-1')).toBeInTheDocument();
    expect(screen.getByTestId('button-2')).toBeInTheDocument();
    expect(screen.queryByText('button-2')).not.toBeInTheDocument();
    expect(screen.queryByTestId('button-3')).not.toBeInTheDocument();

    userEvent.click(screen.getByTestId('button-2'));
    expect(screen.queryByText('button-1')).not.toBeInTheDocument();
    expect(screen.getByTestId('button-1')).toBeInTheDocument();
    expect(screen.getByText('button-2')).toBeInTheDocument();
    expect(onChange).toBeCalledTimes(1);
  });
  test('React.Fragment и посторонние элементы', () => {
    render(
      <ButtonGroup defaultValue={'button-2'}>
        <>
          <Button value={'button-1'} data-testid={'button-1'}>button-1</Button>
          <Button value={'button-2'} data-testid={'button-2'}>button-2</Button>
          <>
            <Button value={'button-3'} data-testid={'button-3'}>button-3</Button>
          </>
          <div data-testid={'button-4'}>button-4</div>
          <div data-testid={'button-5'}>button-5</div>
        </>
      </ButtonGroup>,
    );

    expect(screen.getByTestId('button-1')).toBeInTheDocument();
    expect(screen.getByText('button-2')).toBeInTheDocument();
    expect(screen.getByTestId('button-3')).toBeInTheDocument();
    expect(screen.queryByText('button-1')).not.toBeInTheDocument();
    expect(screen.queryByTestId('button-4')).not.toBeInTheDocument();
    expect(screen.queryByTestId('button-5')).not.toBeInTheDocument();
  });
});