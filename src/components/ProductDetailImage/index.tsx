'use client';

// @packages
import strapiImageLoader from '@/shared/utils/strapiImageLoader';

// @styles
import './productDetailImage.scss';

// @components
import Image from 'next/image';

export default function ProductDetailImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      sizes="(max-width: 600px) 80vw, 40vw"
      width={500}
      height={500}
      loader={strapiImageLoader}
      className="detail--image"
      alt={`Producto en carrito: ${alt}`}
    />
  );
}
