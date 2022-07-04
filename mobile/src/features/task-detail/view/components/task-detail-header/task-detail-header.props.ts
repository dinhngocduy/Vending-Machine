import { TypeTask } from 'enum/type-task';

export interface TaskDetailHeaderProps {
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
