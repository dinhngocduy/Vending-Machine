import { IOption } from "libraries/types/type";

export interface ModalInputProps {
  label: string;
  placeholder: string;
  isRequired: boolean;
  isOption?: boolean;
  isTextArea?: boolean;
  listoption?: IOption[];
  isMutilOption?: boolean;
  defaultValue?: any;
  onChangeValue?: any;
  disableTextInput?: boolean;
  disableValue?: any;
  value?: any;
}
