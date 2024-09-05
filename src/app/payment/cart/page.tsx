'use client';

// @packages
import { useCartStore } from '@/stores/cartStore';
import { useRouter } from 'next/navigation';

// import { redirect } from 'next/navigation';
import { sanitizeApiResponse } from '@/shared/utils/sanitizeApiResponse';
import { mockedStrapiResponse } from '@/shared/utils/mockedStrapiResponse';
import { Product } from '@/types/types';

// @styles
import './cartPage.scss';

// @components
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StyledButton from '@/shared/components/StyledButton';
import ProductListWithSnackbar from '@/shared/components/ProductList/ProductList';
import CartPageProduct from '@/components/CartPageProduct';

export default function CartPage() {
  const orders = useCartStore(state => state.orders);

  return (
    <>
      {!!orders.length ? (
        <div className="cartPage">
          <section className="cartPage--extended">
            <div className="cartPage--products-list">
              <div className="cartPage--products-titles">
                <p>PRODUCTO</p>
                <p>PRECIO</p>
                <p>CANTIDAD</p>
                <p>SUBTOTAL</p>
              </div>
              <div className="cartPage--products-list">
                {orders.map(order => (
                  <CartPageProduct key={`cartPage--${order.id}`} order={order}></CartPageProduct>
                ))}
              </div>
            </div>
            <CartPageBottomLayout />
          </section>
          <section className="cartPage--calculate"></section>
        </div>
      ) : (
        <div className="cartPage--empty">
          <div className="cartPage--products-empty">
            <ShoppingCartIcon fontSize="large"></ShoppingCartIcon>
            <h3 className="cart--total">TU CARRITO ESTA VACÍO</h3>
          </div>
          <CartPageBottomLayout />
        </div>
      )}
    </>
  );
}

function CartPageBottomLayout() {
  const suggested: Product[] = sanitizeApiResponse(mockedStrapiResponse).slice(0, 3);
  const router = useRouter();

  return (
    <>
      <StyledButton
        text="Seguir comprando"
        materialIcon={NavigateBeforeIcon}
        onclick={() => router.push('/tienda')}
        customClass="cartPage--button-back"
      ></StyledButton>
      <div className="cartPage--interest">
        <p>Puede que estés interesado en...</p>
        <div className="cartPage--interest-products">
          <ProductListWithSnackbar productsArray={suggested} />
        </div>
      </div>
    </>
  );
}
