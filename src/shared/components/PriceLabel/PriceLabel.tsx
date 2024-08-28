// @packages
import formatPrice from '@/shared/utils/formatPrice';

// @styles
import './priceLabel.scss';

interface PriceLabelProps {
  quantity: number;
  price: number;
}

export default function PriceLabel({ quantity, price }: PriceLabelProps) {
  return (
    <label className="customLabel">
      <input name="quantity" value={quantity} type="radio" />
      <span>X{quantity}</span>
      <span>{formatPrice(price, false)}</span>
    </label>
  );
}
