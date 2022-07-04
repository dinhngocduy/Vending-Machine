import { URL_PATHS } from "../common/networking/url-paths";
import { fetch, post, postForm, put } from "../common/networking/api-helper";

const ReportServices = (() => {
  let instance: any;

  function init() {
    return {
      getListMachine: (data: any) => {
        return fetch(URL_PATHS.REPORT, data, true);
      },

      getAllReport: () => {
        return fetch(URL_PATHS.OVERALL, null, true);
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

export default ReportServices;
