import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Traditions from './Traditions';

describe('Traditions', () => {
  it('has a title and one link and it renders a two button', () => {
    const onScrollUp = jest.fn();

    const data = [
      {
        _id: '_id',
        tradition:
          '1931 kam die Tradition aus den Vereinigten Staaten nach Schweden und wurde zunächst auch im Juni gefeiert.',
      },
    ];
    render(
      <MemoryRouter>
        <Traditions stories={data} onScrollUp={onScrollUp} />
      </MemoryRouter>
    );

    const buttonPlus = screen.getByText(/gehe/i);
    expect(buttonPlus).toBeInTheDocument();

    const title = screen.getByText('Besonderheiten');
    const link = screen.getAllByRole('link');

    expect(title).toBeInTheDocument();
    expect(link.length).toBeGreaterThan(0);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
    userEvent.click(buttons[0]);
  });
});
