import { render, screen } from '@testing-library/react';
import CardList from './CardList';

describe('CardList', () => {
  it('renders a list of vocabulary cards and a button', () => {
    render(<CardList />);

    const cardList = screen.getByRole('list');
    expect(cardList).toBeInTheDocument();
  });
});
