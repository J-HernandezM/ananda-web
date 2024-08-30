import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SliderFeaturedProducts from './SliderFeaturedProducts';

jest.mock('next/navigation', () => ({ useRouter: jest.fn() }));

describe('<SliderFeaturedProducts>', () => {
  test('It should render correctly', () => {
    render(<SliderFeaturedProducts />);
    const productTitle = screen.getAllByText(/Aceite tratamiento anti-estrías/i)[0];
    expect(productTitle).toBeInTheDocument();
  });
});
