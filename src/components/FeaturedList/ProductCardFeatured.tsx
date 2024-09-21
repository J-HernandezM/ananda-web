'use client';

// @packages
import { useRouter } from 'next/navigation';
import { Product } from '@/types/types';
import strapiImageLoader from '@/shared/utils/strapiImageLoader';

// @styles
import './productCardFeatured.scss';

// @components
import Image from 'next/image';

export default function ProductCardFeatured({ product }: { product: Product }) {
  const router = useRouter();

  return (
    <div className="card--featured">
      <figure className="card--featuredImage-box">
        <Image
          onClick={() => router.push(`/productos/${product.id}`)}
          src={product.featuredImage.url}
          loader={strapiImageLoader}
          alt={product.featuredImage.alternativeText}
          sizes="(max-width: 600px) 40vw, (max-width: 1024px) 27vw, 15vw"
          fill
          className="card--featured-image"
        ></Image>
      </figure>
    </div>
  );
}
