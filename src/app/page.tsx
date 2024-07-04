import HomeFirstSection from '@/components/HomeFirstSection';
import HomeFeaturedSection from '@/components/HomeFeaturedSection';
import BackgroundTopPhoto from '@/components/BackgroundTopPhoto';
import bgPhoto from '@/assets/images/home/header-home.webp';
import FeaturedProducts from '@/components/FeaturedProducts';
import HomeLastBanner from '@/components/HomeLastBanner';

export default async function Home() {
  return (
    <main>
      <HomeFeaturedSection>
        <BackgroundTopPhoto src={bgPhoto} />
      </HomeFeaturedSection>
      <HomeFirstSection />
      <FeaturedProducts />
      <HomeLastBanner />
    </main>
  );
}
