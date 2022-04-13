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
          tradition="1931 kam die Tradition aus den Vereinigten Staaten nach Schweden und wurde zunächst auch im Juni gefeiert."
        />
      </MemoryRouter>
    );
    const tradition = screen.getByText(
      '1931 kam die Tradition aus den Vereinigten Staaten nach Schweden und wurde zunächst auch im Juni gefeiert.'
    );
    expect(tradition).toBeInTheDocument();

    const picture = screen.getByRole('img');
    expect(picture).toBeInTheDocument();

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(1);
    userEvent.click(buttons[0]);
  });
});
