import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ScrollUp from './ScrollUp';

describe('ScrollUp', () => {
  it('renders a backToTop button', () => {
    global.scrollTo = jest.fn();
    render(
      <MemoryRouter>
        <ScrollUp backToTop={false} />
      </MemoryRouter>
    );
  });
});
