import Image from 'next/image';
import AboutHistory from './AboutHistory';
import AboutMision from './AboutMision';
import AboutMaterials from './AboutMaterials';
import AboutEnvironment from './AboutEnvironment';
import stamp from '@/assets/svg/about-stamp.svg';
import './styles/aboutBlog.scss';

export default function AboutBlog() {
  return (
    <section className="blog">
      <Image className="blog--stamp" src={stamp} alt="" role="presentation" />
      <AboutHistory />
      <AboutMision />
      <AboutMaterials />
      <AboutEnvironment />
    </section>
  );
}
