import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AsideButton from './AsideButton';

describe('AsideButton', () => {
  it('renders a button', () => {
    render(<AsideButton />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('has onClick function', () => {
    const onClick = jest.fn();
    render(<AsideButton onClick={onClick} />);

    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
