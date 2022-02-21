import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('Calls function and calculation', () => {
  render(<App />);
  const number = screen.getByText("5");
  expect(number).toBeInTheDocument();
})