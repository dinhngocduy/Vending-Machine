import { RootAdapter } from './../../../../../vending-core/model-root/root.adapter';
import { HyperUtils } from './../../../../../vending-core/common/hyper-utils';
import { useEffect } from 'react';
import asyncStorageHelpers, {
  StorageKey,
} from '../../../../../vending-core/common/helpers/async-storage-helpers';
import { RootComponentProps } from './root-component.props';
import messaging from '@react-native-firebase/messaging';
import DeviceInfo from 'react-native-device-info';
import { Platform, ToastAndroid } from 'react-native';
import * as screename from '.././../../routers/screen-name';
import navigationService from 'routers/navigation-service';
import { Subscription } from 'rxjs';
import EventBus, { EventBusType, EventBusName } from '../../../../../vending-core/common/event-bus';

function RootComponentAdapter(props: RootComponentProps) {
  const { updateDevice } = RootAdapter();

  const subscriptions = new Subscription();

  useEffect(() => {
    EventBusSubCription();
  }, []);

  useEffect(() => {
    return () => {
      subscriptions.unsubscribe();
    };
  }, []);

  // Eventbus Subcription 
  const EventBusSubCription = () => {
    subscriptions.add(
      EventBus.getInstance().events.subscribe((res: EventBusType) => {
        console.log('CATCH EVENT BUS APP : May bang hang {MAC_001}', res);

        const payload = res?.payload;
        switch (res?.type) {
          case EventBusName.GET_USER_INFO_SUCCESS:
            console.log('ROOT : USER INFO :', payload);
            subscribeTopicToGetNotification(payload.userId);
            break;

          // const userInfo = JSON.parse( );
        }
      })
    );
  };

  useEffect(() => {
    getDevice();

    return () => {
      unsubscribeDeviceTopic();
    };
  }, []);

  const getDevice = async () => {
    // const device = await getDeviceInfo();
    checkPermission();
    checkLogin();
  };

  const getUserInfo = async () => {
    const data: string = (await asyncStorageHelpers.get(StorageKey.USER_INFO)) as string;
    const setting: any = JSON.parse(data);
    return setting;
  };

  const checkLogin = async () => {
    // const userInfo: LoginMobileResponse = await this.getUserInfo();
    // showLog('test_root_component: ' + userInfo);
    // if (userInfo?.accessToken) {
    //   //Update userInfo
    //   this.RootComponent.props.saveUserInfoAction(userInfo);
    const access_token = await asyncStorageHelpers.get(StorageKey.ACCESS_TOKEN);
    const refresh_token = await asyncStorageHelpers.get(StorageKey.REFRESH_TOKEN);
    if (access_token && refresh_token) {
      navigationService.reset(screename.BottomTab);
    }
  };

  const checkPermission = async () => {
    console.log('test_checkPermission_0');
    const enabled = await messaging().hasPermission();
    console.log('test_checkPermission:' + enabled);
    if (enabled) {
      getFcmToken();
    } else {
      requestUserPermission();
    }

    const userInfo = await getUserInfo()
    subscribeTopicToGetNotification(userInfo.userId)
  };

  const requestUserPermission = async () => {
    try {
      await messaging().requestPermission();
      // User has authorised
      getFcmToken();
    } catch (error) {
      // User has rejected permissions
      console.log('test_requestUserPermission' + error);
    }
  };

  const getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    let deviceInfo: any = null;
    if (fcmToken) {
      deviceInfo = await asyncStorageHelpers.get(StorageKey.DEVICE_INFO);
      console.log('test_deviceInfo: ' + deviceInfo + '__fcmToken: ' + fcmToken);
      // showLog(deviceInfo);
      if (HyperUtils.isEmpty(deviceInfo)) {
        deviceInfo = {
          userId: '',
          brand: await DeviceInfo.getBrand(),
          name: await DeviceInfo.getDeviceName(),
          version: await DeviceInfo.getVersion(),
          manufacturer: await DeviceInfo.getManufacturer(),
          model: await DeviceInfo.getModel(),
          osName: await DeviceInfo.getSystemName(),
          osVersion: await DeviceInfo.getSystemVersion(),
          status: '1',
          token: '',
          fcmToken: fcmToken,
          sessionCode: 'sessionCode',
        };
        asyncStorageHelpers.save(StorageKey.DEVICE_INFO, JSON.stringify(deviceInfo));
      } else {
        deviceInfo = JSON.parse(deviceInfo);
      }
      deviceInfo && updateDeviceMobile(deviceInfo);
    } else {
      console.log('test_getFcmToken: No token received');
    }
  };

  const subscribeTopicToGetNotification = (topic: string) => {
    /**
     * based on Topic, FCM server to send targeted
     * messages to only those devices subscribed to that topic
     */
    // const TOPIC = 'SMART-VENDING-MACHINE';
    const TOPIC = topic;
    messaging()
      .subscribeToTopic(TOPIC)
      .then(() => {
        console.log(`Topic: ${TOPIC} Suscribed`);
      });
  };

  const unsubscribeDeviceTopic = messaging().onMessage(async (remoteMessage) => {
    // showToast('New notification arrived' + JSON.stringify(remoteMessage));
  });

  const showToast = (message: any) => {
    if (Platform.OS == 'ios') {
      alert(message);
    } else {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    }
  };

  const updateDeviceMobile = async (device: any) => {
    //Update device user

    const res = await updateDevice({
      fcmToken: device.fcmToken,
      accountId: '123',
    });
    console.log('UPDATE DEVICE : ', res.data);
  };

  const getDeviceInfo = async () => {
    const deviceInfo = (await asyncStorageHelpers.get(StorageKey.DEVICE_INFO)) as string;
    return JSON.parse(deviceInfo);
  };

  return {};
}

export default RootComponentAdapter;
