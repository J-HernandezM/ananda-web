'use client';

// @packages
import { Order, Promo, useCartStore } from '@/stores/cartStore';
import { useState } from 'react';
import { Product } from '@/types/types';
import withSnackbar, { SetSnackbar } from '@/shared/components/hocs/withSnackBar';
import formatPrice from '@/shared/utils/formatPrice';

// @styles
import './productDetailControls.scss';

// @components
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import PriceLabel from '@/shared/components/PriceLabel/PriceLabel';
import StyledButton from '@/shared/components/StyledButton';

interface ProductDetailControlsProps {
  product: Product;
}

function ProductDetailControls({
  product,
  setSnackbar,
}: ProductDetailControlsProps & { setSnackbar: SetSnackbar }) {
  const [quantity, setQuantity] = useState(1);
  const [promo, setPromo] = useState<Promo>(1);

  const orders = useCartStore(state => state.orders);
  const addToCart = useCartStore(state => state.addToCart);
  const updateQuantity = useCartStore(state => state.updateQuantity);

  const promoPrice = formatPrice(
    product.priceDetails.find(p => (p.quantity as Promo) === promo)?.value
  );

  const sendToCart = () => {
    const id = `${product.id}${promo}`;
    const alreadyExistingOrder = orders.find(order => order.id === id);

    if (alreadyExistingOrder) {
      const q = alreadyExistingOrder.quantity + 1;
      updateQuantity(alreadyExistingOrder.id, q);
    } else {
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
    <>
      <div className="detail--labels">
        {product.priceDetails.map(p => (
          <div onClick={() => setPromo(p.quantity as Promo)} key={`price-x${p.quantity}`}>
            <PriceLabel quantity={p.quantity} price={p.value} />
          </div>
        ))}
      </div>
      <div className="detail--price">
        <span>{promo}</span> x<span> {promoPrice}</span>
      </div>
      <div className="detail--controls">
        <div className="control--quantityBox">
          <IconButton
            className="control--quantity-btns"
            disabled={quantity <= 1}
            onClick={() => setQuantity(quantity - 1)}
          >
            <RemoveIcon className="icons--hover" fontSize="small"></RemoveIcon>
          </IconButton>
          <span className="control--quantity">{quantity}</span>
          <IconButton
            className="control--quantity-btns"
            disabled={quantity >= 20}
            onClick={() => setQuantity(quantity + 1)}
          >
            <AddIcon className="icons--hover" fontSize="small"></AddIcon>
          </IconButton>
        </div>
        <StyledButton
          onclick={sendToCart}
          customClass="control--button"
          text="Añadir al carrito"
        ></StyledButton>
      </div>
    </>
  );
}

const ProductDetailControlsWithSnackBar = withSnackbar(ProductDetailControls);

export default ProductDetailControlsWithSnackBar;
