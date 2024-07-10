import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomeLastBanner from './index';

describe('<HomeLastBanner>', () => {
  test('It should render correctly', () => {
    render(<HomeLastBanner />);
    const img = screen.getByRole('img', { name: /una piel saludable/i });
    expect(img).toBeInTheDocument();
  });
});
