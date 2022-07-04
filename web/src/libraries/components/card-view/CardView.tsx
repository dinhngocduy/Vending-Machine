import React from "react";
import "./cardview.scss";

import Circle from "./Circle";

interface CardViewProps {
  children: JSX.Element;
  startCorlor: string;
  endColor: string;
}

function CardView(props: CardViewProps) {
  return (
    <div
      className="card"
      style={{
        background: `linear-gradient(to right, ${props.endColor}, ${props.startCorlor})`,
      }}
    >
      {/* <Circle /> */}
      {props.children}
    </div>
  );
}

export default CardView;
