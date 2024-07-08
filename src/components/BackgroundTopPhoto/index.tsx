import Image, { StaticImageData } from 'next/image';
import React from 'react';
import './backgroundTopPhoto.scss';

interface BackgroundTopPhotoProps {
  src: StaticImageData;
}

export default function BackgroundTopPhoto({ src }: BackgroundTopPhotoProps) {
  return (
    <div className="backgroundPhoto--container">
      <Image width={0} height={0} src={src} priority={true} alt="" role="presentation" />
      <div className="backgroundPhoto--shadow"></div>
    </div>
  );
}
