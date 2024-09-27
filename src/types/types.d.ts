type ProductImage = {
  alternativeText: string;
  name: string;
  url: string;
};

type PriceDetail = {
  quantity: number;
  value: number;
};

type ContentInfo = {
  amount: number;
  unit: 'gr' | 'ml';
};

export type Product = {
  id: number;
  title: string;
  description: string;
  images: ProductImage[];
  featuredImage: ProductImage;
  priceDetails: PriceDetail[];
  ingredients: string;
  usage: string;
  totalWeight: number;
  content: ContentInfo;
};
