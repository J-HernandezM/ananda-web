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
import ProductDetailControlsWithSnackBar from '@/components/ProductDetailControls/ProductDetailControls';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Image from 'next/image';

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
          <ProductDetailControlsWithSnackBar product={product} />
        </div>
      </section>
      <section className="interest"></section>
    </main>
  );
}

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
