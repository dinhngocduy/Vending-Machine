/*
    Created by thaolt
*/

import HomeServices from "./home.services";

export function HomeAdapter() {
  // send hearthbeat
  const sendHearthBeat = async (data: any) => {
    const fake_data = {   
      temperature: 30,
    };
    return await HomeServices.getInstance().sendHearthBeat(fake_data);
  };

  // get count machine
  const getCountMachine = async () => {
    const res = await HomeServices.getInstance().getCountMachine();
    console.log("VENDING CORE - HOME - GET COUNT MACHINE : ", res);
    return res;
  };

  // get statistical product
  const getStatistialProduct = async (data: any) => {
    const res = await HomeServices.getInstance().getStatistialProduct(data);
    return res;
  };

  //get statistical payment

  const getStatistialPayment = async (data: any) => {
    const res = await HomeServices.getInstance().getStatistialPayment(data);
    return res;
  };

  return {
    sendHearthBeat,
    getCountMachine,
    getStatistialProduct,
    getStatistialPayment,
  };
}
