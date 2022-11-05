import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders active nav item', () => {
  Object.defineProperty(window, 'matchMedia', {
      value: () => {
          return {
              matches: true,
              addEventListener: () => {},
              removeEventListener: () => {}
          }
      }
  })
  render(<App />);
  const linkElement = screen.getByText(/Active/i);
  expect(linkElement).toBeInTheDocument();
});
