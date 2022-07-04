import EventBus, { EventBusName } from "../common/event-bus";
import asyncStorageHelpers, {
  StorageKey,
} from "../common/helpers/async-storage-helpers";
import { SUCCESS } from "../common/networking/status";
import RootServices from "./root.services";

export const RootAdapter = () => {
  // update device mobile
  const updateDevice = async (data: any) => {
    return await RootServices.getInstance().updateDevice(data);
  };

  // get token by code
  const getTokenByCode = async (code: string) => {
    console.log("-----code-----", code);
    const response = await RootServices.getInstance().getTokenByCode(code);
    if (response && response.status === SUCCESS) {
      let accessToken = response.data.access_token;
      asyncStorageHelpers.save(StorageKey.ACCESS_TOKEN, accessToken);
      asyncStorageHelpers.save(
        StorageKey.REFRESH_TOKEN,
        response.data.refresh_token
      );
      getProfile();
      //   redirectApp();
      EventBus.getInstance().post({
        type: EventBusName.REDIRECT_APP,
      });
      //   window.location.pathname = "/dashboard";
      return;
    }
  };

  // logout
  const logoutByToken = async () => {
    const response = await RootServices.getInstance().logoutByToken();
    asyncStorageHelpers.remove(StorageKey.ACCESS_TOKEN);
    asyncStorageHelpers.remove(StorageKey.REFRESH_TOKEN);
    if (response && response.status === SUCCESS) {
      EventBus.getInstance().post({
        type: EventBusName.LOGOUT_APP,
      });

      //   window.location.pathname = "/dashboard";
      return;
    }
  };

  // get profile from token
  const getProfile = async () => {
    const response = await RootServices.getInstance().getProfile();
    console.log("GET USER PROFILE :", response.data);
    if (response && response.status === SUCCESS) {
      asyncStorageHelpers.save(
        StorageKey.USER_INFO,
        JSON.stringify(response.data)
      );
      EventBus.getInstance().post({
        type: EventBusName.GET_USER_INFO_SUCCESS,
        payload: response.data
      });
    }
  };

  return {
    updateDevice,
    getTokenByCode,
    logoutByToken,
  };
};
