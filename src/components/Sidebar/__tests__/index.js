import { render, screen } from '../../../utils/testing';
import Sidebar from '..';

test('Renders a logo', () => {
  render(<Sidebar />);
  const logo = screen.getByRole('img', { name: /logo/i });
  expect(logo).toBeInTheDocument();
});

test('Renders a bovinos link', () => {
  render(<Sidebar />);
  const link = screen.getByRole('link', { name: /bovinos/i });
  expect(link).toBeInTheDocument();
});

test('Renders a suinos link', () => {
  render(<Sidebar />);
  const link = screen.getByRole('link', { name: /suínos/i });
  expect(link).toBeInTheDocument();
});

test('Renders an avinos link', () => {
  render(<Sidebar />);
  const link = screen.getByRole('link', { name: /avinos/i });
  expect(link).toBeInTheDocument();
});

test('Renders a bebidas link', () => {
  render(<Sidebar />);
  const link = screen.getByRole('link', { name: /bebidas/i });
  expect(link).toBeInTheDocument();
});

test('Renders an acessorios link', () => {
  render(<Sidebar />);
  const link = screen.getByRole('link', { name: /acessórios para churrasco/i });
  expect(link).toBeInTheDocument();
});

test('Renders an about link', () => {
  render(<Sidebar />);
  const link = screen.getByRole('link', { name: /quem somos?/i });
  expect(link).toBeInTheDocument();
});
