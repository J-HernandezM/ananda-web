// Strapi server is no longer active (discontinued paid service).
// Product data now comes from this static mock to keep the page visually functional.
// If Strapi is reinstated, remove this file and switch back to fetchProducts/fetchSingleProduct.
import { mockedStrapiResponse } from './mockedStrapiResponse';
import { sanitizeApiResponse } from './sanitizeApiResponse';

const defaultExtras = {
  ingredients:
    'Nuestra fórmula magistral combina ingredientes naturales cuidadosamente seleccionados para brindar los mejores resultados.',
  usage:
    'Aplicar sobre la piel limpia y seca. Masajear suavemente hasta su completa absorción. Uso recomendado: diario.',
  totalWeight: 100,
  content: { amount: 100, unit: 'ml' },
};

export function getMockProducts() {
  return (sanitizeApiResponse(mockedStrapiResponse) || []).map(p => ({
    ...defaultExtras,
    ...p,
  }));
}

export function getMockProduct(id) {
  return getMockProducts().find(p => p.id === id);
}
