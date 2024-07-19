import Image from 'next/image';
import leaf1Img from '@/assets/images/nosotros/about-leaf-up.webp';
import leaf2Img from '@/assets/images/nosotros/about-leaf-down.webp';
import leavesImg from '@/assets/images/nosotros/about-leaves.webp';
import './styles/aboutEnvironment.scss';

export default function AboutEnvironment() {
  return (
    <article className="blog--env" id="ambiente">
      <div className="blog--content">
        <div>
          <h3 className="blog--title">Compromiso con&#13;el medio ambiente</h3>
          <p className="blog--description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
            quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
            consequat.
          </p>
          <Image className="blog--image-leaf1" src={leaf1Img} alt="" role="presentation"></Image>
          <Image className="blog--image-leaf2" src={leaf2Img} alt="" role="presentation"></Image>
        </div>
      </div>

      <Image className="blog--image-leaves" src={leavesImg} alt="" role="presentation"></Image>
    </article>
  );
}
