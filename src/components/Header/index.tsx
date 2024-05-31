import Image from 'next/image';
import logoIcon from '@/assets/svg/logo-icon.svg';
import cartIcon from '@/assets/svg/icons-cart.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavItem from './NavItem';
import './header.scss';

export interface MenuItems {
  title: string;
  url: string;
}

const navItems: MenuItems[] = [
  {
    title: 'Nosotros',
    url: 'nosotros',
  },
  {
    title: 'Productos',
    url: 'tienda',
  },
  {
    title: 'Emprende',
    url: 'emprende',
  },
];

export default function Header() {
  return (
    <header>
      <FontAwesomeIcon
        icon={faBars}
        className="header--menu-icon icons"
      />
      <a href="/">
        <Image
          src={logoIcon}
          alt="Logo Ananda Jaboneria Artesanal"
          width={0}
          height={0}
          className="header--logo-icon"
        />
      </a>
      <ul className="header--sections">
        {navItems.map(navItem => (
          <NavItem
            title={navItem.title}
            url={navItem.url}
            key={`nav-${navItem.url}`}
          />
        ))}
      </ul>
      <div className="header--icon-container">
        <Image
          src={cartIcon}
          alt="Carrito de compras"
          className="header--cart-icon icons"
        />
      </div>
    </header>
  );
}
