import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Searchbar from './Searchbar';

describe('Searchbar', () => {
  it('renders a label, an input element and a searchbox and it calls onChange event when change input value', () => {
    const newValue = jest.fn();
    render(
      <MemoryRouter>
        <Searchbar onSearch={newValue} />
      </MemoryRouter>
    );

    const inputElement = screen.getByLabelText(/Suche/i);
    const searchBox = screen.getByRole('searchbox');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('placeholder', 'Finde dein Wort...');
    expect(searchBox).toBeInTheDocument();

    userEvent.type(inputElement, 'c');

    expect(newValue).toHaveBeenCalled();
  });
});
