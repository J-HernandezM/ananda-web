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
import StyledButton from '@/shared/components/StyledButton';
import ProductListWithSnackbar from '@/shared/components/ProductList/ProductList';
import CartPageProduct from '@/components/CartPageProduct';
import formatPrice from '@/shared/utils/formatPrice';
import CartPageEmpty from '@/components/CartPageEmpty';

export default function CartPage() {
  const orders = useCartStore(state => state.orders);

  return (
    <>
      {!!orders.length ? (
        <div className="cartPage">
          <section className="cartPage--extended">
            <div className="cartPage--products-titles">
              <p>PRODUCTO</p>
              <p>PRECIO</p>
              <p>CANTIDAD</p>
              <p>SUBTOTAL</p>
            </div>
            {/* <div className="cartPage--products-list"> */}
            <div className="cartPage--products-list">
              {orders.map(order => (
                <CartPageProduct key={`cartPage--${order.id}`} order={order}></CartPageProduct>
              ))}
            </div>
            {/* </div> */}
            <CartPageCalculate customClass="cartPage--calculate-mobile" />
            <CartPageBottomLayout />
          </section>
          <CartPageCalculate />
        </div>
      ) : (
        <>
          <CartPageEmpty />
          <CartPageBottomLayout />
        </>
      )}
    </>
  );
}

export function CartPageBottomLayout() {
  const suggested: Product[] = sanitizeApiResponse(mockedStrapiResponse).slice(0, 3);
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
          <ProductListWithSnackbar productsArray={suggested} />
        </div>
      </div>
    </div>
  );
}

function CartPageCalculate({ customClass }: { customClass?: string }) {
  const total = useCartStore(state => state.total);
  const shipmentFee = 0;
  const router = useRouter();

  return (
    <section className={`${customClass ? customClass : ''} cartPage--calculate`}>
      <p className="calculate--title">TOTALES DEL CARRITO</p>
      <div className="calculate--subtotal">
        <p>Subtotal</p>
        <p className="calculate--prices">$ {formatPrice(total, false)}</p>
      </div>
      <div className="calculate--shipment">
        <p>Envio</p>
        <p className="calculate--prices">Calcular en checkout</p>
      </div>
      <div className="calculate--total">
        <p>Total</p>
        <p className="calculate--prices">$ {formatPrice(total + shipmentFee, false)}</p>
      </div>
      <button
        className="calculate--button"
        onClick={() => {
          router.push('/payment/checkout');
        }}
      >
        FINALIZAR COMPRA
      </button>
    </section>
  );
}
