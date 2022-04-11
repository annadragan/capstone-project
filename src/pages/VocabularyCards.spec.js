import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import VocabularyCards from './VocabularyCards';
import userEvent from '@testing-library/user-event';

it('has a title and one link and it renders a two button', () => {
  const onScrollUp = jest.fn();
  const onBookmarkCard = jest.fn();
  const onEditCard = jest.fn();
  const onDeleteCard = jest.fn();

  const data = [
    {
      _id: '_id',
      word: 'stolpern',
      example: 'Der Manager ist über die Wirecardaffere gestolpert',
      explanation:
        'mit dem Fuß gegen ein Hindernis stoßen und aus dem Gleichgewicht geraten',
    },
  ];
  render(
    <MemoryRouter>
      <VocabularyCards
        vocabulary={data}
        onScrollUp={onScrollUp}
        onDeleteCard={onDeleteCard}
        onBookmarkCard={onBookmarkCard}
        onEditCard={onEditCard}
      />
    </MemoryRouter>
  );

  const title = screen.getByText('Vokabelkärtchen');
  const links = screen.getAllByRole('link');

  expect(title).toBeInTheDocument();
  expect(links.length).toBeGreaterThan(0);

  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(4);
  userEvent.click(buttons[0]);
});
