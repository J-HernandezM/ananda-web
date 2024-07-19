import Image from 'next/image';
import manzanillaImg from '@/assets/images/nosotros/about-manzanilla.webp';
import './styles/aboutMision.scss';

export default function AboutMision() {
  return (
    <article className="blog--mision" id="mision">
      <div className="blog--content mision--content">
        <div>
          <h3 className="blog--title">Mision</h3>
          <p className="blog--description mision--description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
            quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
            consequat.
          </p>
        </div>
        <Image
          className="blog--image-manzanilla"
          src={manzanillaImg}
          alt="flor de manzanilla"
        ></Image>
      </div>
    </article>
  );
}
