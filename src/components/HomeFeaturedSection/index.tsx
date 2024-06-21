import arrowIcon from '@/assets/svg/icons-right-arrow.svg';
import FeaturedButton from '@/components/FeaturedButton';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';
import './homeFeaturedSection.scss';

export default function HomeFeaturedSection({ children }: PropsWithChildren) {
  return (
    <section className="featured">
      {children}
      <div className="featured--content">
        <h2 className="featured--title">Cuidamos de ti</h2>
        <p className="featured--subtitle">con las mejores formulas y los mejores ingredientes</p>
        <FeaturedButton onclick={navigateToProducts} text="Explorar productos" image={arrowIcon} />
      </div>
    </section>
  );
}

const navigateToProducts = async () => {
  'use server';
  redirect('/tienda');
};
