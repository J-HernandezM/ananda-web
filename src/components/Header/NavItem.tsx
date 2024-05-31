'use client';

import { usePathname } from 'next/navigation';
import { MenuItems } from '.';
import Link from 'next/link';
import './header.scss';

const whiteBgRoutes = ['product', 'checkout', 'cart'];

export default function NavItem({ title, url }: MenuItems) {
  const pathname = usePathname();
  const isActive = pathname === url ? 'active' : 'unactive';
  const hasWhiteBg = whiteBgRoutes.some(route => pathname.includes(route))
    ? 'whiteBg'
    : 'noWhiteBg';

  return (
    <Link
      className={`link--${isActive}-${hasWhiteBg}`}
      href={url}
    >
      {title}
    </Link>
  );
}
