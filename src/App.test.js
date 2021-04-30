import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders title', () => {
  render(<App />);
  const title = screen.getByText(/My TDD App/i);
  expect(title).toBeInTheDocument();
});

test('three row components', () => {
  render(<App />);
  const rows = screen.getAllByText(/row*/i);
  console.log(rows);
  expect(rows).toHaveLength(3);
});