import { MenuItems } from '.';
import NavItem from './NavItem';

interface MobileMenuProps {
  mobMenu: boolean;
  toggleMobileMenu: () => void;
  navItems: MenuItems[];
}

export default function MobileMenu({ mobMenu, toggleMobileMenu, navItems }: MobileMenuProps) {
  return (
    <ul title="mobileMenu" className={`header--mobile-${mobMenu} header--mobile`}>
      {navItems.map(navItem => (
        <li onClick={toggleMobileMenu} key={`mobile-nav-${navItem.url}`}>
          <NavItem title={navItem.title} url={navItem.url} hasWhiteBg={'noWhiteBg'} />
        </li>
      ))}
    </ul>
  );
}
