import bgPhoto from '@/assets/images/nosotros/header-nosotros.webp';
import AboutFeaturedSection from '@/components/AboutFeaturedSection';
import BackgroundTopPhoto from '@/components/BackgroundTopPhoto';

export default function AboutPage() {
  return (
    <main>
      <AboutFeaturedSection>
        <BackgroundTopPhoto src={bgPhoto} position="top" />
      </AboutFeaturedSection>
    </main>
  );
}
