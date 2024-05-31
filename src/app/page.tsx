import homeBackgroundPhoto from '@/assets/images/home/header.webp';
import BackgroundTopPhoto from '@/components/BackgroundTopPhoto';

export default function Home() {
  return (
    <main>
      <BackgroundTopPhoto
        src={homeBackgroundPhoto}
        alt="chica sonriendo"
      />
    </main>
  );
}
