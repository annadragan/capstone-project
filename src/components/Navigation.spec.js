import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('renders a navigation with one link', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const vocabularycardsLink = screen.getByRole('link', {
      name: /Vocabulary Cards/i,
    });

    expect(vocabularycardsLink).toBeInTheDocument();
  });
});
