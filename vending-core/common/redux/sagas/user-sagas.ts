import { call, put } from "redux-saga/effects";
import { StorageKey } from "../../helpers/async-storage-helpers";
import { HyperUtils } from "../../hyper-utils";
import { SUCCESS, CREATED } from "../../networking/status";

export function* loginMobileSaga(action: any) {
  // const params: LoginMobileResponse = action?.data;
  // if (params) {
  //   showLoading();
  //   console.log("test_loginMobile: ", params);
  //   // const res = yield call(LoginOldServices.getInstance().loginMobile, params);
  //   // const res = yield call(LoginOldServices.getInstance().sycnUserIHCM, params.user);
  //   // console.log('test_res: ', res);
  //   // if (res) {
  //   // yield put({ type: UPDATE_USER, payload: res.data });
  //   // const userInfo = res.data;
  //   // const deviceId = yield DeviceInfo.getDeviceId();
  //   // const form = {
  //   //   userId: userInfo && userInfo.user && userInfo.user.id,
  //   //   tokenLogin: userInfo.token,
  //   //   id: deviceId,
  //   // };
  //   //Update device info
  //   let tmpDevice = yield call(getDeviceInfo);
  //   const result = yield call(
  //     LoginOldServices.getInstance().updateDevices,
  //     tmpDevice
  //   );
  //   if (result) {
  //     // console.log(result, 'helo ....==================');
  //     // if (result) {
  //     // }
  //     // ApiService.post('devices/quickUpdate', form).then(async res => {
  //     //   await AsyncStorage.setItem('deviceInfo', JSON.stringify(res));
  //     // });
  //     const loginResponse: LoginMobileResponse = {
  //       // user: res?.data,
  //       user: params?.user,
  //       accessToken: params?.accessToken,
  //       refreshToken: params?.refreshToken,
  //     };
  //     // console.log('test_loginResponse_00:', res, ', status: ', res.status, ', data: ', res.data);
  //     // if (res?.status && res?.data) {
  //     //   switch (res?.status) {
  //     //     case SUCCESS:
  //     // AsyncStorageHelpers.save(StorageKey.USER_INFO, JSON.stringify(res.data));
  //     // AsyncStorageHelpers.save(StorageKey.USER_INFO, JSON.stringify(res.data));
  //     console.log("test_loginResponse_0:", loginResponse, ", res?.status");
  //     yield put({ type: UPDATE_USER, payload: loginResponse });
  //     //Save user info
  //     AsyncStorageHelpers.save(
  //       StorageKey.USER_INFO,
  //       JSON.stringify(loginResponse)
  //     );
  //     //Get device info
  //     let deviceInfo = yield call(getDeviceInfo);
  //     deviceInfo.userId = loginResponse?.user?.id || "";
  //     deviceInfo.token = loginResponse?.accessToken || "";
  //     if (HyperUtils.isNotEmpty(deviceInfo)) {
  //       yield call(LoginOldServices.getInstance().updateDevices, deviceInfo);
  //       hideLoading();
  //       NavigationService.reset(BottomTab);
  //     }
  //     //   break;
  //     // case CREATED:
  //     //   // const loginResponse: LoginMobileResponse = { user: res.data, token: params.token };
  //     //   console.log('test_loginResponse_1:', loginResponse);
  //     //   yield put({ type: UPDATE_USER, payload: loginResponse });
  //     //   //Save user info
  //     //   AsyncStorageHelpers.save(StorageKey.USER_INFO, JSON.stringify(loginResponse));
  //     //   NavigationService.reset(BottomTab);
  //     //   break;
  //     // }
  //   }
  // } else {
  //   return;
  // }
  // }
  // hideLoading();
  // }
}

// async function getDeviceInfo() {
//   const deviceInfo = (await AsyncStorageHelpers.get(
//     StorageKey.DEVICE_INFO
//   )) as string;
//   return JSON.parse(deviceInfo);
// }

function* loginMobile() {}
