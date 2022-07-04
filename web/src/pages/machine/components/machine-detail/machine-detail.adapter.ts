import { MachineAdapter } from "vending-core/model-machine/machine.adapter";
import { IMachine } from "libraries/types/machine";
import { useEffect, useState } from "react";
import { useTabs } from "react-headless-tabs";
import { useLocation } from "react-router-dom";
import { Subscription } from "rxjs";
import EventBus, {
  EventBusType,
  EventBusName,
} from "vending-core/common/event-bus";
import { MachineDetailProps } from "./machine-detail.props";

export const MachineDetailAdapter = (props: MachineDetailProps) => {
  const [machine, setMachine] = useState<IMachine>();
  const [loading, setLoading] = useState<boolean>(false);

  const { getMachineInfo } = MachineAdapter();

  const [selectedTab, setSelectedTab] = useTabs([
    "machineinfo",
    "productmapping",
    "advertisement",
    "log",
  ]);

  const subscriptions = new Subscription();

  useEffect(() => {
    EventBusSubCription();
  }, []);

  useEffect(() => {
    return () => {
      subscriptions.unsubscribe();
    };
  }, []);

  useEffect(() => {
    console.log("MACHINE DETAIL: ", machine);
    setSelectedTab("machineinfo");
  }, [machine]);

  useEffect(() => {
    console.log("Machine Location : ", window.location.pathname);
    setLoading(true);
    getMachineInfo(window.location.pathname.replace("/machine/", ""))
      .then((res) => {
        setMachine(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [window.location.pathname]);

  // Eventbus Subcription
  const EventBusSubCription = () => {
    subscriptions.add(
      EventBus.getInstance().events.subscribe((res: EventBusType) => {
        const payload = res?.payload;
        switch (res?.type) {
          case EventBusName.UPDATE_MACHINE:
            onUpdateMachine(payload);
            break;
          // case EventBusName.SELECT_MACHINE_IN_LIST:
          //   console.log('Catch Event select : ',payload);
          //   setMachine(payload);
          //   break;
        }
      })
    );
  };

  // on update Item
  const onUpdateMachine = (payload: any) => {
    console.log("ON UPDATE MACHINE : ", payload);
    setMachine(payload);
  };

  return {
    selectedTab,
    setSelectedTab,
    machine,
    loading
  };
};
