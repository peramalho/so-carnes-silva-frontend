import { render, screen } from '../../../utils/testing';
import Card from '..';

test('Renders a title', () => {
  render(<Card title="Test" price={20} />);
  const title = screen.getByRole('heading', { name: 'Test' });
  expect(title).toBeInTheDocument();
});

test('Renders a price label', () => {
  render(<Card title="Test" price={20} />);
  const price = screen.getByText(/r\$ 20,00/i);
  expect(price).toBeInTheDocument();
});

test('Renders an old price label', () => {
  render(<Card title="Test" price={20} oldPrice={40} />);
  const oldPrice = screen.getByText(/r\$ 40,00/i);
  expect(oldPrice).toBeInTheDocument();
});

test('Does not render a old price label when not specificated', () => {
  render(<Card title="Test" price={20} />);
  const oldPrice = screen.queryByText(/r\$ 40,00/i);
  expect(oldPrice).not.toBeInTheDocument();
});

test('Renders an image', () => {
  render(<Card title="Test" price={20} />);
  const image = screen.getByRole('img');
  expect(image).toBeInTheDocument();
});
