import React from "react";
import "./tabbar-selector.scss";

interface Props {
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

export const TabSelector = (props: Props) => {
  const { isActive, onClick, children } = props;

  return (
    <div
      className={`tabbar-item ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <p>{children}</p>
    </div>
  );
};
