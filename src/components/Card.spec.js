import Card from './Card';
import { render, screen } from '@testing-library/react';

describe('Card', () => {
  it('renders a word, example and explanation', () => {
    render(
      <Card
        word="Aufflackern"
        example='"Der Widerstand ist noch einmal kurz aufgeflackert"'
        explanation="an Heftigkeit gewinnen, auflodern, heftiger werden. Übertragen: immer mal wieder kurz an intensität gewinnen"
      />
    );
    const word = screen.getByText('Aufflackern');
    const example = screen.getByText(
      '"Der Widerstand ist noch einmal kurz aufgeflackert"'
    );
    const explanation = screen.getByText(
      'an Heftigkeit gewinnen, auflodern, heftiger werden. Übertragen: immer mal wieder kurz an intensität gewinnen'
    );
    expect(word).toBeInTheDocument();
    expect(example).toBeInTheDocument();
    expect(explanation).toBeInTheDocument();
  });
});
