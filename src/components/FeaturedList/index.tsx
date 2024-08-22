import Image from 'next/image';
import './productCardFeatured.scss';
import { sanitizeApiResponse } from '@/shared/utils/sanitizeApiResponse';
import { mockedStrapiResponse } from '@/shared/utils/mockedStrapiResponse';
import { Product } from '@/types/types';

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

function ProductCardFeatured({ product }: { product: Product }) {
  return (
    <div className="card--featured">
      <figure className="card--featuredImage-box">
        <Image
          src={product.featuredImage.url}
          alt={product.featuredImage.alternativeText}
          sizes="(max-width: 600px) 40vw, (max-width: 1024px) 27vw, 15vw"
          fill
          className="card--featured-image"
        ></Image>
      </figure>
    </div>
  );
}
