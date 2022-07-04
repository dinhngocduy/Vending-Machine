import { MachineOffIcon, MachineOnIcon } from "libraries/icons/icon";
import { IMachine } from "libraries/types/machine";
import React from "react";
import "./listview-item.scss";

interface PropsLisViewItem {
  item: IMachine;
}

function ListMachineItem(props: PropsLisViewItem) {
  const { item } = props;
  return (
    <>
      <div className="listview-item noselect">
        <div className="listview-item-icon">
          {item?.machine?.active ? <MachineOnIcon /> : <MachineOffIcon />}
        </div>
        <p>{item?.machine?.referenceName}</p>
      </div>
    </>
  );
}

export default ListMachineItem;
