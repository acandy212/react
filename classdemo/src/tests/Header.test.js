import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders active nav item', () => {
    Object.defineProperty(window, 'matchMedia', {
        value: () => {
            return {
                matches: false,
                addEventListener: () => {},
                removeEventListener: () => {}
            }
        }
    })
  render(<Header />);
  const linkElement = screen.getByText(/and save to reload/i);
  expect(linkElement).toBeInTheDocument();
});