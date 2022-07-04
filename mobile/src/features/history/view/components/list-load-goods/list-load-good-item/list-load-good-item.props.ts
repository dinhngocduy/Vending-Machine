export interface ListLoadGoodItemProps {
  item: {
    time?: Date;
    id: string;
    machine: string;
    staff: string;
    location?: string;
    money?: number;
    start_time?: Date;
    ennd_time?: Date;
  };
  onPress: any;
}
