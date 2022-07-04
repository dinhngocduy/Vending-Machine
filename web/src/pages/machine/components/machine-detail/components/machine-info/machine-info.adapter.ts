import { MachineAdapter } from "vending-core/model-machine/machine.adapter";
import { useEffect, useState } from "react";

export const MachineInfoAdpater = () => {
  const { getLastUpdate } = MachineAdapter();

  const [lastTimeUpdate, setLastTimeUpdate] = useState<number>();

  useEffect(() => {
    getTimeLastUpdate();
  }, []);

  const getTimeLastUpdate = async () => {
    const time = await getLastUpdate();
    console.log("Time :", time);
    if(time){
        setLastTimeUpdate(time)
    }
  }

  return{
      lastTimeUpdate
  }
};
