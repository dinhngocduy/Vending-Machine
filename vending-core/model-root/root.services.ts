import { APP_CONFIGS } from "../common/app-config";
import { URL_PATHS } from "../common/networking/url-paths";
import { post } from "../common/networking/api-helper";
import axios from "axios";
import asyncStorageHelpers, {
  StorageKey,
} from "../common/helpers/async-storage-helpers";

const RootServices = (() => {
  let instance: any;

  function init() {
    return {
      updateDevice: (data: any) => {
        return post("http://172.20.50.82:9095/device", data, true, true);
      },

      getTokenByCode: async (code: string) => {
        console.log("getTokenByCode");
        let data = new URLSearchParams();
        data.append("code", code);
        console.log("code: ", code);
        data.append("client_id", "web");
        data.append("grant_type", "authorization_code");
        data.append("redirect_uri", APP_CONFIGS.DOMAIN_APP);

        console.log("test_get_token: ", data.toString());

        const url =
          APP_CONFIGS.SSO_URL + APP_CONFIGS.GET_TOKEN_URL_SUFFIX + "token";
        try {
          const response = await axios({
            method: "POST",
            url: url,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            data: data,
            timeout: 30000,
          });

          console.log("response app.services.ts: get token by code: ", response);

          return response;
        } catch (error) {
          console.log(error);
        }
      },

      logoutByToken: async () => {
        console.log("Logout by Token");
        let data = new URLSearchParams();

        const access_token = await asyncStorageHelpers.get(
          StorageKey.ACCESS_TOKEN
        );
        const refresh_token = await asyncStorageHelpers.get(
          StorageKey.REFRESH_TOKEN
        );

        data.append("client_id", "web");
        data.append("refresh_token", refresh_token);
        data.append("redirect_uri", APP_CONFIGS.DOMAIN_APP);
        console.log("test_get_token: ", data.toString());

        const url =
          APP_CONFIGS.SSO_URL + APP_CONFIGS.GET_TOKEN_URL_SUFFIX + "logout";
        try {
          const response = await axios({
            method: "POST",
            url: url,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "Bearer " + access_token,
            },
            data: data,
            timeout: 30000,
          });

          console.log("response app.services.ts:  ", response);

          return response;
        } catch (error) {
          console.log(error);
        }
      },

      getProfile: async () => {
        console.log("Get User Profile ");
        const access_token = await asyncStorageHelpers.get(
          StorageKey.ACCESS_TOKEN
        );
        let data = new URLSearchParams();
        console.log("test_get_token: ", data.toString());

        const url =
          APP_CONFIGS.SSO_URL + APP_CONFIGS.GET_TOKEN_URL_SUFFIX + "userinfo";
        try {
          const response = await axios({
            method: "POST",
            url: url,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "Bearer " + access_token,
            },
            data: data,
            timeout: 30000,
          });

          console.log("response app.services.ts : get profile: ", response);

          return response;
        } catch (error) {
          console.log(error);
        }
      }
    };
  }

  return {
    getInstance: () => {
      if (!instance) instance = init();
      return instance;
    },
  };
})();

export default RootServices;
