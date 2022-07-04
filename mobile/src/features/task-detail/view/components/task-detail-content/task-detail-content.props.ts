import { TypeTask } from 'features/vending-machine/enum/type-task';

export interface TaskDetailContentProps {
  task: {
    type: TypeTask;
    id: string;
    machineName: string;
    time: Date;
    location: string;
    staff: string;
    description: string;
  };
}
