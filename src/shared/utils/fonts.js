import localFont from 'next/font/local';
import { Lato } from 'next/font/google';

export const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-lato',
  display: 'swap',
});

export const absolutely_vintage = localFont({
  src: '../../../public/fonts/Absolutely-Vintage.otf',
  style: 'normal',
  weight: '400',
  variable: '--font-absolutely',
});
