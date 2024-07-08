import Image from 'next/image';
import banner from '@/assets/images/home/home-last-collage.webp';
import bg from '@/assets/images/home/home-last-shape.webp';
import './homeLastBanner.scss';

export default function HomeLastBanner() {
  return (
    <section className="lastBanner">
      <Image className="lastBanner--bg" src={bg} alt="" role="presentation"></Image>
      <Image
        className="lastBanner--banner"
        src={banner}
        height={500}
        alt="una piel saludable empieza por buenos productos que cuiden de ella"
      />
    </section>
  );
}
