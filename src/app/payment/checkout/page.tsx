'use client';

// @package
import { useCartStore } from '@/stores/cartStore';
import { Formik } from 'formik';
import { checkoutSchema, initialValues } from '@/components/CheckoutForm/checkoutSchema';

// @styles
import './checkoutFormPage.scss';

// @components
import CartPageEmpty from '@/components/CartPageEmpty';
import CheckoutForm from '@/components/CheckoutForm';
import CheckoutCalculate from '@/components/CheckoutCalculate';

export default function CheckoutFormPage() {
  const orders = useCartStore(state => state.orders);

  return (
    <>
      {!!orders.length ? (
        <div className="checkoutPage">
          <Formik
            initialValues={initialValues}
            onSubmit={values => {
              console.log('submitted: ', values);
              // setIsSubmitted(true);
            }}
            validationSchema={checkoutSchema}
          >
            {({ submitForm, setFieldValue }) => (
              <>
                <section className="checkout--form">
                  <p>DETALLES DE ENVÍO Y FACTURACIÓN</p>
                  <CheckoutForm setFieldValue={setFieldValue} />
                </section>
                <CheckoutCalculate
                  customClass="calculate--checkout"
                  handleClick={() => submitForm()}
                />
              </>
            )}
          </Formik>
        </div>
      ) : (
        <CartPageEmpty />
      )}
    </>
  );
}
