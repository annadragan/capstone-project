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
  });
});
