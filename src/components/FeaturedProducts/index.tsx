import SliderFeaturedProducts from './SliderFeaturedProducts';
import './featuredProducts.scss';

export default function FeaturedProducts() {
  return (
    <>
      <h2 className="carousel--title">Productos Estrella</h2>
      <div className="carousel">
        <div className="carousel--products-shading">
          <div className="carousel--shadow carousel--shadow-left"></div>
          <SliderFeaturedProducts />
          <div className="carousel--shadow carousel--shadow-right"></div>
        </div>
      </div>
    </>
  );
}
