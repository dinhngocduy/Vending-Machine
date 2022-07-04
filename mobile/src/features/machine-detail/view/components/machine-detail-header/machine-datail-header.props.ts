export interface MachineDetailHeaderProps {
  id: string;
  name: string;
  turnover: number;
  error: boolean;
  outOfStock: boolean;
  fullCash: boolean;
  location: string;
  process?: number;
  onPress?: any;
  remainProduct?:number,
  totalProduct?:number
}
