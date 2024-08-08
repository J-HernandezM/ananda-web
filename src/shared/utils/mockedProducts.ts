import antimicoticoImg from '@/assets/images/home/temp-product-antimicotico.webp';
import romeroImg from '@/assets/images/home/temp-product-romero.webp';
import aceiteImg from '@/assets/images/home/temp-product-aceite.webp';

export interface FeaturedProductCardProps {
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

export const mockedProducts: ProductTemporalInterface[] = [
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
