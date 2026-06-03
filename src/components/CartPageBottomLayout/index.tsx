'use client';

// @packages
import { useMemo } from 'react';
import { Product } from '@/types/types';
import { getMockProducts } from '@/shared/utils/mockProducts';
import { useRouter } from 'next/navigation';

// @styles
import './cartPageBottomLayout.scss';

// @components
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import StyledButton from '@/shared/components/StyledButton';
import ProductListWithSnackbar from '@/shared/components/ProductList/ProductList';

export default function CartPageBottomLayout() {
  const products: Product[] = useMemo(() => getMockProducts(), []);
  const suggested = products.slice(0, 3);
  const router = useRouter();

  return (
    <div className="cartPage--bottom">
      <StyledButton
        text="Seguir comprando"
        materialIcon={NavigateBeforeIcon}
        onclick={() => router.push('/tienda')}
        customClass="cartPage--button-back"
      ></StyledButton>
      <div className="cartPage--interest">
        <p>Puede que estés interesado en...</p>
        <div className="cartPage--interest-products">
          <ProductListWithSnackbar productsArray={suggested.slice(0, 3)} />
        </div>
      </div>
    </div>
  );
}
