import type { Metadata } from 'next';
import * as fonts from '@/utils/fonts';
import './globals.scss';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Ananda Jaboneria Artesanal',
  description:
    'Somos un taller de cosmética artesanal realizada con ingredientes naturales, de origen vegetal, sin sustancias químicas nocivas para la piel y el medio ambiente. Nuestro objetivo es crear un producto hecho en casa, hecho a mano, hecho con amor, con ingredientes naturales altamente hidratantes, humectantes, nutritivos, reparadores y terapeuticos que sean amigables con el medio ambiente. Utilizamos aceites vegetales prensados en frio, extractos de plantas, macerados, fragancias de aceites esenciales y aditivos como cafe, cacao, avena, pulpas de fruta, semillas secas y leches vegetales de procedencia organica, entre otros. Estamos comprometidos con el bienestar y la salud de la piel, entregando productos naturales de alta calidad y que brindan salud y belleza',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${fonts.lato.variable} ${fonts.absolutely_vintage.variable}`}
      lang="en"
    >
      <body>
        <Header />
        {children}
        <footer>FOOTER</footer>
      </body>
    </html>
  );
}
