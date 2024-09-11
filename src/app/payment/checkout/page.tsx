'use client';

// @package
import { useCartStore } from '@/stores/cartStore';

// @styles
import './checkoutFormPage.scss';

// @components
import CartPageEmpty from '@/components/CartPageEmpty';
import CheckoutForm from '@/components/CheckoutForm';

export default function CheckoutFormPage() {
  const orders = useCartStore(state => state.orders);

  return (
    <>
      {!!orders.length ? (
        <div className="checkoutPage">
          <section className="checkout--form">
            <p>DETALLES DE ENVÍO Y FACTURACIÓN</p>
            <CheckoutForm />
          </section>
          <section className="checkout--complete"></section>
        </div>
      ) : (
        <CartPageEmpty />
      )}
    </>
  );
}
