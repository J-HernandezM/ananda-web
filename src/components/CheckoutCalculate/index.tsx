// @packages
import formatPrice from '@/shared/utils/formatPrice';
import { useCartStore } from '@/stores/cartStore';
import { usePathname } from 'next/navigation';

// @styles
import './checkoutCalculate.scss';

interface CheckoutCalculateProps {
  customClass?: string;
  handleClick: () => void;
  children?: React.ReactNode;
}

export default function CheckoutCalculate({
  customClass,
  handleClick,
  children,
}: CheckoutCalculateProps) {
  const total = useCartStore(state => state.total);
  const pathname = usePathname();

  const isCheckoutPage = pathname.includes('checkout');
  // TODO: Implement shipment fee calculation (with gr of the products)
  const shipmentFee = 15000;

  return (
    <section className={`${customClass ? customClass : ''} cartPage--calculate`}>
      <p className="calculate--title">TOTALES DEL CARRITO</p>
      <div className="calculate--subtotal">
        <p>Subtotal</p>
        <p className="calculate--prices">$ {formatPrice(total, false)}</p>
      </div>
      <div className="calculate--shipment">
        <p>Envio</p>
        <p className="calculate--prices">
          {isCheckoutPage ? `$ ${formatPrice(shipmentFee, false)}` : 'Calcular en checkout'}
        </p>
      </div>
      <div className="calculate--total">
        <p>Total</p>
        <p className="calculate--prices">$ {formatPrice(total + shipmentFee, false)}</p>
      </div>
      {!isCheckoutPage ? (
        <button className="calculate--button" onClick={handleClick}>
          FINALIZAR COMPRA
        </button>
      ) : null}
      {children}
    </section>
  );
}
