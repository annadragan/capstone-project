import { render, screen } from '@testing-library/react';
import AsideButton from './AsideButton';

describe('AsideButton', () => {
  it('renders a button', () => {
    render(<AsideButton />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
