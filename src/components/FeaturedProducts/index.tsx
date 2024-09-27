// @packages
import { Product } from '@/types/types';
import { fetchProducts } from '@/lib/data/products';

// @styles
import './featuredProducts.scss';

// @components
import SliderFeaturedProductsWithSnackBar from './SliderFeaturedProducts';

export default async function FeaturedProducts() {
  const products: Product[] = await fetchProducts();

  return (
    <>
      <h2 className="carousel--title">Productos Estrella</h2>
      <div className="carousel">
        <div className="carousel--products-shading">
          <div className="carousel--shadow carousel--shadow-left"></div>
          <SliderFeaturedProductsWithSnackBar products={products} />
          <div className="carousel--shadow carousel--shadow-right"></div>
        </div>
      </div>
    </>
  );
}
