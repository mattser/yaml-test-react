import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('multiplies', () => {
  render(<App />);
  const number = screen.getByText("8");
  expect(number).toBeInTheDocument();
});

