'use client';

import Image from 'next/image';
import antimicoticoImg from '@/assets/images/home/temp-product-antimicotico.webp';
import romeroImg from '@/assets/images/home/temp-product-romero.webp';
import aceiteImg from '@/assets/images/home/temp-product-aceite.webp';
import SlideArrow from '@/shared/components/SlideArrow';
import Slider, { Settings } from 'react-slick';
import './sliderFeaturedProducts.scss';

interface FeaturedProductCardProps {
  product: ProductTemporalInterface;
}

// TODO: define this interface better according to BD structure (created on the backend course)
interface ProductTemporalInterface {
  title: string;
  id: string;
  description: string;
  price: number;
  img: string;
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

const settings: Settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  adaptiveHeight: true,
  variableWidth: true,
  speed: 500,
  centerMode: true,
  centerPadding: '0px',
  nextArrow: <SlideArrow direction="next" />,
  prevArrow: <SlideArrow direction="prev" />,
};

export default function SliderFeaturedProducts() {
  return (
    <Slider {...settings}>
      {mockedProducts.map(product => (
        <FeaturedProductCard product={product} key={product.id} />
      ))}
    </Slider>
  );
}

function FeaturedProductCard({ product }: FeaturedProductCardProps) {
  return (
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
  );
}

// TODO: move to shared folder and create tests
function formatPrice(price: number, locale = 'es-CO') {
  const priceFormatted = new Intl.NumberFormat(locale).format(price);
  return `${priceFormatted} COP`;
}
