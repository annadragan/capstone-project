import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import VocabularyCards from './VocabularyCards';

it('has a title and one link and it renders a button', () => {
  render(
    <MemoryRouter>
      <VocabularyCards />
    </MemoryRouter>
  );
  const title = screen.getByText('Vokabelkärtchen');
  const button = screen.getByRole('button');
  const links = screen.getAllByRole('link');

  expect(title).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  expect(links.length).toBeGreaterThan(0);
});
