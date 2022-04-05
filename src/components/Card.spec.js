import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Card from './Card';

describe('Card', () => {
  it('renders a word, example and explanation', () => {
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

  it('calls onClick when clicking the delete or bookmark icon', () => {
    const bookmarkCard = jest.fn();
    const deleteCard = jest.fn();
    render(
      <MemoryRouter>
        <Card onConfirmDelete={deleteCard} onBookmarkCard={bookmarkCard} />
      </MemoryRouter>
    );
    const bookmarkButton = screen.getByRole('button', { name: /bookmark/i });
    const deleteButton = screen.getByRole('button', { name: /delete/i });

    userEvent.click(bookmarkButton);
    userEvent.click(deleteButton);

    expect(deleteCard).toHaveBeenCalled();
    expect(bookmarkCard).toHaveBeenCalled();
  });
});
