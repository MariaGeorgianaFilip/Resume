import { render, screen } from '@testing-library/react';
import Home from './views/Home';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test.only('Text component', () => {
  const { container } = render(<TextComponent />);
  const h3 = container.querySelector('h3')
  expect(h3).toBeInTheDocument();
})
