'use client';

import { MouseEventHandler } from 'react';
import Image from 'next/image';
import './styledButton.scss';

interface StyledButtonProps {
  text: string;
  icon: string;
  onclick: () => void;
  customClass: string;
}

export default function StyledButton({ onclick, text, icon, customClass }: StyledButtonProps) {
  const handleClick = () => onclick();

  return (
    <button
      onClick={handleClick}
      onMouseMove={buttonAnimation}
      className={`styled--button ${customClass}`}
    >
      {text}
      <Image src={icon} alt={`botón ${text}`} className={`${customClass}-icon`} />
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
