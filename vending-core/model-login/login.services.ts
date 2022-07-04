/* 
    Created by thaolt
*/

import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { APP_CONFIGS } from "../common/app-config";
import asyncStorageHelpers, {
  StorageKey,
} from "../common/helpers/async-storage-helpers";

const LoginServices = (() => {
  let instance: any;

  function init() {
    return {
      auth: async (data: any) => {
        let params = new URLSearchParams();
        params.append("username", data.username);
        params.append("password", data.password);
        params.append("client_id", data.client_id);
        params.append("grant_type", data.grant_type);

        try {
          const response = await axios({
            method: "POST",

            url: APP_CONFIGS.GET_TOKEN_SERVER,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            data: params,
            timeout: 30000,
          });
          console.log("test_response: ", response.data);
          return response.data;
        } catch (error) {
          console.log("test_err: ", error);
          console.log(APP_CONFIGS.GET_TOKEN_SERVER, "---", params);
          return null;
        }
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

export default LoginServices;
