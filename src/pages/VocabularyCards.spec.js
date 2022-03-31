import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import VocabularyCards from './VocabularyCards';

it('has a title and one link and it renders a button', () => {
  render(
    <MemoryRouter>
      <VocabularyCards />
    </MemoryRouter>
  );
  const title = screen.getByText('Vocabulary Cards');
  expect(title).toBeInTheDocument();
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
  const links = screen.getAllByRole('link');
  expect(links.length).toBeGreaterThan(0);
});
