export interface ListMachineItemProps {
  id: string;
  name: string;
  turnover: number;
  error: boolean;
  outOfStock: boolean;
  fullCash: boolean;
  process?: number;
  onPress?: any;
}
