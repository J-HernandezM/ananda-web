import Image, { StaticImageData } from 'next/image';
import React from 'react';
import './backgroundTopPhoto.scss';

interface BackgroundTopPhotoProps {
  src: StaticImageData;
  alt: string;
}

export default function BackgroundTopPhoto({
  src,
  alt,
}: BackgroundTopPhotoProps) {
  return (
    <div className="backgroundPhoto--container">
      <Image
        width={0}
        height={0}
        src={src}
        alt={alt}
      />
      <div className="backgroundPhoto--shadow"></div>
    </div>
  );
}
