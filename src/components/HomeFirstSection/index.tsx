import Image from 'next/image';
import stamp from '@/assets/svg/home-stamp.svg';
import textLogo from '@/assets/svg/logo-text.svg';
import handsLogo from '@/assets/svg/logo-icon-hands.svg';
import romeroImg from '@/assets/images/home/home-romero.webp';
import lavandaImg from '@/assets/images/home/home-lavanda.webp';
import jabonImg from '@/assets/images/home/home-jabon.webp';
import bgPaper from '@/assets/svg/home-torn-paper.svg';
import shadowAsset from '@/assets/images/home/home-romero-shadow.webp';
import './homeFirstSection.scss';

export default function HomeFirstSection() {
  return (
    <section className="firstSection">
      <Image className="firstSection--stamp" src={stamp} alt="" role="presentation" />
      <Image className="firstSection--logo-text" alt="Logo Ananda" src={textLogo} />
      <div className="firstSection--collage">
        <Image src={bgPaper} alt="" role="presentation" className="collage--bg" />
        <Image src={handsLogo} className="firstSection--logo-hands" alt="" role="presentation" />
        <p className="firstSection--description">
          Productos artesanales hechos a mano con recetas ancestrales que son gentiles con tu cuerpo
          y con el medioambiente
        </p>
        <div className="collage--images-box">
          <Image
            src={shadowAsset}
            alt=""
            role="presentation"
            className="collage--asset collage--romero-shadow"
          />
          <Image src={romeroImg} alt="Romero" className="collage--asset collage--romero" />
          <Image src={jabonImg} alt="Jabon de lavanda" className="collage--asset collage--jabon" />
          <Image
            src={lavandaImg}
            alt="Flor de lavanda"
            className="collage--asset collage--lavanda"
          />
        </div>
      </div>
    </section>
  );
}
