import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ImageCard from './ImageCard.js';

describe('ImageCard', () => {
  it('renders a tradition', () => {
    render(
      <MemoryRouter>
        <ImageCard tradition="1931 kam die Tradition aus den Vereinigten Staaten nach Schweden und wurde zunächst auch im Juni gefeiert." />
      </MemoryRouter>
    );
    const tradition = screen.getByText(
      '1931 kam die Tradition aus den Vereinigten Staaten nach Schweden und wurde zunächst auch im Juni gefeiert.'
    );

    expect(tradition).toBeInTheDocument();
  });
});
