import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './header.scss';

interface NavItemProps {
  title: string;
  url: string;
  hasWhiteBg: string;
}

export default function NavItem({ title, url, hasWhiteBg }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === url ? 'active' : 'unactive';

  return (
    <Link className={`link--${isActive}-${hasWhiteBg}`} href={url}>
      {title}
    </Link>
  );
}
