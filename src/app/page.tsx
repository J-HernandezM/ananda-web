import Image from 'next/image';
import homeBackgroundPhoto from '@/assets/images/home/header.webp';
import './home.scss';

export default function Home() {
  return (
    <main>
      <div className="home--backgroundPhoto-container">
        <Image
          width={0}
          height={0}
          src={homeBackgroundPhoto}
          alt="chica sonriendo"
        />
      </div>
    </main>
  );
}
