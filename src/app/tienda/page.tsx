import bgPhoto from '@/assets/images/tienda/header-tienda.webp';
import BackgroundTopPhoto from '@/components/BackgroundTopPhoto';
import './storePage.scss';
import MobileCategoriesFilter from '@/components/CategoriesFilter/MobileCategoriesFilter';
import CategoriesFilter from '@/components/CategoriesFilter';

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
          <div className="store--grid"></div>
        </article>
      </section>
    </main>
  );
}
