import { render, screen, prettyDOM, getByTestId, fireEvent } from '@testing-library/react';
import TextArea from '../TextArea';
import { TextAreaTestElemsEnum } from './TextArea.test.model';
import userEvent from '@testing-library/user-event';

const onChange = jest.fn();
const onFocus = jest.fn();
const onBlur = jest.fn();

describe('Компонент TextArea', () => {
  test('className', () => {
    const { rerender } = render(<TextArea error />);
    expect(screen.getByTestId(TextAreaTestElemsEnum.textAreaWrap)).toHaveClass('error');

    rerender(<TextArea disabled />);
    expect(screen.getByTestId(TextAreaTestElemsEnum.textAreaWrap)).toHaveClass('disabled');
    expect(screen.getByTestId(TextAreaTestElemsEnum.textArea)).toBeDisabled();
  });
  test('placeholder/label', () => {
    const { rerender } = render(<TextArea label={'textarea-label'} />);
    expect(screen.getByText('textarea-label')).toBeInTheDocument();
    expect(screen.queryByText('textarea-placeholder')).not.toBeInTheDocument();

    rerender(<TextArea placeholder={'textarea-placeholder'} />);
    expect(screen.queryByText('textarea-label')).not.toBeInTheDocument();
    expect(screen.getByText('textarea-placeholder')).toBeInTheDocument();
  });
  test('События', () => {
    render(<TextArea onFocus={onFocus} onBlur={onBlur} onChange={onChange} />);
    const textarea = screen.getByTestId(TextAreaTestElemsEnum.textArea);

    userEvent.click(textarea);
    expect(textarea).toHaveFocus();
    expect(onFocus).toBeCalledTimes(1);

    userEvent.keyboard('text');
    expect(onChange).toBeCalledTimes(4);
    expect(screen.getByTestId(TextAreaTestElemsEnum.successIcon)).toBeInTheDocument();
    expect(screen.getByTestId(TextAreaTestElemsEnum.textAreaWrap)).toHaveClass('placeholder_top');

    fireEvent.focusOut(textarea);
    expect(onBlur).toBeCalledTimes(1);
  });
});