'use client';

// @packages
import { Breadcrumbs } from '@mui/material';
import { usePathname } from 'next/navigation';

// @stlyes
import './paymentBreadcrumbs.scss';

// @components
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from 'next/link';

const steps = [
  {
    label: 'Carrito',
    href: '/cart',
  },
  {
    label: 'Detalles del pago',
    href: '/checkout',
  },
];

export default function PaymentBreadcrumbs() {
  const pathname = usePathname();

  return (
    <div className="breadcrumbs">
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        {steps.map((step, index) => (
          <Link
            key={step.href}
            className={`breadcrumb--link ${pathname.includes(step.href) ? 'breadcrumb--link-active' : ''} ${pathname.includes('/cart') && index === 1 ? 'breadcrumb--link-disabled' : ''}`}
            href={`/payment/${step.href}`}
          >
            <span>{index + 1}</span>
            <span>{step.label}</span>
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  );
}
