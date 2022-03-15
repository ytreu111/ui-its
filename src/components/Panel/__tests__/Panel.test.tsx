import { render, prettyDOM, screen } from '@testing-library/react';
import Panel from '../Panel';

const customComponent = <div>panel</div>;

describe('Компонент Panel', () => {
  test('Шапка', () => {
    const { rerender, baseElement } = render(<Panel headerComponent={customComponent} />);
    expect(screen.getByText('panel')).toBeInTheDocument();

    rerender(
      <Panel
        headerContent={'header-1'}
        headerClass={'header'}
        headerStyle={{ color: 'black' }}
      />,
    );
    expect(screen.getByText('header-1')).toBeInTheDocument();
    expect(screen.getByText('header-1')).toHaveClass('header');
    expect(screen.getByText('header-1')).toHaveStyle('color: black');

    rerender(<Panel />);
    expect(prettyDOM(baseElement)).toMatchSnapshot();
  });
  test('Футер', () => {
    const { rerender, baseElement } = render(<Panel footerComponent={customComponent} />);
    expect(screen.getByText('panel')).toBeInTheDocument();

    rerender(
      <Panel
        footerContent={'footer-1'}
        footerClass={'footer'}
        footerStyle={{ color: 'black' }}
      />,
    );
    expect(screen.getByText('footer-1')).toBeInTheDocument();
    expect(screen.getByText('footer-1')).toHaveClass('footer');
    expect(screen.getByText('footer-1')).toHaveStyle('color: black');

    rerender(<Panel />);
    expect(prettyDOM(baseElement)).toMatchSnapshot();
  });
  test('Контент', () => {
    const { baseElement } = render(
      <Panel contentClass={'content'} contentStyle={{ color: 'black' }}>
        {customComponent}
      </Panel>,
    );
    expect(prettyDOM(baseElement)).toMatchSnapshot();
  });
});