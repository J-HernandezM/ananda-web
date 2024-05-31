'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logoIcon from '@/assets/svg/logo-icon.svg';
import cartIcon from '@/assets/svg/icons-cart.svg';
import menuIcon from '@/assets/svg/icons-menu.svg';
import NavItem from './NavItem';
import './header.scss';

export interface MenuItems {
  title: string;
  url: string;
}

const whiteBgRoutes = ['productos', 'checkout', 'cart'];

const navItems: MenuItems[] = [
  {
    title: 'Nosotros',
    url: '/nosotros',
  },
  {
    title: 'Productos',
    url: '/tienda',
  },
  {
    title: 'Emprende',
    url: '/emprende',
  },
];

export default function Header() {
  const pathname = usePathname();
  const hasWhiteBg = whiteBgRoutes.some(route => pathname.includes(route))
    ? 'whiteBg'
    : 'noWhiteBg';

  return (
    <header>
      <Image
        src={menuIcon}
        alt="Abrir y cerrar menu"
        className={`icons-${hasWhiteBg} header--menu-icon icons`}
      />
      <a href="/">
        <Image
          src={logoIcon}
          alt="Logo Ananda Jaboneria Artesanal"
          width={0}
          height={0}
          className={`icons-${hasWhiteBg} header--logo-icon`}
        />
      </a>
      <ul className="header--sections">
        {navItems.map(navItem => (
          <NavItem
            title={navItem.title}
            url={navItem.url}
            hasWhiteBg={hasWhiteBg}
            key={`nav-${navItem.url}`}
          />
        ))}
      </ul>
      <div className="header--icon-container">
        <Image
          src={cartIcon}
          alt="Carrito de compras"
          className={`icons-${hasWhiteBg} header--cart-icon icons`}
        />
      </div>
    </header>
  );
}
