import { IMachine } from "libraries/types/machine";
import { useEffect, useState } from "react";
import { Subscription } from "rxjs";
import EventBus, {
  EventBusType,
  EventBusName,
} from "vending-core/common/event-bus";
import { MachineAdapter } from "vending-core/model-machine/machine.adapter";

export const ListMachineAdapter = () => {
  const subscriptions = new Subscription();
  const { getListMachine } = MachineAdapter();

  //state
  const [listMachine, setListMachine] = useState<IMachine[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getListMachineData();
    EventBusSubCription();
  }, []);

  useEffect(() => {
    return () => {
      subscriptions.unsubscribe();
    };
  }, []);

  // Eventbus Subcription
  const EventBusSubCription = () => {
    subscriptions.add(
      EventBus.getInstance().events.subscribe((res: EventBusType) => {
        const payload = res?.payload;
        switch (res?.type) {
          case EventBusName.CREATE_MACHINE:
            console.log("CREATE MACHINE EVENT BUS");
            getListMachineData();
            break;
          case EventBusName.UPDATE_MACHINE:
            onUpdateMachine(payload);
            break;
        }
      })
    );
  };

  // get list machine
  const getListMachineData = () => {
    setLoading(true);

    const data = {
      page: 0,
      size: 100,
    };

    getListMachine(data)
      .then((res) => {
        if (res) {
          setListMachine(res.data);
          setLoading(false);
        }
      })
      .catch((err: any) => {
        setLoading(false);
      });
  };

  // update machine
  const onUpdateMachine = (payload: IMachine) => {
    setListMachine((prev: IMachine[]) => {
      return prev.map((element) => {
        if (element?.machine?.id === payload?.machine?.id) {
          return payload;
        } else {
          return element;
        }
      });
    });
  };

  return {
    listMachine,
    loading,
  };
};
