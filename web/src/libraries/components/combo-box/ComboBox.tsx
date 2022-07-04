import { ArrowIcon } from "libraries/icons/icon";
import { useEffect } from "react";
import "./combobox.scss";

interface PropsCombobox {
  label: String;
  listOption: string[];
  onChange?: any;
}

const ComboBox = (props: PropsCombobox) => {
  // useEffect(() => {
  //   props.onChange(props.listOption[0]);
  // }, []);

  return (
    <div className="combobox">
      <div className="combobox-info">
        <div className="combobox__label">
          <p>{props.label}</p>
        </div>
        <div className="combobox__value">
          <select
            className="value-option"
            onChange={(event) => {
              props.onChange(event.target.value);
            }}
          >
            {props.listOption?.map((element: string) => {
              return <option value={element}> {element}</option>;
            })}
          </select>
        </div>
      </div>
      {/* <i className="combobox__icon">
        <ArrowIcon />
      </i> */}
    </div>
  );
};

export default ComboBox;
