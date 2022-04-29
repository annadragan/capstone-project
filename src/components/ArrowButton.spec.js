import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ArrowButton from './ArrowButton';

describe('ArrowButton', () => {
  it('renders a backToTop button', () => {
    global.scrollTo = jest.fn();
    render(
      <MemoryRouter>
        <ArrowButton backToTop={false} />
      </MemoryRouter>
    );
  });
});
