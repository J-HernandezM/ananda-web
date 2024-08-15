'use client';

// @packages
import React from 'react';
import formatPrice from '@/shared/utils/formatPrice';
import { ProductCardProps } from '@/shared/utils/mockedProducts';
import { buttonAnimation } from '@/shared/components/StyledButton';
import { useCartStore } from '@/stores/cartStore';

// @styles
import cartIcon from '@/assets/svg/icons-cart.svg';
import './productCard.scss';

// @components
import Image from 'next/image';

export default function ProductCard({ product }: ProductCardProps) {
  const incrementCount = useCartStore(state => state.incrementCount);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // This function look up for which label and send the promo information
    const labels = (e.target as HTMLElement).previousElementSibling?.children;
    if (!labels) return;

    const selectedLabel = Array.from(labels).filter(
      label => (label.childNodes[0] as HTMLInputElement).checked
    )[0];

    let desiredPromo: number;
    if (!selectedLabel) {
      desiredPromo = 1;
    } else {
      desiredPromo = Number((selectedLabel.children[0] as HTMLInputElement).value);
    }

    console.log(desiredPromo);
    incrementCount();

    // send to cart global state (zustand)
  };

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
        <button
          onClick={handleClick}
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
