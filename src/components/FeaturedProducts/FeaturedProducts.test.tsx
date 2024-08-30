import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FeaturedProducts from './index';

jest.mock('next/navigation', () => ({ useRouter: jest.fn() }));

describe('<FeaturedProducts />', () => {
  test('It should render correctly', () => {
    render(<FeaturedProducts />);
    const h3 = screen.getByText(/Productos/i);
    expect(h3).toBeInTheDocument();
  });
});
