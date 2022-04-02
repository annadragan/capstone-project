import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Card from './Card';

describe('Card', () => {
  it('renders a word, example and explanation and a delete button', () => {
    render(
      <MemoryRouter>
        <Card
          word="Aufflackern"
          example='"Der Widerstand ist noch einmal kurz aufgeflackert"'
          explanation="an Heftigkeit gewinnen, auflodern, heftiger werden. Übertragen: immer mal wieder kurz an intensität gewinnen"
        />
      </MemoryRouter>
    );
    const word = screen.getByText('Aufflackern');
    const example = screen.getByText(
      '"Der Widerstand ist noch einmal kurz aufgeflackert"'
    );
    const explanation = screen.getByText(
      'an Heftigkeit gewinnen, auflodern, heftiger werden. Übertragen: immer mal wieder kurz an intensität gewinnen'
    );

    expect(word).toBeInTheDocument();
    expect(example).toBeInTheDocument();
    expect(explanation).toBeInTheDocument();
  });

  it('calls onClick when clicking the delete icon', () => {
    const callback = jest.fn();
    render(
      <MemoryRouter>
        <Card onDeleteCard={callback} />
      </MemoryRouter>
    );

    const deleteButton = screen.getByRole('button');
    userEvent.click(deleteButton);
    expect(deleteButton).toBeInTheDocument();
    expect(callback).toHaveBeenCalled();
  });
});
