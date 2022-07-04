import MachineServices from "./machine.services";

export function MachineAdapter() {
  // get list machine
  const getListMachine = async (data: any) => {
    const listData = await MachineServices.getInstance().getListMachine(data);
    console.log("List Machine Response : ", listData);
    return listData;
  };

  // get machine info by machinme id 

  const getMachineInfo = async (id : string) => {
    const res =  await MachineServices.getInstance().getMachineInfo(id)
    console.log("Get Machine info by id: ", res);
    return res
    
  }
 
  // post create new Machine
  const createMachine = async (data: any) => {
    const res = await MachineServices.getInstance().postAddNewMachine(data);
    return res;
  };

  // update info machine
  const updateMachine = async (data: any) => {
    const res = await MachineServices.getInstance().updateMachine(data);
    return res;
  };

  // get product mapping by machineId
  const getProductMapMachine = async (data: any) => {
    const listData = await MachineServices.getInstance().getPrductMapMachine(
      data
    );
    console.log("Product Map Machine Response : ", listData);
    return listData;
  };

  // update item product map in machine
  const updateProductMapItem = async (data: any) => {
    const res = await MachineServices.getInstance().updateProductMapItem(data);

    return res;
  };

  // delete item product map n=in machine
  const deleteProductMapItem = async (id: string) => {
    const res = await MachineServices.getInstance().deleteProductMapItem(id);
    return res;
  };

  // post add item to productmap
  const addProductMap = async (data: any) => {
    const res = await MachineServices.getInstance().addProductMap(data);
    console.log("Add Item To Product Map Machine Response : ", res);
    return res;
  };

  //get list product
  const getListProduct = async (data: any) => {
    const res = await MachineServices.getInstance().getListProduct(data);
    return res;
  };

  //get list machine model
  const getListMachineModel = async () => {
    const res = await MachineServices.getInstance().getListMachineModel();
    console.log("LIST MACHINE : ", res);
    return res;
  };

  // post banner
  const postBannerMachine = async (data: any) => {
    if (data.mainImageFile) {
      const FormData = require("form-data");
      const formData = new FormData();
      formData.append("file", data.mainImageFile);
      const response = await MachineServices.getInstance().uploadImage(
        formData
      );

      const param = {
        name: response[0]?.filename,
        imageDetails: response[0]?.filename,
        machineId: data.machineId,
      };

      return await MachineServices.getInstance().postBannerMachine(param);
    }
    return;
  };

  // get machine banner by machine id
  const getMachineBannerByMachineId = async (id: string) => {
    return await MachineServices.getInstance().getBannerByMachineId(id);
  };

  // delete machine banner
  const deleteMachineBanner = async (id: string) => {
    return await MachineServices.getInstance().deleteBanner(id);
  };

  // get list file log 
  const getListFileLog = async () => {
    return await MachineServices.getInstance().getFileLog();
  }

  // get last update
  const getLastUpdate = async () => {
    return await MachineServices.getInstance().getLastUpdate();
  }

  return {
    getListMachine,
    getProductMapMachine,
    addProductMap,
    getListProduct,
    getListMachineModel,
    createMachine,
    updateMachine,
    updateProductMapItem,
    deleteProductMapItem,
    postBannerMachine,
    getMachineBannerByMachineId,
    deleteMachineBanner,
    getListFileLog,
    getLastUpdate,
    getMachineInfo
  };
}
