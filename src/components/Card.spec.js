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

  it('calls Callback when clicking the bookmark icon', () => {
    const Callback = jest.fn();
    render(
      <MemoryRouter>
        <Card onBookmarkCard={Callback} />
      </MemoryRouter>
    );
    const bookmarkButton = screen.getByRole('button', { name: /bookmark/i });

    userEvent.click(bookmarkButton);

    expect(Callback).toHaveBeenCalled();
  });
});
