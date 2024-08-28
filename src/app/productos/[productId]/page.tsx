// @packages
import { mockedStrapiResponse } from '@/shared/utils/mockedStrapiResponse';
import { sanitizeApiResponse } from '@/shared/utils/sanitizeApiResponse';
import { Product } from '@/types/types';
import { notFound } from 'next/navigation';

// @styles
import crueltyFreeStamp from '@/assets/svg/stamp-cruelty-free.svg';
import organicStamp from '@/assets/svg/stamp-organic.svg';
import './productDetail.scss';

// @components
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Image from 'next/image';
import formatPrice from '@/shared/utils/formatPrice';
import StyledButton from '@/shared/components/StyledButton';

type ProductDetailPageProps = {
  params: {
    productId: string;
  };
};

const details: Detail[] = [
  {
    title: 'Ingredientes',
    description:
      'Mocked ingredients descriptions to showcase how would i look to have a text here with more than one row',
  },
  {
    title: 'Modo de uso',
    description:
      'Mocked usage descriptions to showcase how would i look to have a text here with more than one row',
  },
  {
    title: 'Tamaño',
    description:
      'Mocked size descriptions to showcase how would i look to have a text here with more than one row',
  },
];

export default function ProductDetailPage({ params: { productId } }: ProductDetailPageProps) {
  // TODO: Here we should fetch to strapi instead of using this mock
  const product: Product = sanitizeApiResponse(mockedStrapiResponse).find(
    (p: Product) => p.id === +productId
  );
  // TODO: Abstract all the price logic to a client component
  const quantity = 3;
  // const id = 0;
  // const updateQuantity = (id: number, quantity: number) => {
  //   console.log(id, quantity);
  // };

  if (!product) {
    notFound();
  }

  return (
    <main>
      <section className="detail">
        <div className="detail--imageBox">
          <Image
            src={product.featuredImage.url}
            sizes="(max-width: 600px) 80vw, 40vw"
            width={500}
            height={500}
            className="detail--image"
            alt={`Producto en carrito: ${product.featuredImage.alternativeText}`}
          />
          <div className="detail--stampsBox">
            <Image src={organicStamp} alt="Sello orgánico" className="detail--stamp" />
            <Image
              src={crueltyFreeStamp}
              alt="Sello libre de crueldad animal"
              className="detail--stamp"
            />
          </div>
        </div>
        <div className="detail--info">
          <div className="detail--heading-info">
            <h3 className="detail--title">{product.title}</h3>
            <p className="detail--description">{product.description}</p>
          </div>
          <Details details={details} />
          {/* TODO: Add here the labels to select across the different 3 prices */}
          <div className="detail--price">
            <span className="price--quantity">{product.priceDetails[0].quantity}</span> x
            <span className="price--value"> {formatPrice(product.priceDetails[0].value)}</span>
          </div>
          <div className="detail--controls">
            <div className="control--quantityBox">
              <IconButton
                className="control--quantity-btns"
                disabled={quantity <= 1}
                // onClick={() => updateQuantity(id, quantity - 1)}
              >
                <RemoveIcon className="icons--hover" fontSize="small"></RemoveIcon>
              </IconButton>
              <span className="control--quantity">{quantity}</span>
              <IconButton
                className="control--quantity-btns"
                disabled={quantity > 20}
                // onClick={() => updateQuantity(id, quantity + 1)}
              >
                <AddIcon className="icons--hover" fontSize="small"></AddIcon>
              </IconButton>
            </div>
            <StyledButton
              onclick={addToCart}
              customClass="control--button"
              text="Añadir al carrito"
            ></StyledButton>
          </div>
        </div>
      </section>
      <section className="interest"></section>
    </main>
  );
}

const addToCart = async () => {
  'use server';
  // TODO: Add to cart logic here when client component is ready
};

interface Detail {
  title: string;
  description: string;
}

function Details({ details }: { details: Detail[] }) {
  return (
    <div className="detail--dropdowns">
      {details.map(detail => (
        <details key={`details--${detail.title}`} name="product--detail">
          <summary>
            {detail.title}
            <RemoveIcon className="dropdown--icon-remove " />
            <AddIcon className="dropdown--icon-add " />
          </summary>
          <p className="dropdown--description">{detail.description}</p>
        </details>
      ))}
    </div>
  );
}
