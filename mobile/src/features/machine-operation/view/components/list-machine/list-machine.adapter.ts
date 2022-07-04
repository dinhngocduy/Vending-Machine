import { IMachine } from 'enum/machine';
import { useState, useEffect } from 'react';
import { MachineAdapter } from '../../../../../../../vending-core/model-machine/machine.adapter';
export const ListMachineAdapter = () => {
  const [listMachine, setListMachine] = useState<IMachine[]>();
  const [loading, setLoading] = useState<boolean>(true)
  const { getListMachine } = MachineAdapter();

  useEffect(()=>{
      getListMachineData()
  },[])

  // get list machine
  const getListMachineData = () => {
    const data = {
      page: 0,
      size: 100,
    };

    getListMachine(data)
      .then((res) => {
        if (res) {
           console.log("List Machine Data : ", res);
          setListMachine(res.data);
          setLoading(false)
        }
      })
      .catch((err: any) => {
          console.log("Get List Machine Data Err : ", err);
          setLoading(false)
      });
  };

  const refreshData = () => {
    setLoading(true)
    getListMachineData()
  }

  return {
      listMachine,
      loading,
      refreshData
  };
};
