import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookmarkArchive from './BookmarkArchive';

it('has a title', () => {
  render(
    <MemoryRouter>
      <BookmarkArchive />
    </MemoryRouter>
  );
  const title = screen.getByText('Favoriten');

  expect(title).toBeInTheDocument();
});
