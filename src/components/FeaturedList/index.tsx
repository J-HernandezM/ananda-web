// @packages
import { Product } from '@/types/types';
import { getMockProducts } from '@/shared/utils/mockProducts';

// @styles
import './productCardFeatured.scss';

// @components
import ProductCardFeatured from './ProductCardFeatured';

export default function FeaturedList() {
  const products: Product[] = getMockProducts();

  // This logic doesn't represent the way we want to get the featured products, its just mocked ftm
  return (
    <div className="store--featured">
      <h3 className="store--featured-title">PRODUCTOS DESTACADOS</h3>
      <div className="store--featured-products">
        {products.slice(0, 2).map(product => (
          <ProductCardFeatured
            key={`featured-${product.id}`}
            product={product}
          ></ProductCardFeatured>
        ))}
      </div>
    </div>
  );
}
