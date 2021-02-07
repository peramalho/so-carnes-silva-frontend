import { render, screen } from '../../../utils/testing';
import Header from '..';

test('Renders a menu button', () => {
  render(<Header />);
  const button = screen.getAllByRole('button')[0];
  expect(button).toBeInTheDocument();
});

test('Renders a cart button', () => {
  render(<Header />);
  const button = screen.getAllByRole('button')[1];
  expect(button).toBeInTheDocument();
});

test('Renders a cart link', () => {
  render(<Header />);
  const link = screen.getByRole('link');
  expect(link).toBeInTheDocument();
});
