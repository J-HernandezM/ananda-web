'use client';

import SlideArrow from '@/shared/components/SlideArrow';
import ProductCard from '../ProductCard';
import Slider, { Settings } from 'react-slick';
import './sliderFeaturedProducts.scss';
import { Product } from '@/types/types';
import { sanitizeApiResponse } from '@/shared/utils/sanitizeApiResponse';
import { mockedStrapiResponse } from '@/shared/utils/mockedStrapiResponse';

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
  const mockedProducts: Product[] = sanitizeApiResponse(mockedStrapiResponse);

  return (
    <Slider data-testid="slider" {...settings}>
      {mockedProducts.map(product => (
        <ProductCard product={product} key={product.id} />
      ))}
    </Slider>
  );
}
