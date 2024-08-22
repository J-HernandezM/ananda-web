type ProductImage = {
  alternativeText: string;
  name: string;
  url: string;
};

type PriceDetail = {
  quantity: number;
  value: number;
};

export type Product = {
  id: string;
  title: string;
  description: string;
  images: ProductImage[];
  featuredImage: ProductImage;
  priceDetails: PriceDetail[];
};
