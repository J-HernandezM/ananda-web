import { notFound } from 'next/navigation';

type ProductDetailPageProps = {
  params: {
    productId: string;
  };
};

// Condition to check if the product exist (it will be connected with Strapi later)
const productNotFound = (id: number) => (id > 10 ? true : false);

export default function ProductDetailPage({
  params: { productId },
}: ProductDetailPageProps) {
  if (productNotFound(+productId)) {
    notFound();
  }

  return <h1>Producto numero: {productId}</h1>;
}
