import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import ImageCard from './ImageCard.js';

describe('ImageCard', () => {
  it('renders a tradition with an image', () => {
    const onDeleteTradition = jest.fn();

    render(
      <MemoryRouter>
        <ImageCard
          onConfirmDelete={onDeleteTradition}
          title="Tradition"
          tradition="1931 kam die Tradition aus den Vereinigten Staaten nach Schweden und wurde zunächst auch im Juni gefeiert."
        />
      </MemoryRouter>
    );

    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toBeInTheDocument();

    const picture = screen.getByRole('img');
    expect(picture).toBeInTheDocument();

    const button = screen.getAllByRole('button');
    expect(button).toHaveLength(1);
    userEvent.click(button[0]);

    const tradition = screen.getByText(
      '1931 kam die Tradition aus den Vereinigten Staaten nach Schweden und wurde zunächst auch im Juni gefeiert.'
    );
    expect(tradition).toBeInTheDocument();

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
    userEvent.click(buttons[0]);
  });
});
