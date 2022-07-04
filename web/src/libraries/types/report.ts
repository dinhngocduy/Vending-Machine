import { IMachineModel } from "./machine";

export interface IReport {
  totalTransactionAmount: number;
  totalTransaction: number;
  totalCashTransactionAmount: number;
  totalMomoTransactionAmount: number;
  totalAtmTransactionAmount: number;
}

export interface IMachineReport {
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
  };
  cashOrderAmount: number;
  atmOrderAmount: number;
  momoOrderAmount: number;
  orderAmount: number;
  totalTransactions: number;
  totalQuantity: number;
  totalCapacity: number;
}
