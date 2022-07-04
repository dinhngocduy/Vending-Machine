import { URL_PATHS } from "../common/networking/url-paths";
import { post, fetch } from "../common/networking/api-helper";

const NotificationServices = (() => {
  let instance: any;

  function init() {
    return {
      getListNotification: (data: any) => {
        return fetch(URL_PATHS.NOTIFICATION, data, true);
      },
      readNotification: (data: any) => {
        return fetch(
          URL_PATHS.READ_NOTIFICATION +
            "?notificationId=" +
            data.notificationId,
          null,
          true
        );
      },
      countNotifi: () => {
        return fetch(URL_PATHS.COUNT_NOTIFICATION, null, true);
      },
      temperatureOverheat: () => {
        return fetch(URL_PATHS.TEMPERATURE_OVERHEAT, null, true);
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

export default NotificationServices;
