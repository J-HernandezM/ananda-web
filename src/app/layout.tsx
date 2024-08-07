import type { Metadata } from 'next';
import * as fonts from '@/shared/utils/fonts';
import './globals.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Ananda Jaboneria Artesanal',
  description:
    'Somos un taller de cosmética artesanal realizada con ingredientes naturales, de origen vegetal, sin sustancias químicas nocivas para la piel y el medio ambiente. Nuestro objetivo es crear un producto hecho en casa, hecho a mano, hecho con amor, con ingredientes naturales altamente hidratantes, humectantes, nutritivos, reparadores y terapeuticos que sean amigables con el medio ambiente. Utilizamos aceites vegetales prensados en frio, extractos de plantas, macerados, fragancias de aceites esenciales y aditivos como cafe, cacao, avena, pulpas de fruta, semillas secas y leches vegetales de procedencia organica, entre otros. Estamos comprometidos con el bienestar y la salud de la piel, entregando productos naturales de alta calidad y que brindan salud y belleza',
  keywords: [
    'Jabon de glicerina',
    'Jabones de glicerina',
    'Cosmetica natural',
    'cuidado de la piel',
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={`${fonts.lato.variable} ${fonts.absolutely_vintage.variable}`} lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <Suspense>
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Suspense>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
