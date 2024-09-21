// @packages
import { fetchProducts, fetchSingleProduct } from '@/lib/data/products';
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
import ProductListWithSnackbar from '@/shared/components/ProductList/ProductList';
import ProductDetailImage from '@/components/ProductDetailImage';

type ProductDetailPageProps = {
  params: {
    productId: string;
  };
};

export default async function ProductDetailPage({ params: { productId } }: ProductDetailPageProps) {
  const product: Product = await fetchSingleProduct(+productId);
  // TODO: Here we should implement a strapi suggestedProducts entity
  const suggestedProducts: Product[] = await fetchProducts();
  const details: Detail[] = [
    {
      title: 'Ingredientes',
      description: product.ingredients,
    },
    {
      title: 'Modo de uso',
      description: product.usage,
    },
    {
      title: 'Tamaño',
      description: `${product.content.amount} ${product.content.unit}`,
    },
  ];

  if (!product) {
    notFound();
  }

  return (
    <main>
      <section className="detail">
        <div className="detail--imageBox">
          <ProductDetailImage
            src={product.featuredImage.url}
            alt={product.featuredImage.alternativeText}
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
      <section className="interest">
        <h2 className="detail--interest-title">También te puede interesar</h2>
        <div className="detail--interest-products">
          <ProductListWithSnackbar
            productsArray={suggestedProducts.slice(0, 3)}
          ></ProductListWithSnackbar>
        </div>
      </section>
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
