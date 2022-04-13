import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import IdiomaticExpressions from './IdiomaticExpressions';

describe('IdiomaticExpressions', () => {
  it('has a title', () => {
    const data = [
      {
        _id: '_id',
        expression: '"In China ist ein Sack Reis umgefallen"',
        meaning: 'Ausdruck des eigenen Desinteresses.',
      },
    ];
    render(
      <MemoryRouter>
        <IdiomaticExpressions quote={data} />
      </MemoryRouter>
    );
    const title = screen.getByText('Redewendungen');
    expect(title).toBeInTheDocument();

    const generateButton = screen.getByRole('button');
    expect(generateButton).toBeInTheDocument();
  });
});
