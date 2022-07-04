export interface IMachine {
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
  identifyCode: string
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
  slotNo: number;
  hexCode: string;
  capacity: number;
  slotCode: string;
  verticalIndex: number;
  horizontalIndex: number;
}
