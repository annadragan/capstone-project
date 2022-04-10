import { render } from '@testing-library/react';
import ScrollToTop from '../components/ScrollToTop';

describe('ScrollToTop', () => {
  it('renders a backToTop', () => {
    render(<ScrollToTop />);
  });
});
