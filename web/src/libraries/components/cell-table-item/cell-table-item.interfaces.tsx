export interface ICellTableItem {
  content: any;
  child?: any;
  hasListOptions: boolean;
  isTh?: boolean;
  className?: string;
  canEdit?: boolean;
  getListOptions?: any;
  listOptions?: any;
  changeContent?: any;
  hasEditedByPm: boolean;
  contentIsCurrency?: boolean;
  isError: boolean;
  isGetting?: boolean;
  style?:any
}
