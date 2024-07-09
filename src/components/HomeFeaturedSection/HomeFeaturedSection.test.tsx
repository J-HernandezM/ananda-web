import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomeFeaturedSection from './index';

describe('<HomeFeaturedSection>', () => {
  test('It should render correctly', () => {
    render(<HomeFeaturedSection />);
    const h2 = screen.getByRole('heading', { name: /cuidamos/i });
    expect(h2).toBeInTheDocument();
  });
});
