import './mobileCategoriesFilter.scss';

export const categories = ['Jabones', 'Mascarillas', 'Balsamos', 'Ungüentos', 'Aceites', 'Cremas'];

export default function CategoriesFilter() {
  return (
    <div className="filter--desktop">
      <h3 className="filter--title">CATEGORIAS</h3>
      <div className="filter--categories">
        <ul className="filter--list">
          {categories.map((text, index) => (
            <li key={index} className="filter--item">
              <label htmlFor={text}>
                {text}
                <input id={text} type="checkbox" />
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
