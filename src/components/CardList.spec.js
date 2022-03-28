import { render, screen } from '@testing-library/react';
import CardList from './CardList.js';

describe('CardList', () => {
  it('Render a list of vocabulary cards', () => {
    render(<CardList />);
    const cardList = screen.getByRole('list');
    expect(cardList).toBeInTheDocument();
  });
});
