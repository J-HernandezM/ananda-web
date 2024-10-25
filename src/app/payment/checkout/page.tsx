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
  // const [preferenceId, setPreferenceId] = useState<string>('');

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
          // setPreferenceId(data.preferenceId);
          resolve(data.preferenceId);
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  // usememo funciona para evitar re render pero no se le puede pasar props
  // const memoizedWallet = useMemo(
  //   () => <Wallet onSubmit={() => handleWalletSubmit(() => console.log('submitForm'))} />,
  //   [orders]
  // );

  // 10/10/24 en este momento funciona como deberia, el boton esta siempre, si doy click sin llenar el form, no lo envia, si lo lleno si lo envia
  // En teoria con el React memo es lo mas cerca de estar funcionando que hemos llegado

  return (
    <>
      {!!orders.length ? (
        <div className="checkoutPage">
          <Formik
            initialValues={initialValues}
            onSubmit={async values => {
              // TODO: implementar el envio de la informacion del formulario
              // El onsubmit deberia ejecutar una automated action para enviarnos un correo o algo
              // console.log(values);
              return values;
              // try {
              //   const response = await fetch('/api/create-preference', {
              //     method: 'POST',
              //     body: JSON.stringify({ orders }),
              //   });
              //   const data = await response.json();
              //   setPreferenceId(data.preferenceId);
              // } catch (error) {
              //   console.error('Error creating preference:', error);
              // }
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
                  {/* TODO: Hide the FINALIZAR COMPRA button on this route */}
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
