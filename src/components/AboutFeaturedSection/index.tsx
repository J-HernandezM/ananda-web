import { PropsWithChildren } from 'react';
import './aboutFeaturedSection.scss';

export default function AboutFeaturedSection({ children }: PropsWithChildren) {
  return (
    <section id="featured--about" className="featured">
      {children}
      <div className="featured--content">
        <h2 className="featured--title">
          Nos encanta<span> verte bien</span>
        </h2>
        <p className="featured--description">
          Lorem ipsum dolor sit amet, consectetuer adi piscing elit, sed diam no nummy nibh euismod
          tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
        </p>
      </div>
    </section>
  );
}
