'use client';

import SlideArrow from '@/shared/components/SlideArrow';
import ProductCard from '../ProductCard';
import Slider, { Settings } from 'react-slick';
import { mockedProducts } from '@/shared/utils/mockedProducts';
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
        <ProductCard product={product} key={product.id} />
      ))}
    </Slider>
  );
}
