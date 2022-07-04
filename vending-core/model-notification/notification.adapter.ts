import NotificationServices from "./notification.services";

export const NotificationAdapter = () => {
  const getListNotification = async (data: any) => {
    return await NotificationServices.getInstance().getListNotification(data);
  };

  const readNotification = async (data: any) => {
    console.log("NOTIFICATION ADAPTER: ", data);
    return await NotificationServices.getInstance().readNotification(data);
  };

  const countNotification = async () => {
      return await NotificationServices.getInstance().countNotifi()
  }

  const temperatureOverheat = async () => {
      return await NotificationServices.getInstance().temperatureOverheat()
  }

  return { getListNotification, readNotification, countNotification, temperatureOverheat };
};
