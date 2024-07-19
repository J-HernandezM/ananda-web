import Image, { StaticImageData } from 'next/image';
import React from 'react';
import './backgroundTopPhoto.scss';

interface BackgroundTopPhotoProps {
  src: StaticImageData;
  position?: string;
}

export default function BackgroundTopPhoto({ src, position }: BackgroundTopPhotoProps) {
  return (
    <div className="backgroundPhoto--container">
      <Image
        className={position ? `backgroundPhoto--position-${position}` : ''}
        width={0}
        height={0}
        src={src}
        priority={true}
        alt=""
        role="presentation"
      />
      <div className="backgroundPhoto--shadow"></div>
    </div>
  );
}
