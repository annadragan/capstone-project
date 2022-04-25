import { render, screen } from '@testing-library/react';
import CardList from './CardList';
import { MemoryRouter } from 'react-router-dom';

describe('CardList', () => {
  const data = [
    {
      _id: '_id',
      word: 'stolpern',
      example: 'Der Manager ist über die Wirecardaffäre gestolpert',
      explanation:
        'mit dem Fuß gegen ein Hindernis stoßen und aus dem Gleichgewicht geraten',
    },
  ];

  it('renders a list of vocabulary cards', () => {
    render(
      <MemoryRouter>
        <CardList vocabulary={data} />
      </MemoryRouter>
    );

    const cardList = screen.getByRole('list');
    expect(cardList).toBeInTheDocument();
  });
});
