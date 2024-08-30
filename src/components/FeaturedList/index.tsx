// @packages
import { sanitizeApiResponse } from '@/shared/utils/sanitizeApiResponse';
import { mockedStrapiResponse } from '@/shared/utils/mockedStrapiResponse';
import { Product } from '@/types/types';

// @styles
import './productCardFeatured.scss';

// @components
import ProductCardFeatured from './ProductCardFeatured';

export default function FeaturedList() {
  const mockedProducts: Product[] = sanitizeApiResponse(mockedStrapiResponse);

  // This logic doesn't represent the way we want to get the featured products, its just mocked ftm
  return (
    <div className="store--featured">
      <h3 className="store--featured-title">PRODUCTOS DESTACADOS</h3>
      <div className="store--featured-products">
        {mockedProducts.slice(0, 2).map(product => (
          <ProductCardFeatured
            key={`featured-${product.id}`}
            product={product}
          ></ProductCardFeatured>
        ))}
      </div>
    </div>
  );
}
