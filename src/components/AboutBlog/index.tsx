import Image from 'next/image';
import stamp from '@/assets/svg/about-stamp.svg';
import AboutHistory from './AboutHistory';
import './aboutBlog.scss';

export default function AboutBlog() {
  return (
    <section className="blog">
      <Image className="blog--stamp" src={stamp} alt="" role="presentation" />
      <AboutHistory></AboutHistory>
      <article className="blog--mision" id="mision">
        <h3 className="blog--title">Mision</h3>
      </article>
      <article className="blog--materials" id="materiales">
        <h3 className="blog--title blog--title-alt">Materiales</h3>
      </article>
      <article className="blog--env" id="ambiente">
        <h3 className="blog--title">Compromiso con&#13;el medio ambiente</h3>
      </article>
    </section>
  );
}
