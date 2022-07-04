import { useState } from "react";
import Switch from "react-switch";
import { SwitchComponentProps } from "./switch-component.props";
import "./switch-component.scss";

export const SwitchComponent = (props: SwitchComponentProps) => {
  const { title, value, setValue } = props;
  const [check, setCheck] = useState<boolean>(false);

  return (
    <div className="switch-component-ctn">
      <p className="switch-component-label">{title}</p>
      <Switch
        checked={value}
        onChange={setValue}
        height={24}
        width={40}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor="#33CC5E"
      />
      <p
        className="switch-component-value"
        style={{ color: value ? "#33CC5E" : "#FF4D54" }}
      >
        {value ? "Hoạt động" : "Không hoạt động"}
      </p>
    </div>
  );
};
