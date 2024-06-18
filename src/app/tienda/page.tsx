import bgPhoto from '@/assets/images/tienda/header-tienda.webp';
import BackgroundTopPhoto from '@/components/BackgroundTopPhoto';
import './storePage.scss';

export default function StorePage() {
  return (
    <main>
      <BackgroundTopPhoto src={bgPhoto} />
    </main>
  );
}
