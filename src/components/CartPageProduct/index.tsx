// @packages
import { Order, useCartStore } from '@/stores/cartStore';
import { useMemo } from 'react';
import formatPrice from '@/shared/utils/formatPrice';

// @styles
import './cartPageProducts.scss';

// @components
import Image from 'next/image';
import ClearIcon from '@mui/icons-material/Clear';
import QuantitySelector from '@/shared/components/QuantitySelector';
import { IconButton } from '@mui/material';

export default function CartPageProduct({ order }: { order: Order }) {
  const { product, promo, quantity, id } = order;
  const price = useMemo(
    () => product.priceDetails.find(p => p.quantity === promo)!.value,
    [promo, product.priceDetails]
  );

  const removeFromCart = useCartStore(state => state.removeFromCart);
  const updateQuantity = useCartStore(state => state.updateQuantity);
  const quantityHandler = {
    add: () => updateQuantity(id, quantity + 1),
    remove: () => updateQuantity(id, quantity - 1),
  };

  return (
    <div className="cartPage--product">
      <figure className="cartPage--product-imageBox">
        <Image
          src={product.featuredImage.url}
          fill
          sizes="(max-width: 600px) 8vw, 5vw"
          className="cartPage--product-image"
          alt={`Producto en carrito: ${product.featuredImage.alternativeText}`}
        />
      </figure>
      <div className="cartPage--product-data">
        <p className="cartPage--product-title">{product.title}</p>
        <p className="cartPage--product-promo">
          {promo} x {formatPrice(price, false)}
        </p>
      </div>
      <p className="cartPage--product-price">$ {formatPrice(price, false)}</p>
      <div className="cartPage--quantity-controls">
        <QuantitySelector handlers={quantityHandler} quantity={order.quantity} />
        <IconButton onClick={() => removeFromCart(id)}>
          <ClearIcon fontSize="small" className="cartPage--product-small icons--hover" />
        </IconButton>
      </div>
      <p className="cartPage--product-total">$ {formatPrice(quantity * price, false)}</p>
    </div>
  );
}
