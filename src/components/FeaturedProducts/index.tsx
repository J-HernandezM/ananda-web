'use client';

import arrowIcon from '@/assets/svg/icons-arrow.svg';
import Image from 'next/image';
import antimicoticoImg from '@/assets/images/home/temp-product-antimicotico.webp';
import romeroImg from '@/assets/images/home/temp-product-romero.webp';
import aceiteImg from '@/assets/images/home/temp-product-aceite.webp';
import './featuredProducts.scss';
import { useRef } from 'react';

interface ProductTemporalInterface {
  title: string;
  id: string;
  description: string;
  price: number;
  img: string;
}

interface FeaturedProductCardProps {
  product: ProductTemporalInterface;
}

const mockedProducts: ProductTemporalInterface[] = [
  {
    title: 'Jabón Antimicótico',
    id: '1',
    description: 'Et ut ut consectetur reprehenderit',
    price: 12000,
    img: antimicoticoImg.src,
  },
  {
    title: 'Jabón de Romero',
    id: '2',
    description: 'Et ut ut consectetur reprehenderit',
    price: 12000,
    img: romeroImg.src,
  },
  {
    title: 'Aceite Anti-estrías',
    id: '3',
    description: 'Et ut ut consectetur reprehenderit',
    price: 12000,
    img: aceiteImg.src,
  },
  {
    title: 'Jabón Antimicótico',
    id: '4',
    description: 'Et ut ut consectetur reprehenderit',
    price: 12000,
    img: antimicoticoImg.src,
  },
  {
    title: 'Jabón de Romero',
    id: '5',
    description: 'Et ut ut consectetur reprehenderit',
    price: 12000,
    img: romeroImg.src,
  },
  {
    title: 'Aceite Anti-estrías',
    id: '6',
    description: 'Et ut ut consectetur reprehenderit',
    price: 12000,
    img: aceiteImg.src,
  },
  {
    title: 'Aceite Anti-estrías',
    id: '7',
    description: 'Et ut ut consectetur reprehenderit',
    price: 12000,
    img: aceiteImg.src,
  },
];

export default function FeaturedProducts() {
  const carouselRef = useRef<HTMLDivElement>(null);
  let currentIndex = 1;
  let isScrolling = false;

  const prevScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel || isScrolling) return;

    isScrolling = true;

    // If its not the first item, then just scroll one item
    if (currentIndex > 1) {
      console.log('backwards');
      carousel.scrollBy(-1, 0);
      currentIndex--;
    } else {
      // If its the first item, scroll to the end
      carousel.style.scrollBehavior = 'auto';
      carousel.scrollTo(1000, 0);
      currentIndex = carousel.childNodes.length;
      carousel.style.scrollBehavior = 'smooth';
    }

    isScrolling = false;
  };

  const nextScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    isScrolling = true;

    // If we are not at the last item, just scroll one item
    if (currentIndex < carousel.childNodes.length) {
      console.log('forward');

      carousel.scrollBy(1, 0);
      currentIndex++;
    } else {
      // If we are at the last item, scroll to the begining
      carousel.style.scrollBehavior = 'auto';
      carousel.scrollTo(-1000, 0);
      currentIndex = 1;
      carousel.style.scrollBehavior = 'smooth';
    }

    isScrolling = false;
  };

  return (
    <>
      <h2 className="carousel--title">Productos Estrella</h2>
      <div className="carousel">
        <Image
          onClick={prevScroll}
          src={arrowIcon}
          alt="flecha anterior producto"
          className="carousel--arrow-left carousel--arrow"
        />
        <div className="carousel--products-shading">
          <div className="carousel--shadow carousel--shadow-left"></div>
          <div
            ref={carouselRef}
            className="carousel--products"
          >
            {mockedProducts.map(product => (
              <FeaturedProductCard
                product={product}
                key={product.id}
              />
            ))}
          </div>
          <div className="carousel--shadow carousel--shadow-right"></div>
        </div>
        <Image
          onClick={nextScroll}
          src={arrowIcon}
          alt="flecha siguiente producto"
          className="carousel--arrow-right carousel--arrow"
        />
      </div>
    </>
  );
}

function FeaturedProductCard({ product }: FeaturedProductCardProps) {
  return (
    <>
      <div className="featuredProduct">
        <figure className="featuredProduct--image-box">
          <Image
            src={product.img}
            alt={product.title}
            // TODO: adjust sizes prop
            // sizes="100vw"
            fill
            className="featuredProduct--image"
          ></Image>
        </figure>
        <div className="featuredProduct--info">
          <h3 className="featuredProduct--title">{product.title}</h3>
          <p className="featuredProduct--price">{formatPrice(product.price)}</p>
        </div>
      </div>
    </>
  );
}

// TODO: move to shared folder and create tests
function formatPrice(price: number, locale = 'es-CO') {
  const priceFormatted = new Intl.NumberFormat(locale).format(price);
  return `${priceFormatted} COP`;
}
