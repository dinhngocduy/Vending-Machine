import React from "react";
import "./list-machine.scss";

import { NavLink } from "react-router-dom";
import ListMachineItem from "./list-machine-item/ListMachineItem";
import { ListMachineProps } from "./list-machine.props";
import { ListMachineAdapter } from "./list-machine.adapter";
import LoadingSpinnerScreen from "libraries/components/loading-spinner/loading-spinner.screen";
import EventBus, { EventBusName } from "vending-core/common/event-bus";

function ListMachine(props: ListMachineProps) {
  const { listMachine, loading } = ListMachineAdapter();

  return (
    <>
      <div className="listview">
        {loading ? (
          <div className="loading-ctn">
            <LoadingSpinnerScreen className="big" />
          </div>
        ) : (
          <ul>
            {listMachine.map((element, index) => {
              return (
                <NavLink
                  to={{
                    pathname: "/machine/" + element?.machine?.id,
                    state: element,
                  }}
                  activeClassName="active"
                  // onClick={() => props.onClickItem(element)}
                  onClick={() => {
                    console.log("POST EVENT: SELECT MACHINE -", element);
                    
                    EventBus.getInstance().post({
                      type: EventBusName.SELECT_MACHINE_IN_LIST,
                      payload: element,
                    });
                  }}
                >
                  <ListMachineItem item={element} />
                </NavLink>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}

export default ListMachine;
