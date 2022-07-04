export interface INotifcation {
  id: string;
  title: string;
  description: string;
  type: string;
  read: boolean;
  createdDate: Date;
}

export enum NOTICATION_TYPE {
  //
  OPEN_MACHINE = 'I_001',

  //
  ALERT_TEMPERATURE = 'A_003',
  ALERT_SOLD_OUT = 'A_002',
  ALERT_FULL_CASH = 'A_001',

  //
  WARNING_CASH = 'W_001',
  WARNING_MOTOR = 'W_002',
  WARNING_LIFTING = 'W_003',
  WARNING_CHILLER = 'W_004',
  WARNING_HIGH_TEMPERATURE = 'W_005',
}
