// @packages
import { useRouter } from 'next/navigation';
import { mockedProducts, ProductTemporalInterface } from '@/shared/utils/mockedProducts';
import { useCartStore } from '@/stores/cartStore';
import formatPrice from '@/shared/utils/formatPrice';

// @styles
import deleteIcon from '@/assets/svg/cart-delete.svg';
import './cartMenu.scss';

// @components
import Image from 'next/image';
import StyledButton from '@/shared/components/StyledButton';

interface CartMenuProps {
  cartMenu: boolean;
}

export default function CartMenu({ cartMenu }: CartMenuProps) {
  const count = useCartStore(state => state.count);
  const router = useRouter();

  return (
    <div className={`cart ${cartMenu ? 'cart--entry' : 'cart--exit'}`}>
      <div className="cart--products">
        {mockedProducts.slice(0, 4).map(p => (
          <CartProduct key={`cart-${p.id}`} product={p} promo={12} quantity={1} />
        ))}
      </div>
      <div className="cart--info">
        <div className="cart--total">
          <p>SUB TOTAL:</p>
          <p>$24.000</p>
        </div>
        <StyledButton
          customClass="cart--button-checkout"
          text="FINALIZAR LA COMPRA"
          onclick={() => router.push('/checkout')}
        />
        <StyledButton
          customClass="cart--button-cart"
          text="VER EL CARRITO"
          onclick={() => router.push('/cart')}
        />
        {count}
      </div>
    </div>
  );
}

interface CartProductProps {
  product: ProductTemporalInterface;
  promo: 1 | 3 | 12;
  quantity: number;
}

// TODO: Price should be the price according to the promo selected (fix this when connected to strapi)
function CartProduct({ product, promo, quantity }: CartProductProps) {
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
      <Image className="cart--product-delete icons" src={deleteIcon} alt="Borrar del carrito" />
    </div>
  );
}
