import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import VocabularyCards from './VocabularyCards';

describe('VocabularyCards', () => {
  it('has a title and one link and it renders a one buttons', () => {
    const onScrollUp = jest.fn();

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
        <VocabularyCards vocabulary={data} onScrollUp={onScrollUp} />
      </MemoryRouter>
    );

    const title = screen.getByText('Vokabelkärtchen');
    const links = screen.getAllByRole('link');

    expect(title).toBeInTheDocument();
    expect(links.length).toBeGreaterThan(0);

    const button = screen.getAllByRole('button');
    expect(button).toHaveLength(1);
  });
});
