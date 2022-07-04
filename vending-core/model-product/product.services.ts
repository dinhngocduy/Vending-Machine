import { URL_PATHS } from "../common/networking/url-paths";
import { fetch, post, postForm, put } from "../common/networking/api-helper";
import axios from "axios";
import { APP_CONFIGS } from "../common/app-config";

const ProductServices = (() => {
  let instance: any;

  function init() {
    return {
      getListProduct: (data: any) => {
        return fetch(URL_PATHS.PRODUCT, data, true);
      },

      createProduct: (data: any) => {
        return post(URL_PATHS.PRODUCT, data, true);
      },

      updateProduct: (data: any) => {
        return put(URL_PATHS.PRODUCT, data, true);
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

export default ProductServices;
