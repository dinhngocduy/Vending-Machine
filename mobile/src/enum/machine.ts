import { IProduct } from './product';

export interface IMachine {
  machine: {
    id: string;
    modelId: string;
    referenceName: string;
    serialNumber: string;
    description: string;
    amountInMachine: number;
    contingencyRowIndex: number;
    type: number;
    active: boolean;
    numberOfCash: number;
    province: string;
    district: string;
    village: string;
    address: string;
    modelInfo: IMachineModel;
    identifyCode: string;
  };
  remainProducts: number;
  totalProducts: number;
  totalTransactions: number;
  cashInMachine: number;
  temperature: number
  // cashOrderAmount: number;
  // atmOrderAmount: number;
  // momoOrderAmount: number;
  // orderAmount: number;
  // totalTransactions: number;
  // totalQuantity: number;
  // totalCapacity: number;
}

export interface IMachineModel {
  id: string;
  code: string;
  name: string;
  active: boolean;
  description: string;
  numberOfRow: number;
  numberOfColumn: number;
  hexInfo: IProductMapItem[];
}

export interface IProductMapItem {
  id: string;
  slotNo: number;
  hexCode: string;
  capacity: number;
  slotCode: string;
  verticalIndex: number;
  horizontalIndex: number;
  remain: number;
  price: number;
  product: IProduct;
}

export interface ICountMachine {
  online: number;
  offline: number;
  total: number;
}
