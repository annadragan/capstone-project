import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

describe('ScrollToTop', () => {
  it('renders a backToTop button', () => {
    global.scrollTo = jest.fn();
    render(
      <MemoryRouter>
        <ScrollToTop backToTop={false} />
      </MemoryRouter>
    );
  });
});
