// @packages
import { useRouter } from 'next/navigation';
import { Order, useCartStore } from '@/stores/cartStore';
import { Dispatch, SetStateAction, useMemo } from 'react';
import formatPrice from '@/shared/utils/formatPrice';

// @styles
import deleteIcon from '@/assets/svg/cart-delete.svg';
import './cartMenu.scss';

// @components
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
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

function CartProduct({ order }: CartProductProps) {
  const { product, quantity, promo, id } = order;
  const removeFromCart = useCartStore(state => state.removeFromCart);
  const updateQuantity = useCartStore(state => state.updateQuantity);
  const price = useMemo(
    () => product.priceDetails.find(p => p.quantity === promo)!.value,
    [promo, product.priceDetails]
  );

  return (
    <div className="cart--product">
      <figure className="cart--product-imageBox">
        <Image
          src={product.featuredImage.url}
          fill
          sizes="(max-width: 600px) 8vw, (max-width: 1024px) 5vw, 3vw"
          className="cart--product-image"
          alt={`Producto en carrito: ${product.featuredImage.alternativeText}`}
        />
      </figure>
      <div className="cart--product-info">
        <div>
          <p className="cart--product-title"> {product.title} </p>
          <p className="cart--product-promo">
            {promo} x ${formatPrice(price, false)}
          </p>
        </div>
        <p className="cart--product-quantityBox">
          <IconButton
            className="quantity--btns"
            disabled={quantity <= 1}
            onClick={() => updateQuantity(id, quantity - 1)}
          >
            <RemoveIcon className="icons--hover" fontSize="small"></RemoveIcon>
          </IconButton>
          <span className="cart--product-quantity">{quantity}</span>
          <IconButton
            className="quantity--btns"
            disabled={quantity > 20}
            onClick={() => updateQuantity(id, quantity + 1)}
          >
            <AddIcon className="icons--hover" fontSize="small"></AddIcon>
          </IconButton>
        </p>
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
