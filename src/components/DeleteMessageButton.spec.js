import { render, screen } from '@testing-library/react';
import DeleteMessageButton from './DeleteMessageButton';

describe('Button', () => {
  it('renders a button', () => {
    render(<DeleteMessageButton />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
