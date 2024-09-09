import PaymentBreadcrumbs from '@/components/PaymentBreadcrumbs';
import { PropsWithChildren } from 'react';
import './payment.scss';

export default function PaymentLayout({ children }: PropsWithChildren) {
  return (
    <main className="payment--main">
      <PaymentBreadcrumbs />
      {children}
    </main>
  );
}
