import { render, screen } from '@testing-library/react';
import SliderFeaturedProducts from './SliderFeaturedProducts';
import { Product } from '@/types/types';
import '@testing-library/jest-dom';

jest.mock('next/navigation', () => ({ useRouter: jest.fn() }));

const mockProducts: Product[] = [
  {
    id: 1,
    title: 'Dummy Product Title',
    description: 'Dummy product description.',
    images: [
      {
        alternativeText: 'Dummy Image 1',
        name: 'dummy-image1.jpg',
        url: '/images/dummy-image1.jpg',
      },
    ],
    featuredImage: {
      alternativeText: 'Dummy Featured Image',
      name: 'dummy-featured.jpg',
      url: '/images/dummy-featured.jpg',
    },
    priceDetails: [
      {
        quantity: 1,
        value: 19.99,
      },
    ],
    ingredients: 'Dummy ingredients',
    usage: 'Dummy usage instructions.',
    totalWeight: 100,
    content: {
      amount: 100,
      unit: 'ml',
    },
  },
];

describe('<SliderFeaturedProducts>', () => {
  test('It should render correctly', () => {
    render(<SliderFeaturedProducts products={mockProducts} />);
    const productTitle = screen.getAllByText(/Dummy Product Title/i)[0];
    expect(productTitle).toBeInTheDocument();
  });
});
