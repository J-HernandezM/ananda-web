'use client';

import { MouseEventHandler } from 'react';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { Icon, SvgIconTypeMap } from '@mui/material';
import Image from 'next/image';
import './styledButton.scss';

interface StyledButtonProps {
  text: string;
  icon?: string;
  materialIcon?: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  onclick: () => void;
  customClass?: string;
}

export default function StyledButton({
  onclick,
  text,
  icon,
  customClass,
  materialIcon,
}: StyledButtonProps) {
  const handleClick = () => onclick();

  return (
    <button
      onClick={handleClick}
      onMouseMove={buttonAnimation}
      className={`styled--button ${customClass} ${icon || materialIcon ? 'has-icon' : ''}`}
    >
      {text}
      {icon ? (
        <Image
          src={icon}
          alt={`botón ${text}`}
          className={`styled--button-icon ${customClass}-icon`}
        />
      ) : null}
      {materialIcon ? (
        <Icon className="styled--buton-muiIcon" component={materialIcon} fontSize="small"></Icon>
      ) : null}
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
