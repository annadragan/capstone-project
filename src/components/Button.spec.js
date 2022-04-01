import Button from './Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  it('renders a button', () => {
    render(<Button />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
