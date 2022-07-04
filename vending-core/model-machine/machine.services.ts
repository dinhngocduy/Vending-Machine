import { URL_PATHS } from "../common/networking/url-paths";
import { fetch, post, put, deletes } from "../common/networking/api-helper";
import axios from "axios";
import { APP_CONFIGS } from "../common/app-config";

const MachineServices = (() => {
  let instance: any;

  function init() {
    return {
      getListMachine: (data) => {
        return fetch(URL_PATHS.MACHINE, data, true);
      },

      getMachineInfo: (id: string) => {
        return fetch(URL_PATHS.MACHINE + "/" + id, null, true);
      },

      postAddNewMachine: (data: any) => {
        return post(URL_PATHS.MACHINE, data, true);
      },

      getPrductMapMachine: (data: any) => {
        return fetch(URL_PATHS.PRODUCT_MAP, data, true);
      },

      addProductMap: (data: any) => {
        return post(URL_PATHS.PRODUCT_MAP, data, true);
      },

      updateProductMapItem: (data: any) => {
        return put(URL_PATHS.PRODUCT_MAP, data, true);
      },

      deleteProductMapItem: (id: string) => {
        return deletes(URL_PATHS.PRODUCT_MAP + "/" + id, null, true);
      },

      getListProduct: (data: any) => {
        return fetch(URL_PATHS.PRODUCT, data, true);
      },

      updateMachine: (data: any) => {
        return put(URL_PATHS.MACHINE, data, true);
      },

      getListMachineModel() {
        return fetch(URL_PATHS.MACHINE_MODEL, null, true);
      },

      postBannerMachine(data: any) {
        return post(URL_PATHS.BANNER, data, true);
      },

      getBannerByMachineId(id: string) {
        return fetch(URL_PATHS.GET_BANNER_BY_MACHINE_ID + "/" + id, null, true);
      },

      deleteBanner(id: string) {
        return deletes(URL_PATHS.BANNER + "/" + id, null, true);
      },

      getFileLog() {
        return fetch(URL_PATHS.GET_FILE_LOG, null, true);
      },
      // get last update
      getLastUpdate: () => {
        return fetch(URL_PATHS.SENSOR, null, true);
      },

      // upload image
      uploadImage: async (data: any) => {
        let headers = {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        };
        var response: any;
        try {
          response = await axios({
            method: "POST",
            url: APP_CONFIGS.URL_API + URL_PATHS.UPLOAD_FILE,
            headers: headers,
            data: data,
          });
          return response.data;
        } catch (error) {
          response = undefined;
        }
        return response;
      },
    };
  }

  return {
    getInstance: () => {
      if (!instance) instance = init();
      return instance;
    },
  };
})();

export default MachineServices;
