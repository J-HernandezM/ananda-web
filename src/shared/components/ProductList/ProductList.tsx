'use client';

import ProductCard from '@/components/ProductCard';
import withSnackbar, { SetSnackbar } from '@/shared/components/hocs/withSnackBar';
import { Product } from '@/types/types';

interface ProductListProps {
  productsArray: Product[];
}

function ProductList({
  productsArray,
  setSnackbar,
}: ProductListProps & { setSnackbar: SetSnackbar }) {
  return (
    <>
      {productsArray.map(product => (
        <ProductCard key={product.id} product={product} setSnackbar={setSnackbar}></ProductCard>
      ))}
    </>
  );
}

const ProductListWithSnackbar = withSnackbar(ProductList);

export default ProductListWithSnackbar;
