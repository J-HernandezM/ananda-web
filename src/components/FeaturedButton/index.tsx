'use client';

import { MouseEventHandler } from 'react';
import Image from 'next/image';
import '@/app/home.scss';

interface FeaturedButtonProps {
  text: string;
  image: string;
  onclick: () => void;
}

export default function FeaturedButton({
  onclick,
  text,
  image,
}: FeaturedButtonProps) {
  const handleClick = () => {
    onclick();
  };

  return (
    <button
      onClick={handleClick}
      onMouseMove={buttonAnimation}
      className="featured--button"
    >
      {text}
      <Image
        src={image}
        alt={`boton ${text}`}
        className="featured--button-icon"
      />
    </button>
  );
}

const buttonAnimation: MouseEventHandler<HTMLButtonElement> = e => {
  const btn = e.currentTarget;
  const x = e.nativeEvent.offsetX;
  const y = e.nativeEvent.offsetY;

  btn.style.setProperty('--mouse-x', x + 'px');
  btn.style.setProperty('--mouse-y', y + 'px');
};
