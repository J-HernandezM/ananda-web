// @styles
import './cartPageEmpty.scss';

// @components
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function CartPageEmpty() {
  return (
    <div className="cartPage--empty">
      <div className="cartPage--products-empty">
        <ShoppingCartIcon fontSize="large"></ShoppingCartIcon>
        <h3>TU CARRITO ESTA VACÍO</h3>
      </div>
    </div>
  );
}
