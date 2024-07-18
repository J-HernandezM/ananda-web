import Image from 'next/image';
import creamImg from '@/assets/images/nosotros/about-crema.webp';
import romeroImg from '@/assets/images/nosotros/about-romero.webp';
import lavandaImg from '@/assets/images/nosotros/about-lavanda.webp';
import collageImg from '@/assets/images/nosotros/temp-about-placeholder.webp';
import media from '@/shared/utils/media';
import MediaLinks from '@/shared/components/MediaLinks';
import './aboutBlog.scss';

export default function AboutHistory() {
  return (
    <article className="blog--history" id="historia">
      <div className="blog--content">
        <div className="history--headline">
          <h3 className="blog--title">Sobre</h3>
          <figure>
            <Image className="blog--image-cream" src={creamImg} alt="" role="presentation" />
          </figure>
          <h3 className="blog--title">Nosotros</h3>
        </div>
        <div className="history--info">
          <div className="history--info-up">
            <p className="blog--description history--description">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
              euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
              veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
              commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat.
            </p>
            <Image className="blog--image-lavanda" src={lavandaImg} alt="" role="presentation" />
          </div>
          <div className="history--info-down">
            <Image className="blog--image-collage" src={collageImg} alt="" role="presentation" />
            <div className="history--description-wMedia">
              <p className="blog--description history--description">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
                vulputate velit esse molestie consequat.
              </p>
              <div className="history--media">
                <MediaLinks media={media}></MediaLinks>
              </div>
            </div>
          </div>
          <Image className="blog--image-romero" src={romeroImg} alt="" role="presentation" />
        </div>
      </div>
    </article>
  );
}
