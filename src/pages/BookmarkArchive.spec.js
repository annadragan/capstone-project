import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookmarkArchive from './BookmarkArchive';

describe('BookmarkArchive', () => {
  it('has a title and renders a header', () => {
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
        <BookmarkArchive vocabulary={data} />
      </MemoryRouter>
    );
    const title = screen.getByText('Archiv');

    expect(title).toBeInTheDocument();
  });
});
