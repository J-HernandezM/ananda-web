'use client';

// @packages
import formatPrice from '@/shared/utils/formatPrice';
import { buttonAnimation } from '@/shared/components/StyledButton';
import { Order, Promo, useCartStore } from '@/stores/cartStore';
import { Product } from '@/types/types';
import { SetSnackbar } from '@/shared/components/hocs/withSnackBar';

// @styles
import cartIcon from '@/assets/svg/icons-cart.svg';
import './productCard.scss';

// @components
import Image from 'next/image';
import PriceLabel from '@/shared/components/PriceLabel/PriceLabel';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  product: Product;
  setSnackbar: SetSnackbar;
}

export default function ProductCard({ product, setSnackbar }: ProductCardProps) {
  const router = useRouter();
  const orders = useCartStore(state => state.orders);
  const addToCart = useCartStore(state => state.addToCart);
  const updateQuantity = useCartStore(state => state.updateQuantity);

  const sendToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Find which label (promo) was selected
    const labels = (e.currentTarget as HTMLElement).previousElementSibling?.children;
    if (!labels) return;

    const selectedLabel = Array.from(labels).filter(
      label => (label.childNodes[0] as HTMLInputElement).checked
    )[0];

    let promo: Promo;
    if (!selectedLabel) {
      promo = 1;
    } else {
      promo = Number((selectedLabel.children[0] as HTMLInputElement).value) as Promo;
    }

    /* Build order id:
    (The same product can be on the cart with a different promo,
    if the promo is the same then  add 1 to the quantity) */
    const id = `${product.id}${promo}`;

    // Send or update the order depending on if it already exist on the cart
    const alreadyExistingOrder = orders.find(order => order.id === id);
    let quantity = 0;

    if (alreadyExistingOrder) {
      quantity = alreadyExistingOrder.quantity + 1;
      updateQuantity(alreadyExistingOrder.id, quantity);
      setSnackbar(true);
    } else {
      quantity++;

      const newOrder: Order = {
        id,
        product,
        promo,
        quantity,
      };

      addToCart(newOrder);
      setSnackbar(true);
    }
  };

  return (
    <div className="card">
      <figure className="card--image-box">
        <Image
          onClick={() => router.push(`/productos/${product.id}`)}
          src={product.featuredImage.url}
          alt={product.featuredImage.alternativeText}
          sizes="(max-width: 600px) 40vw, (max-width: 1024px) 27vw, 15vw"
          fill
          className="card--image"
        ></Image>
      </figure>
      <div className="card--info">
        <h3 onClick={() => router.push(`/productos/${product.id}`)} className="card--title">
          {product.title}
        </h3>
        <p className="card--price">{formatPrice(product.priceDetails[0].value)}</p>
      </div>
      <div className="card--controls">
        <div className="card--prices-box">
          {product.priceDetails.map(p => (
            <PriceLabel
              key={`price-x${p.quantity}`}
              quantity={p.quantity}
              price={p.value}
            ></PriceLabel>
          ))}
        </div>
        <button
          onClick={sendToCart}
          className="card--btn-cart styled--button has-icon"
          onMouseMove={buttonAnimation}
        >
          <p>AGREGAR</p>
          <p>AÑADIR AL CARRITO</p>
          <Image src={cartIcon} alt={`botón añadir al carrito`} className={`styled--button-icon`} />
        </button>
      </div>
    </div>
  );
}
