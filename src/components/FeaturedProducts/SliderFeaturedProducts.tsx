'use client';

import Image from 'next/image';
import SlideArrow from '@/shared/components/SlideArrow';
import formatPrice from '@/shared/utils/formatPrice';
import Slider, { Settings } from 'react-slick';
import { FeaturedProductCardProps, mockedProducts } from '@/shared/utils/mockedProducts';
import './sliderFeaturedProducts.scss';

const settings: Settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  adaptiveHeight: true,
  variableWidth: true,
  speed: 500,
  centerMode: true,
  centerPadding: '0px',
  nextArrow: <SlideArrow direction="next" />,
  prevArrow: <SlideArrow direction="prev" />,
};

export default function SliderFeaturedProducts() {
  return (
    <Slider data-testid="slider" {...settings}>
      {mockedProducts.map(product => (
        <FeaturedProductCard product={product} key={product.id} />
      ))}
    </Slider>
  );
}

function FeaturedProductCard({ product }: FeaturedProductCardProps) {
  return (
    <div className="featuredProduct">
      <figure className="featuredProduct--image-box">
        <Image
          src={product.img}
          alt={product.title}
          sizes="(max-width: 600px) 40vw, (max-width: 1024px) 27vw, 15vw"
          fill
          className="featuredProduct--image"
        ></Image>
      </figure>
      <div className="featuredProduct--info">
        <h3 className="featuredProduct--title">{product.title}</h3>
        <p className="featuredProduct--price">{formatPrice(product.price)}</p>
      </div>
    </div>
  );
}
