import bgPhoto from '@/assets/images/tienda/header-tienda.webp';
import BackgroundTopPhoto from '@/components/BackgroundTopPhoto';
import MobileCategoriesFilter from '@/components/CategoriesFilter/MobileCategoriesFilter';
import CategoriesFilter from '@/components/CategoriesFilter';
import ProductCard from '@/components/ProductCard';
import { mockedProducts } from '@/shared/utils/mockedProducts';
import './storePage.scss';

export default function StorePage() {
  return (
    <main>
      <BackgroundTopPhoto src={bgPhoto} />
      <section className="store">
        <aside className="store--aside">
          <MobileCategoriesFilter></MobileCategoriesFilter>
          <CategoriesFilter></CategoriesFilter>
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
  return (
    <>
      {mockedProducts.map(product => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </>
  );
}
