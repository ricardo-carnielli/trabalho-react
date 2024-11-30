import { render, screen } from '@testing-library/react';
import App from './App';

test('renders counter title', () => {
  render(<App />);
  const titleElement = screen.getByText(/bem-vindo ao contador!/i);
  expect(titleElement).toBeInTheDocument();
});
