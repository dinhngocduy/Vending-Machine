import { TypeTask } from 'features/vending-machine/enum/type-task';

export interface ListTaskItemProps {
  type: TypeTask;
  id: string;
  machineName: string;
  time: Date;
  location: string;
  onPress: any;
}
