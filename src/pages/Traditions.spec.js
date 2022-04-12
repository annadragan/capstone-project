import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Traditions from './Traditions';
import userEvent from '@testing-library/user-event';

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

  const title = screen.getByText('Traditionen');
  const links = screen.getAllByRole('link');

  expect(title).toBeInTheDocument();
  expect(links.length).toBeGreaterThan(0);

  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(1);
  userEvent.click(buttons[0]);
});
