import { URL_PATHS } from "../common/networking/url-paths";
import { fetch, post, put, deletes } from "../common/networking/api-helper";

const AdminServices = (() => {
  let instance: any;

  function init() {
    return {
      getListMachineModel: (data) => {
        return fetch(URL_PATHS.MACHINE_MODEL, data, true);
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

export default AdminServices;
