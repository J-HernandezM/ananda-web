export default function formatPrice(price, cop = true, locale = 'es-CO') {
  const priceFormatted = new Intl.NumberFormat(locale).format(price);
  let priceString;
  cop ? (priceString = `${priceFormatted} COP`) : (priceString = priceFormatted);

  return priceString;
}
