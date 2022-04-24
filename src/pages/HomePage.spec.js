import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('has a title and two links', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    const title = screen.getByText('Startseite');
    const link = screen.getAllByRole('link');

    expect(title).toBeInTheDocument();
    expect(link.length).toBeGreaterThan(1);
  });
});
