import { render, screen } from '@testing-library/react';
import IconButton from './IconButton';

describe('IconButton', () => {
  it('renders a button', () => {
    render(<IconButton />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
