// @packages
import { useRouter } from 'next/navigation';
import { Order, useCartStore } from '@/stores/cartStore';
import { Dispatch, SetStateAction, useMemo } from 'react';
import formatPrice from '@/shared/utils/formatPrice';
import strapiImageLoader from '@/shared/utils/strapiImageLoader';

// @styles
import deleteIcon from '@/assets/svg/cart-delete.svg';
import './cartMenu.scss';

// @components
import Image from 'next/image';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StyledButton from '@/shared/components/StyledButton';
import QuantitySelector from '@/shared/components/QuantitySelector';

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
              onclick={() => navigate('/payment/checkout')}
            />
            <StyledButton
              customClass="cart--button-cart"
              text="VER EL CARRITO"
              onclick={() => navigate('/payment/cart')}
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

function CartProduct({ order }: CartProductProps) {
  const { product, quantity, promo, id } = order;
  const removeFromCart = useCartStore(state => state.removeFromCart);
  const updateQuantity = useCartStore(state => state.updateQuantity);
  const price = useMemo(
    () => product.priceDetails.find(p => p.quantity === promo)!.value,
    [promo, product.priceDetails]
  );
  const quantityHandlers = {
    add: () => updateQuantity(id, quantity + 1),
    remove: () => updateQuantity(id, quantity - 1),
  };

  return (
    <div className="cart--product">
      <figure className="cart--product-imageBox">
        <Image
          src={product.featuredImage.url}
          fill
          sizes="(max-width: 600px) 8vw, 5vw"
          className="cart--product-image"
          alt={`Producto en carrito: ${product.featuredImage.alternativeText}`}
          loader={strapiImageLoader}
        />
      </figure>
      <div className="cart--product-info">
        <div>
          <p className="cart--product-title"> {product.title} </p>
          <p className="cart--product-promo">
            {promo} x ${formatPrice(price, false)}
          </p>
        </div>
        <QuantitySelector
          quantity={quantity}
          handlers={quantityHandlers}
          customClass="cart--product-quantityBox"
        />
      </div>
      <div className="cart--product-end">
        <Image
          onClick={() => removeFromCart(id)}
          className="cart--product-delete icons icons--hover"
          src={deleteIcon}
          alt="Borrar del carrito"
        />
        <p className="cart--product-price"> $ {formatPrice(price * quantity, false)} </p>
      </div>
    </div>
  );
}
