import { CalendarIcon } from "libraries/icons/icon";
import { DatePickerProps } from "./date-picker.props";
import "./date-picker.scss";

export const DatePicker = (props: DatePickerProps) => {
  const { onChange, listData } = props;

  return (
    <div className="date-picker-ctn">
      <div className="combobox__value">
        <select
          className="value-option"
          onChange={(value) => {
            onChange(value.target.value);
          }}
        >
          {listData?.map((element: string) => {
            return <option value={element}> {element}</option>;
          })}
        </select>
      </div>
      <CalendarIcon />
    </div>
  );
};
