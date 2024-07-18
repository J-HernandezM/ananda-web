import Image from 'next/image';
import logoFooter from '@/assets/svg/logo-footer.svg';
import logoText from '@/assets/svg/logo-text-footer.svg';
import illustRomero from '@/assets/svg/footer-illustration-1.svg';
import illustAvena from '@/assets/svg/footer-illustration-2.svg';
import MediaLinks from '@/shared/components/MediaLinks';
import media from '@/shared/utils/media';
import './footer.scss';

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
            <a href="/nosotros#historia" className="footer--anchor">
              Nuestra historia
            </a>
          </li>
          <li>
            <a href="/nosotros#mision" className="footer--anchor">
              Mision
            </a>
          </li>
          <li>
            <a href="/nosotros#materiales" className="footer--anchor">
              Materiales
            </a>
          </li>
          <li>
            <a href="/nosotros#ambiente" className="footer--anchor">
              Compromiso con el medio ambiente
            </a>
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
            <a href="/emprende" className="footer--anchor">
              Quiero ser distribuidor
            </a>
          </li>
          <li>
            <a href="/preguntas-frecuentes#devoluciones" className="footer--anchor">
              Politica de cambios y devoluciones
            </a>
          </li>
          <li>
            <a href="/preguntas-frecuentes#envios" className="footer--anchor">
              Politica de envios
            </a>
          </li>
          <li>
            <a href="/" className="footer--anchor">
              Contacto
            </a>
          </li>
        </ul>
        <a href="/" className="footer--anchor-home">
          <Image className="footer--logo-text" src={logoText} alt="Logo Ananda" />
        </a>
      </div>
      <Image src={illustAvena} alt="" role="presentation" className="footer--illustration-avena" />
    </footer>
  );
}
