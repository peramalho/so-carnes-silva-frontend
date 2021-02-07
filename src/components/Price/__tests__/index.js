import { render, screen } from '../../../utils/testing';
import Price from '..';

test('Renders price value', () => {
  render(<Price children="R$ 20,00" />);
  const value = screen.getByText('R$ 20,00');
  expect(value).toBeInTheDocument();
});

test('Renders a slash block when blocked prop is true', () => {
  render(<Price children="R$ 20,00" blocked />);
  const blocked = screen.getByTestId('block');
  expect(blocked).toBeInTheDocument();
});

test('Does not render a slash block when blocked prop is false', () => {
  render(<Price children="R$ 20,00" />);
  const blocked = screen.queryByTestId('block');
  expect(blocked).not.toBeInTheDocument();
});
