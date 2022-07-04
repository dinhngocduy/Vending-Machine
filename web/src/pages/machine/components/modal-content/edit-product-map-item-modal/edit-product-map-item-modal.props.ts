import { IMachine, IProductMapItem } from "libraries/types/machine";

export interface EditProductMapItemProps {
  indexItem: number;
  closeModal: any;
  machine?: IMachine;
  listProductMapItem: IProductMapItem[];
}
