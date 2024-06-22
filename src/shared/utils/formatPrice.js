export default function formatPrice(price, locale = 'es-CO') {
  const priceFormatted = new Intl.NumberFormat(locale).format(price);
  return `${priceFormatted} COP`;
}
