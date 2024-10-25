'use client';

// @package
import { useCartStore } from '@/stores/cartStore';
import { Formik } from 'formik';
import { checkoutSchema, initialValues } from '@/components/CheckoutForm/checkoutSchema';
import { initMercadoPago } from '@mercadopago/sdk-react';
import React, { useEffect } from 'react';

// @styles
import './checkoutFormPage.scss';

// @components
import CartPageEmpty from '@/components/CartPageEmpty';
import CheckoutForm from '@/components/CheckoutForm';
import CheckoutCalculate from '@/components/CheckoutCalculate';
import MemoizedMercadoPagoButton from '@/components/MercadoPagoButton';

export default function CheckoutFormPage() {
  const orders = useCartStore(state => state.orders);

  useEffect(() => {
    initMercadoPago(process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY!);
    console.log('Mercado Pago initialized');
  }, []);

  // Set the preference ID on the go, instead of on Wallet Button creation
  // Since initialization button property sets the preferenceId on button creation
  // Here we create at the onSubmit of the cart button
  const handleWalletSubmit = async (func: () => unknown) => {
    // Avoid redirecting to Mercado Pago if the form is not valid
    const res = await func();
    if (!res) return;

    return new Promise((resolve, reject) => {
      fetch('/api/create-preference', {
        method: 'POST',
        body: JSON.stringify({ orders }),
      })
        .then(response => response.json())
        .then(data => {
          resolve(data.preferenceId);
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  return (
    <>
      {!!orders.length ? (
        <div className="checkoutPage">
          <Formik
            initialValues={initialValues}
            onSubmit={async values => {
              // TODO: implementar el envio de la informacion del formulario
              // El onsubmit deberia ejecutar una automated action para enviarnos un correo o algo
              return values;
            }}
            validationSchema={checkoutSchema}
          >
            {({ submitForm, setFieldValue }) => {
              return (
                <>
                  <section className="checkout--form">
                    <p>DETALLES DE ENVÍO Y FACTURACIÓN</p>
                    <CheckoutForm setFieldValue={setFieldValue} />
                  </section>
                  <CheckoutCalculate
                    customClass="calculate--checkout"
                    handleClick={() => console.log('Checkout button clicked')}
                  >
                    <MemoizedMercadoPagoButton
                      submitForm={submitForm}
                      handleWalletSubmit={handleWalletSubmit}
                    />
                  </CheckoutCalculate>
                </>
              );
            }}
          </Formik>
        </div>
      ) : (
        <CartPageEmpty />
      )}
    </>
  );
}
