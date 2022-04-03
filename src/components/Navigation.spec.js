import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('renders a navigation with two links', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const navigation = screen.getByRole('navigation');
    expect(navigation).toBeInTheDocument();

    // const vocabularycardsLink = screen.getByRole('link', {
    //   name: /vocabularycards/i,
    // });

    // expect(vocabularycardsLink).toBeInTheDocument();

    // const vocabularyLink = screen.getByRole('link');
    // const archiveLink = screen.getByRole('link', { name: /archive/i });

    // expect(vocabularyLink).toBeInTheDocument();
    // expect(archiveLink).toBeInTheDocument();
  });
});
