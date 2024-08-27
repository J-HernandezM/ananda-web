'use client';

// @packages
import { Product } from '@/types/types';
import { sanitizeApiResponse } from '@/shared/utils/sanitizeApiResponse';
import { mockedStrapiResponse } from '@/shared/utils/mockedStrapiResponse';
import withSnackbar, { SetSnackbar } from '@/shared/components/hocs/withSnackBar';
import Slider, { Settings } from 'react-slick';

// @styles
import './sliderFeaturedProducts.scss';

// @components
import SlideArrow from '@/shared/components/SlideArrow';
import ProductCard from '../ProductCard';

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

function SliderFeaturedProducts({ setSnackbar }: { setSnackbar: SetSnackbar }) {
  const products: Product[] = sanitizeApiResponse(mockedStrapiResponse);

  return (
    <Slider data-testid="slider" {...settings}>
      {products.map(product => (
        <ProductCard setSnackbar={setSnackbar} product={product} key={product.id} />
      ))}
    </Slider>
  );
}

const SliderFeaturedProductsWithSnackBar = withSnackbar(SliderFeaturedProducts);

export default SliderFeaturedProductsWithSnackBar;
