import arrowIcon from '@/assets/svg/icons-arrow.svg';
import Image from 'next/image';
import { CustomArrowProps } from 'react-slick';
import './slideArrow.scss';

export interface ArrowProps extends CustomArrowProps {
  direction: 'next' | 'prev';
}

export default function SlideArrow({ direction, onClick }: ArrowProps) {
  return (
    <Image
      src={arrowIcon}
      alt={direction === 'next' ? 'flecha siguiente producto' : 'flecha anterior producto'}
      className={`${direction == 'next' ? 'carousel--arrow-right' : 'carousel--arrow-left'} carousel--arrow`}
      onClick={onClick}
    />
  );
}
