'use client';

// @packages
import { useCartStore } from '@/stores/cartStore';
import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// @styles
import './cartPage.scss';

// @components
import CartPageProduct from '@/components/CartPageProduct';
import CartPageEmpty from '@/components/CartPageEmpty';
import CheckoutCalculate from '@/components/CheckoutCalculate';
import CartPageBottomLayout from '@/components/CartPageBottomLayout';
import ModalUnderConstructionControlled from '@/components/ModalUnderConstruction';

export default function CartPage() {
  const orders = useCartStore(state => state.orders);
  const [open, setOpen] = useState(false);
  // const router = useRouter();

  const navigateToCheckout = () => {
    // router.push('/payment/checkout');\
    setOpen(true);
  };

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
            <div className="cartPage--products-list">
              {orders.map(order => (
                <CartPageProduct key={`cartPage--${order.id}`} order={order}></CartPageProduct>
              ))}
            </div>
            <CheckoutCalculate
              handleClick={navigateToCheckout}
              customClass="cartPage--calculate-mobile"
            />
            <CartPageBottomLayout />
          </section>
          <CheckoutCalculate handleClick={navigateToCheckout} />
          <ModalUnderConstructionControlled
            open={open}
            setOpen={setOpen}
          ></ModalUnderConstructionControlled>
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
