import { render, screen } from '@testing-library/react';
import CardList from './CardList';

describe('CardList', () => {
  it('renders a list of vocabulary cards', () => {
    render(<CardList />);

    const cardList = screen.getByRole('list');
    expect(cardList).toBeInTheDocument();
  });
});
