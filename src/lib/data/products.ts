import { sanitizeApiResponse } from '@/shared/utils/sanitizeApiResponse';

const requestOptions = {
  method: 'GET',
  headers: {
    Authorization: process.env.NEXT_PUBLIC_API_KEY || '',
  },
};
let url;

export async function fetchProducts() {
  try {
    url = `${process.env.NEXT_PUBLIC_URL_API}/products?populate=*`;
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    return sanitizeApiResponse(data);
  } catch (error) {
    console.error(error);
  }
}

export async function fetchSingleProduct(id: number) {
  try {
    url = `${process.env.NEXT_PUBLIC_URL_API}/products/${id}?populate=*`;
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    return sanitizeApiResponse(data);
  } catch (error) {
    console.error(error);
  }
}
