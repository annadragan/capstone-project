import { render, screen } from '@testing-library/react';
import ImageCardList from './ImageCardList';

describe('ImageCardList', () => {
  it('renders a list of vocabulary cards and a button', () => {
    render(<ImageCardList />);

    const storiesList = screen.getByRole('list');
    expect(storiesList).toBeInTheDocument();
  });
});
