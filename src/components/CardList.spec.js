import { render, screen } from '@testing-library/react';
import CardList from './CardList';

describe('CardList', () => {
  const data = [
    {
      _id: '_id',
      word: 'stolpern',
      example: 'Der Manager ist über die Wirecardaffere gestolpert',
      explanation:
        'mit dem Fuß gegen ein Hindernis stoßen und aus dem Gleichgewicht geraten',
    },
  ];
  it('renders a list of vocabulary cards', () => {
    render(<CardList vocabulary={data} />);

    const cardList = screen.getByRole('list');
    expect(cardList).toBeInTheDocument();
  });
});
