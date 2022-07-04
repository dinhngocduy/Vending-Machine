import { IOption } from "libraries/types/type";

export const ConvertLocationJsonToOptionData = (data: any[]) => {
  var listoption: IOption[] = [];

  data.forEach((elment) => {
    listoption.push({
      value: elment,
      label: elment.name_with_type,
    });
  });

  return listoption;
};
