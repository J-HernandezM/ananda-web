import bgPhoto from '@/assets/images/tienda/header-tienda.webp';
import BackgroundTopPhoto from '@/components/BackgroundTopPhoto';
import MobileCategoriesFilter from '@/components/CategoriesFilter/MobileCategoriesFilter';
import CategoriesFilter from '@/components/CategoriesFilter';
import ProductCard from '@/components/ProductCard';
import './storePage.scss';
import FeaturedList from '@/components/FeaturedList';
import { Product } from '@/types/types';
import { sanitizeApiResponse } from '@/shared/utils/sanitizeApiResponse';
import { mockedStrapiResponse } from '@/shared/utils/mockedStrapiResponse';

export default function StorePage() {
  return (
    <main>
      <BackgroundTopPhoto src={bgPhoto} />
      <section className="store">
        <aside className="store--aside">
          <MobileCategoriesFilter></MobileCategoriesFilter>
          <CategoriesFilter></CategoriesFilter>
          <FeaturedList></FeaturedList>
        </aside>
        <article className="store--products">
          <div className="store--order">
            <p>Ordenar por:</p>
            <select name="order" id="store--order-select">
              <option value="selled">Más vendido</option>
              <option value="recent">Más reciente</option>
              <option value="price-higher">Precio más alto</option>
              <option value="price-lower">Precio más bajo</option>
            </select>
          </div>
          <div className="store--grid">
            <ProductList></ProductList>
          </div>
        </article>
      </section>
    </main>
  );
}

function ProductList() {
  const mockedProducts: Product[] = sanitizeApiResponse(mockedStrapiResponse);

  return (
    <>
      {mockedProducts.map(product => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </>
  );
}
