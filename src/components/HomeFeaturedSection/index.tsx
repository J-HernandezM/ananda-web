import arrowIcon from '@/assets/svg/icons-right-arrow.svg';
import StyledButton from '@/shared/components/StyledButton';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';
import './homeFeaturedSection.scss';

export default function HomeFeaturedSection({ children }: PropsWithChildren) {
  return (
    <section id="featured--home" className="featured">
      {children}
      <div className="featured--content">
        <h2 className="featured--title">Cuidamos de ti</h2>
        <p className="featured--subtitle">con las mejores formulas y los mejores ingredientes</p>
        <StyledButton onclick={navigateToProducts} text="Explorar productos" icon={arrowIcon} />
      </div>
    </section>
  );
}

const navigateToProducts = async () => {
  'use server';
  redirect('/tienda');
};
