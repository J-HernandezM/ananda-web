// @packages
import { sanitizeApiResponse } from '@/shared/utils/sanitizeApiResponse';
import { mockedStrapiResponse } from '@/shared/utils/mockedStrapiResponse';
import { Product } from '@/types/types';

// @styles
import bgPhoto from '@/assets/images/tienda/header-tienda.webp';
import './storePage.scss';

// @components
import BackgroundTopPhoto from '@/components/BackgroundTopPhoto';
import MobileCategoriesFilter from '@/components/CategoriesFilter/MobileCategoriesFilter';
import CategoriesFilter from '@/components/CategoriesFilter';
import FeaturedList from '@/components/FeaturedList';
import ProductListWithSnackbar from '@/shared/components/ProductList/ProductList';

export default function StorePage() {
  const products: Product[] = sanitizeApiResponse(mockedStrapiResponse);

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
            <ProductListWithSnackbar productsArray={products}></ProductListWithSnackbar>
          </div>
        </article>
      </section>
    </main>
  );
}
