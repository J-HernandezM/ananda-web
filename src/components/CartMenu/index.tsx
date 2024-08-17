// @packages
import { useRouter } from 'next/navigation';
import { Order, useCartStore } from '@/stores/cartStore';
import { Dispatch, SetStateAction } from 'react';
import formatPrice from '@/shared/utils/formatPrice';

// @styles
import deleteIcon from '@/assets/svg/cart-delete.svg';
import './cartMenu.scss';

// @components
import Image from 'next/image';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StyledButton from '@/shared/components/StyledButton';

interface CartMenuProps {
  cartMenu: boolean;
  toggleCart: Dispatch<SetStateAction<boolean>>;
}

export default function CartMenu({ cartMenu, toggleCart }: CartMenuProps) {
  const orders = useCartStore(state => state.orders);
  const total = useCartStore(state => state.total);
  const router = useRouter();

  const navigate = (to: string) => {
    toggleCart(false);
    router.push(to);
  };

  return (
    <div
      className={`cart ${cartMenu ? 'cart--entry' : 'cart--exit'} ${!orders.length ? 'cart--empty' : ''}`}
    >
      {!!orders.length ? (
        <>
          <div className="cart--products">
            {orders.map(order => (
              <CartProduct key={`cart-${order.id}`} order={order} />
            ))}
          </div>
          <div className="cart--info">
            <div className="cart--total">
              <p>SUB TOTAL:</p>
              <p>$ {formatPrice(total, false)}</p>
            </div>
            <StyledButton
              customClass="cart--button-checkout"
              text="FINALIZAR LA COMPRA"
              onclick={() => navigate('/checkout')}
            />
            <StyledButton
              customClass="cart--button-cart"
              text="VER EL CARRITO"
              onclick={() => navigate('/cart')}
            />
          </div>
        </>
      ) : (
        <>
          <ShoppingCartIcon fontSize="large"></ShoppingCartIcon>
          <h3 className="cart--total">TU CARRITO ESTA VACÍO</h3>
        </>
      )}
    </div>
  );
}

interface CartProductProps {
  order: Order;
}

// TODO: Price should be the price according to the promo selected (fix this when connected to strapi)
function CartProduct({ order }: CartProductProps) {
  const removeFromCart = useCartStore(state => state.removeFromCart);
  const { product, quantity, promo, id } = order;

  return (
    <div className="cart--product">
      <figure className="cart--product-imageBox">
        <Image
          src={product.img}
          fill
          sizes="(max-width: 600px) 10vw, (max-width: 1024px) 5vw, 10vw"
          className="cart--product-image"
          alt={`Producto en carrito: ${product.title}`}
        />
      </figure>
      <div className="cart--product-info">
        <div>
          <p className="cart--product-title"> {product.title} </p>
          <p className="cart--product-promo"> - {promo} x $108.000 </p>
        </div>
        <p className="cart--product-priceBox">
          <span className="cart--product-quantity"> {quantity} </span>x
          <span className="cart--product-price"> {formatPrice(product.price)} </span>
        </p>
      </div>
      <Image
        onClick={() => removeFromCart(id)}
        className="cart--product-delete icons"
        src={deleteIcon}
        alt="Borrar del carrito"
      />
    </div>
  );
}
