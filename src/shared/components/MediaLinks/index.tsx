import Image from 'next/image';
import './MediaLinks.scss';

interface MediaLinksProps {
  media: Media[];
}

interface Media {
  title: string;
  img: string;
  url: string;
}

export default function MediaLinks({ media }: MediaLinksProps) {
  return (
    <ul className="footer--media">
      {media.map((m, index) => (
        <li key={index}>
          <a href={m.url} target="_blank">
            <Image
              src={m.img}
              alt={`link a red social ${m.title}`}
              className="media--icons"
              width={32}
              height={32}
            ></Image>
          </a>
        </li>
      ))}
    </ul>
  );
}
