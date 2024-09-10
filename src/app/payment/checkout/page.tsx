'use client';

// @package
import { useCartStore } from '@/stores/cartStore';

// @styles
import './checkoutFormPage.scss';

// @components
import CartPageEmpty from '@/components/CartPageEmpty';

export default function CheckoutFormPage() {
  const orders = useCartStore(state => state.orders);

  return (
    <>
      {!!orders.length ? (
        <div className="checkoutPage">
          <section className="checkout--form"></section>
          <section className="checkout--complete"></section>
        </div>
      ) : (
        <CartPageEmpty />
      )}
    </>
  );
}
