'use client';

// @packages
import { usePathname } from 'next/navigation';
import { useState } from 'react';

// @styles
import logoIcon from '@/assets/svg/logo-icon.svg';
import cartIcon from '@/assets/svg/icons-cart.svg';
import menuIcon from '@/assets/svg/icons-menu.svg';
import './header.scss';

// @components
import MobileMenu from './MobileMenu';
import Image from 'next/image';
import Link from 'next/link';
import NavItem from './NavItem';
import CartMenu from '../CartMenu';

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
  const [mobMenu, setMobMenu] = useState<boolean>(false);
  const [cartMenu, setCartMenu] = useState<boolean>(false);
  const pathname = usePathname();

  const hasWhiteBg = whiteBgRoutes.some(route => pathname.includes(route))
    ? 'whiteBg'
    : 'noWhiteBg';

  const toggleMobileMenu = () => {
    setMobMenu(!mobMenu);
  };

  const toggleCartMenu = () => {
    setCartMenu(!cartMenu);
  };

  return (
    <header>
      <Image
        src={menuIcon}
        alt="Abrir y cerrar menu"
        className={`icons-${hasWhiteBg} header--menu-icon icons`}
        onClick={toggleMobileMenu}
      />
      <MobileMenu mobMenu={mobMenu} toggleMobileMenu={toggleMobileMenu} navItems={navItems} />
      <Link href="/">
        <Image
          src={logoIcon}
          alt="Logo Ananda Jaboneria Artesanal"
          className={`icons-${hasWhiteBg} header--logo-icon`}
        />
      </Link>
      <ul className="header--sections">
        {navItems.map(navItem => (
          <li key={`nav-${navItem.url}`}>
            <NavItem title={navItem.title} url={navItem.url} hasWhiteBg={hasWhiteBg} />
          </li>
        ))}
      </ul>
      <div className="header--icon-container">
        <Image
          src={cartIcon}
          alt="Carrito de compras"
          className={`icons-${hasWhiteBg} header--cart-icon icons`}
          onClick={toggleCartMenu}
        />
        <CartMenu cartMenu={cartMenu} toggleCart={setCartMenu} />
      </div>
    </header>
  );
}
