import React from "react";
import "./button.scss";

interface PropsButton {
  children: JSX.Element;
  background: string;
  textColor: string;
  borderColor: string;
  height?: Number;
  width?: Number;
  onClick?: any
  padding?: string
}

function Button(props: PropsButton) {
  return (
    <>
      <div
        onClick={props.onClick}
        className="machine-button"
        style={{
          background: props.background,
          color: props.textColor,
          borderColor: props.borderColor,
          padding: props.padding
        }}
      >
        {props.children}
      </div>
    </>
  );
}

export default Button;
