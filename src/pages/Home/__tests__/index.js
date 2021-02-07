import { render, screen } from '../../../utils/testing';
import Home from '..';

test('Renders a title', () => {
  render(<Home />);
  const title = screen.getByRole('heading', { name: /ofertas do dia/i });
  expect(title).toBeInTheDocument();
});
