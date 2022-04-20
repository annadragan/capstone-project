import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('renders a navigation with five links', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const navigation = screen.getByRole('navigation');
    expect(navigation).toBeInTheDocument();

    const NavLinks = screen.getAllByRole('link');
    expect(NavLinks).toHaveLength(5);
  });
});
