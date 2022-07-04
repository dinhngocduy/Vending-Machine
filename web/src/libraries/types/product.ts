export interface IProduct {
  id: string;
  name: string;
  code: string;
  description: string;
  standardPrice: number;
  type: number;
  active: boolean;
  imageDetail: string;
}

export interface IProductImage {
  mainImage: string;
  detailImages: string[];
}
