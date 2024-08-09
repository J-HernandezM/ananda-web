import { ProductCardProps } from '@/shared/utils/mockedProducts';
import StyledButton from '@/shared/components/StyledButton';
import formatPrice from '@/shared/utils/formatPrice';
import Image from 'next/image';
import cartIcon from '@/assets/svg/icons-cart.svg';
import './productCard.scss';

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card">
      <figure className="card--image-box">
        <Image
          src={product.img}
          alt={product.title}
          sizes="(max-width: 600px) 40vw, (max-width: 1024px) 27vw, 15vw"
          fill
          className="card--image"
        ></Image>
      </figure>
      <div className="card--info">
        <h3 className="card--title">{product.title}</h3>
        <p className="card--price">{formatPrice(product.price)}</p>
      </div>
      <div className="card--controls">
        <div className="card--prices-box">
          <PriceLabel quantity={1} price={16000}></PriceLabel>
          <PriceLabel quantity={3} price={35000}></PriceLabel>
          <PriceLabel quantity={12} price={108000}></PriceLabel>
        </div>
        <StyledButton
          onclick={() => {
            console.log('Added to cart');
          }}
          text="AÑADIR AL CARRITO"
          icon={cartIcon}
          customClass="card--btn-cart"
        ></StyledButton>
      </div>
    </div>
  );
}

interface PriceLabelProps {
  quantity: number;
  price: number;
}

function PriceLabel({ quantity, price }: PriceLabelProps) {
  const finalPrice = formatPrice(price);

  return (
    <label>
      <input name="quantity" value={quantity} type="radio" />
      <span>X{quantity}</span>
      <span>{finalPrice.substring(0, finalPrice.length - 3)}</span>
    </label>
  );
}
