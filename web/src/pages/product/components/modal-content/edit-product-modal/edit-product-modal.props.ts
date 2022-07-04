import { IProduct } from "libraries/types/product";

export interface EditProductModalProps {
  closeModal: any;
  listProduct: IProduct[];
  index: number;
}
