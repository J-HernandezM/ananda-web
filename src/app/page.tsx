import { redirect } from 'next/navigation';
import bgPhoto from '@/assets/images/home/header-home.webp';
import arrowIcon from '@/assets/svg/icons-right-arrow.svg';
import BackgroundTopPhoto from '@/components/BackgroundTopPhoto';
import FeaturedButton from '@/components/FeaturedButton';
import HomeFirstSection from '@/components/HomeFirstSection';
import './home.scss';

export default async function Home() {
  return (
    <main>
      <section className="featured">
        <BackgroundTopPhoto src={bgPhoto} />
        <div className="featured--content">
          <h2 className="featured--title">Cuidamos de ti</h2>
          <p className="featured--subtitle">
            con las mejores formulas y los mejores ingredientes
          </p>
          <FeaturedButton
            onclick={navigateToProducts}
            text="Explorar productos"
            image={arrowIcon}
          />
        </div>
      </section>
      <HomeFirstSection />
    </main>
  );
}

const navigateToProducts = async () => {
  'use server';
  redirect('/tienda');
};
