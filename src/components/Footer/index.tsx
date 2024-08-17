import Image from 'next/image';
import logoFooter from '@/assets/svg/logo-footer.svg';
import logoText from '@/assets/svg/logo-text-footer.svg';
import illustRomero from '@/assets/svg/footer-illustration-1.svg';
import illustAvena from '@/assets/svg/footer-illustration-2.svg';
import MediaLinks from '@/shared/components/MediaLinks';
import media from '@/shared/utils/media.js';
import './footer.scss';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <Image
        src={illustRomero}
        alt=""
        role="presentation"
        className="footer--illustration-romero"
      />
      <div className="footer--about">
        <h3 className="footer--section-title">Nosotros</h3>
        <ul className="footer--links-list">
          <li>
            <Link href="/nosotros#historia" className="footer--anchor">
              Nuestra historia
            </Link>
          </li>
          <li>
            <Link href="/nosotros#mision" className="footer--anchor">
              Mision
            </Link>
          </li>
          <li>
            <Link href="/nosotros#materiales" className="footer--anchor">
              Materiales
            </Link>
          </li>
          <li>
            <Link href="/nosotros#ambiente" className="footer--anchor">
              Compromiso con el medio ambiente
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer--logo-box">
        <Image
          src={logoFooter}
          className="footer--logo"
          alt="Logo de marca: nos encanta verte bien, hecho a mano, hecho con amor."
        />
        <MediaLinks media={media}></MediaLinks>
      </div>
      <div className="footer--faq">
        <h3 className="footer--section-title">FAQ</h3>
        <ul className="footer--links-list">
          <li>
            <Link href="/emprende" className="footer--anchor">
              Quiero ser distribuidor
            </Link>
          </li>
          <li>
            <Link href="/preguntas-frecuentes#devoluciones" className="footer--anchor">
              Politica de cambios y devoluciones
            </Link>
          </li>
          <li>
            <Link href="/preguntas-frecuentes#envios" className="footer--anchor">
              Politica de envios
            </Link>
          </li>
          <li>
            <Link href="/" className="footer--anchor">
              Contacto
            </Link>
          </li>
        </ul>
        <Link href="/" className="footer--anchor-home">
          <Image className="footer--logo-text" src={logoText} alt="Logo Ananda" />
        </Link>
      </div>
      <Image src={illustAvena} alt="" role="presentation" className="footer--illustration-avena" />
    </footer>
  );
}
