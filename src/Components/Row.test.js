import { render, screen } from '@testing-library/react';
import Row from './Row';

test('three column components', () => {
    render(<Row />);
    const columns = screen.getAllByText(/column*/i);
    expect(columns).toHaveLength(3);
  });