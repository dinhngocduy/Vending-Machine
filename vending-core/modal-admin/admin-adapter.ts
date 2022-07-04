import AdminServices from "./admin-services";

export const AdminAdapter = () => {
  //get list machine model
  const getListMachineModel = async (data: any) => {
    const res = await AdminServices.getInstance().getListMachineModel(data);
    console.log("LIST MACHINE : ", res);
    return res;
  };

  return {
    getListMachineModel,
  };
};
