import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FeaturedProducts from './index';

jest.mock('next/navigation', () => ({ useRouter: jest.fn() }));
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ test: 100 }),
  })
) as jest.Mock;
jest.mock('../../lib/data/products', () => ({
  fetchProducts: jest.fn(() =>
    Promise.resolve([
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
    ])
  ),
}));

describe('<FeaturedProducts />', () => {
  test('It should render correctly', async () => {
    render(await FeaturedProducts());
    const h3 = screen.getByText(/Productos/i);
    expect(h3).toBeInTheDocument();
  });
});
