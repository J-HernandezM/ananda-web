'use client';

import { usePathname } from 'next/navigation';
import { MenuItems } from '.';
import Link from 'next/link';
import './header.scss';

export default function NavItem({ title, url }: MenuItems) {
  const pathname = usePathname().slice(1);
  const isActive = pathname === url;

  return (
    <Link
      className={isActive ? 'header--link-active' : 'header--link-unactive'}
      href={url}
    >
      {title}
    </Link>
  );
}
