import Image from 'next/image';
import calendulaImg from '@/assets/images/nosotros/about-calendula.webp';
import trigoImg from '@/assets/images/nosotros/about-trigo.webp';
import arcillaImg from '@/assets/svg/ingredient-arcilla.svg';
import romeroImg from '@/assets/svg/ingredient-romero.svg';
import avenaImg from '@/assets/svg/ingredient-avena.svg';
import calImg from '@/assets/svg/ingredient-calendula.svg';
import carbonImg from '@/assets/svg/ingredient-carbon.svg';
import lavandaImg from '@/assets/svg/ingredient-lavanda.svg';
import './styles/aboutMaterials.scss';

const materials = [
  {
    title: 'arcilla',
    img: arcillaImg.src,
  },
  {
    title: 'romero',
    img: romeroImg.src,
  },
  {
    title: 'avena',
    img: avenaImg.src,
  },
  {
    title: 'calendula',
    img: calImg.src,
  },
  {
    title: 'carbon',
    img: carbonImg.src,
  },
  {
    title: 'lavanda',
    img: lavandaImg.src,
  },
];

export default function AboutMaterials() {
  return (
    <article className="blog--materials" id="materiales">
      <div className="blog--content">
        <h3 className="blog--title blog--title-alt">Materiales</h3>
        <p className="blog--description blog--description-alt">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
          tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
          quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
          consequat.
        </p>
        <MaterialsList />
      </div>
      <Image
        className="blog--image-calendula"
        src={calendulaImg}
        alt="Flor de calendula"
        role="presentation"
      />
      <Image
        className="blog--image-trigo"
        src={trigoImg}
        alt="Espiga de trigo"
        role="presentation"
      />
    </article>
  );
}

function MaterialsList() {
  return (
    <ul className="materials--icons-box">
      {materials.map((material, index) => (
        <li key={index}>
          <Image
            alt={`Ingrediente ${material.title}`}
            src={material.img}
            className="material--icon"
            width={0}
            height={0}
          />
        </li>
      ))}
    </ul>
  );
}
