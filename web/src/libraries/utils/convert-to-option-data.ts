import { IOption } from "libraries/types/type";

export const ConvertToOptionData = (data: string[]) => {
  var listoption: IOption[] = [];

  data.forEach((elment) => {
    listoption.push({
      value: elment,
      label: elment,
    });
  });

  return listoption;
};
