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

  describe('Card', () => {
    it('calls Callback when clicking the bookmark icon and it renders three buttons', () => {
      const onBookmarkCard = jest.fn();
      const onEditCard = jest.fn();
      const onDeleteCard = jest.fn();

      render(
        <MemoryRouter>
          <Card
            onBookmarkCard={onBookmarkCard}
            onEditCard={onEditCard}
            onConfirmDelete={onDeleteCard}
          />
        </MemoryRouter>
      );
      const bookmarkButton = screen.getByRole('button', {
        name: /lesezeichen/i,
      });

      userEvent.click(bookmarkButton);

      expect(onBookmarkCard).toHaveBeenCalled();

      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(3);
      userEvent.click(buttons[0]);
    });
  });
});
