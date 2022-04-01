import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  it('renders a label and an input', () => {
    render(
      <Input labelText="Phrase" placeholder="Enter your word" name="phrase" />
    );

    const input = screen.getByLabelText('Phrase');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('placeholder', 'Enter your word');
    expect(input).toHaveAttribute('name', 'phrase');
  });
});
