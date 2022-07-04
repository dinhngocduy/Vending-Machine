/* eslint-disable no-undef */
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { APP_CONFIGS } from "../app-config";
import EventBus, { EventBusName } from "../event-bus";
import AsyncStorageHelpers, {
  StorageKey,
} from "../helpers/async-storage-helpers";
import { LoginMobileResponse } from "../types/login";
import Base64 from "./base64";
import { SUCCESS } from "./status";

const instance = axios.create({
  baseURL: APP_CONFIGS.URL_API,
  timeout: 20 * 1000,
});

instance.interceptors.request.use((_config) => requestHandler(_config));

const requestHandler = (request: AxiosRequestConfig) => {
  // if (__DEV__) {
  console.log(
    `Request API - ${request.method?.toUpperCase()}: ${request.baseURL}${
      request.url
    }`,
    request.params,
    request.data
  );
  // }

  return request;
};

instance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

/// -----
// const instance2 = axios.create({
//   baseURL: APP_CONFIGS.REACT_APP_POST_FILE,
//   // baseURL: url,
//   timeout: 20 * 1000,
// });

// instance2.interceptors.request.use((_config) => requestHandler(_config));

// instance2.interceptors.response.use(
//   (response) => successHandler(response),
//   (error) => errorHandler(error)
// );

////

const errorHandler = (error: any) => {
  // if (__DEV__) {
  // }
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject({ ...error });
};

const successHandler = (response: AxiosResponse) => {
  // if (__DEV__) {
  console.log(`Response API: ${response.config.url}`, response.data);
  // }
  return response.data;
};

async function fetch(
  url: string,
  params?: any,
  isAuth?: boolean,
  isRaw?: boolean
) {
  let headers = null;
  if (isAuth) {
    headers = await createHeader();
  }

  return !isRaw
    ? instance
        .get(url, { params, headers })
        .then((res) => {
          console.log("RESPONSE :", res.data);
          // checkToken(res);
          return res;
        })
        .catch((error) =>
          console.log("ERROR : ", url, " --- ", headers, " --- ", error)
        )
    : axios
        .create({
          // baseURL: `${env.REACT_APP_IP_ADDRESS_API}:${env.REACT_APP_IP_ADDRESS_PORT}`,
          timeout: 20 * 1000,
        })
        .get(url, { params, headers })
        .then((res) => {
          console.log("test_fetch_raw_success: ", res);
          return res;
        })
        .catch((error) => {
          console.log("test_fetch_raw_fail: ", error);
        });
}

async function post(
  url: string,
  data?: any,
  isAuth?: boolean,
  isRaw?: boolean
) {
  let headers: any = null;
  if (isAuth) {
    headers = await createHeader();
  }
  return !isRaw
    ? instance
        .post(url, { ...data }, { headers })
        .then((res) => checkToken(res))
        .catch((error) => console.log(error))
    : axios
        .create({
          baseURL: "",
          timeout: 20 * 1000,
        })
        .post(url, { data, headers })
        .then((res) => {
          console.log("test_post_raw_success: ", res);
          return res;
        })
        .catch((error) => {
          console.log("test_post_raw_fail: ", url, "__", data, "__", headers);
          console.log("test_post_raw_fail_1: ", error);
        });
}

async function postForm(
  url: string,
  data?: any,
  isAuth?: boolean,
  isRaw?: boolean
) {
  let headers: any = null;
  if (isAuth) {
    // headers = await createHeader();
    // headers["Content-Type"] = "multipart/form-data";
    headers = { "Content-Type": "multipart/form-data" };
  }
  return !isRaw
    ? instance
        .post(url, { ...data }, { headers })
        .then((res) => checkToken(res))
        .catch((error) => console.log(error))
    : axios
        .create({
          baseURL: "",
          timeout: 20 * 1000,
        })
        .post(url, { data, headers })
        .then((res) => {
          console.log("test_post_raw_success: ", res);
          return res;
        })
        .catch((error) => {
          console.log("test_post_raw_fail: ", url, "__", data, "__", headers);
          console.log("test_post_raw_fail_1: ", error);
        });
}

// async function postFile(url: string, data?: any, isAuth?: boolean) {
//   console.log(
//     'POST FILE :',
//     `${APP_CONFIGS.REACT_APP_POST_FILE}` + url,
//     '-------',
//     data,
//     '-----------'
//   );
//   const domain = (await asyncStorageHelpers.get(StorageKey.DOMAIN_COMPANY)) || '';
//   const tenant = domain.replace('.ihcm.vn', '');
//   const setting: any = await getUserInfo();
//   let headers = {
//     Accept: 'application/json',
//     'Content-Type': 'multipart/form-data',
//     Authorization: `Bearer ${setting ? setting.accessToken : ''}`,
//     // 'X-Tenant-ID': 'mobile',
//     'x-tenant-id': tenant,
//   };
//   // return axios
//   //   .create({
//   //     timeout: 20 * 1000,
//   //   })
//   //   .post(`${APP_CONFIGS.REACT_APP_POST_FILE}` + url, { data, headers })
//   //   .then((res) => console.log('POST FILE :', res))
//   //   .catch((error) => error);

//   return instance2
//     .post(url, data, { headers })
//     .then((res) => checkToken(res))
//     .catch((error) => error);
// }

//TEST
async function postTokenTest(url: string, body: any, isAuth?: boolean) {
  let headers = null;
  const data = {};

  if (isAuth) {
    headers = { Authorization: `Bearer ${body ? body.accessToken : ""}` };
  }
  return instance
    .post(url, { ...data }, { headers })
    .then((res) => checkToken(res))
    .catch((error) => error);
}

async function postTokenFormDataTest(url: string, body: any, isAuth?: boolean) {
  let headers = null;
  const data: any = new FormData();
  const frm: any = body.frm;
  Object.keys(frm).forEach((key) => {
    if (frm[key] instanceof Array) {
      frm[key].forEach((value: string) => {
        data.append(`${key}[]`, value);
      });
    } else {
      data.append(key, frm[key]);
    }
  });

  if (isAuth) {
    headers = { Authorization: `Bearer ${body ? body.token : ""}` };
  }

  return instance
    .post(url, { ...data }, { headers })
    .then((res) => checkToken(res))
    .catch((error) => error);
}

//TEST

async function deletes(url: string, data?: any, isAuth?: boolean) {
  let headers = null;
  if (isAuth) {
    headers = await createHeader();
  }

  return instance
    .delete(url, { data: { ...data }, headers: { ...headers } })
    .then((res) => checkToken(res))
    .catch((error) => error);
}
async function put(url: string, data?: any, isAuth?: boolean) {
  let headers = null;
  if (isAuth) {
    headers = await createHeader();
  }

  return instance
    .put(url, { ...data }, { headers })
    .then((res) => checkToken(res))
    .catch((error) => error);
}

// async function postFormData(url: string, body: any, isAuth: boolean = false) {
//   const data: any = new FormData();
//   Object.keys(body).forEach((key) => {
//     if (body[key] instanceof Array) {
//       body[key].forEach((value: string) => {
//         data.append(`${key}[]`, value);
//       });
//     } else {
//       data.append(key, body[key]);
//     }
//   });
//   let headers = null;
//   if (isAuth) {
//     headers = await createHeader();
//   }
//   return instance
//     .post(url, data, { headers })
//     .then((res) => checkToken(res))
//     .catch((error) => error);
// }
// async function postForm(url: string, data: any, isAuth?: boolean) {
//   let headers = null;
//   if (isAuth) {
//     headers = await createHeader();
//   }

//   return instance
//     .post(url, data, { headers })
//     .then((res) => checkToken(res))
//     .catch((error) => error);
// }

// TODO
// Get Token

async function createHeader(): Promise<object> {
  // const accessToken = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI2NUhubXljRGxBR0pQMGdZZnQ4VUc2WTdwNzJjeGp0S3BOclJnaUNTNi00In0.eyJleHAiOjE2NDY2ODM4ODMsImlhdCI6MTY0NjY4MzU4MywianRpIjoiOGFhZTk0YWEtZDViYi00NjcyLThhMmQtOTQxYTgzNDZmNWVhIiwiaXNzIjoiaHR0cDovLzE3Mi4yMi4zMC41MDo4MTgxL2F1dGgvcmVhbG1zL3NtYXJ0LXZlbmRpbmctbWFjaGluZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJmOmVlMTRiYzllLTNhMjgtNDVmNS1iZjI2LTBhMjUwMGU4Y2U3ZDowMDF4WmVHeUNhWEg0WFJBSGxqUDFoZEQiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJ3ZWIiLCJzZXNzaW9uX3N0YXRlIjoiNjllNDZhN2MtNDcyNC00ZWY0LTg4YmUtMGZjMWJhODkyMTZmIiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwic2lkIjoiNjllNDZhN2MtNDcyNC00ZWY0LTg4YmUtMGZjMWJhODkyMTZmIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJoeXBlcmxvZ3kiLCJyZXNvdXJjZV90ZW5hbnQiOiJ7XCJoeXBlcmxvZ3lcIjp7XCJ0ZW5hbnRJZFwiOlwiMDAwcU1ERjROQVJuMEJqdXJvOWFsSUF5XCIsXCJyb2xlXCI6XCJBRE1JTlwifX0ifQ.PT3JZcSWHTzI82gJ6pbmUpoY-T3H64RSoW3M_wiXm_gUyfS6DQj6uQYM2HZ-ZFHxvudwSuE1n_RbEOCUpZgEssiMOWJbGKrZDO983QW8drEFH2_hAeGXvf3gie4RD7UuXE7nOAIsglnqbQFVlYAfy6aG0lLwegatvm8g-4y3jtL0pH64Zhn4grUFIAKZUTDWPrRvK1TNLZ4XelBWo4414o9Q8RwFObKtKGndR0tjxGw0X0JxjcmHHGTqJohiNX8Y8hM5ZCTaRJ9n65RwJiWaCr-WTwb3MqIykubUHHdXqQ7IBMIZ6wREsUSorqX2AeRnVmxEWafsJHU_xIZCEIwqYQ"
  var accessToken = await AsyncStorageHelpers.get(StorageKey.ACCESS_TOKEN);
  const refreshToken = await AsyncStorageHelpers.get(StorageKey.REFRESH_TOKEN);

  // EventBus.getInstance().post({
  //   type: EventBusName.EXPIRE_TOKEN,
  //   payload: 'refresh token' 
  // })

  // const setting: any = await getUserInfo();
  // console.log('SETTING: ', setting);
  // const domain = (await asyncStorageHelpers.get(StorageKey.DOMAIN_COMPANY)) || '';
  // const tenant = domain.replace('.ihcm.vn', '');

  // var accessToken = setting ? setting.refresh_token : "";
  // var user = setting.user;
  ////////

  // var header = {};

  // if (isExpiredToken(accessToken)) {
  //   console.log('test_refresh_token_0');

  //   if (refreshToken) {
  //     const response = await getTokenByRefreshToken(refreshToken);
  //     console.log('test_refresh_token_rs', response);
  //     if (response && response.status === SUCCESS) {
  //       accessToken = response.data.access_token;

  //       AsyncStorageHelpers.remove(StorageKey.ACCESS_TOKEN);
  //       AsyncStorageHelpers.remove(StorageKey.REFRESH_TOKEN);
  //       AsyncStorageHelpers.save(StorageKey.ACCESS_TOKEN,response.data.access_token )
  //       AsyncStorageHelpers.save(StorageKey.REFRESH_TOKEN,response.data.refresh_token )

  //     } else {
  //       // showAlert(TYPE.ERROR, 'get refresh token error');
  //       // navigationService.navigate(screenName.AuthenNavigator);
  //     }
  //   } else {
  //     // navigationService.navigate(screenName.AuthenNavigator);
  //     return {};
  //   }
  // }
  // setting = await getUserInfo();
  const headers: any = {
    Authorization: `Bearer ${accessToken}`,
    "X-Tenant": "hyperlogy",
  };

  console.log("test_header: ", headers);

  return headers;
}

async function getRefreshToken() {
  const setting: any = await getUserInfo();
  console.log("SETTING: ", setting);
  var accessToken = setting ? setting.accessToken : "";
  var user = setting.user;
  console.log("GET REFRESH TOKEN : ");

  const response = await getTokenByRefreshToken(setting?.refreshToken);
  console.log("test_refresh_token_rs", response);
  if (response && response.status === SUCCESS) {
    accessToken = response.data.access_token;

    const data: LoginMobileResponse = {
      user: user,
      accessToken: response.data.access_token,
      refreshToken: response.data.refresh_token,
    };
    console.log("REFESH TOKEN : ", data);
    AsyncStorageHelpers.remove(StorageKey.USER_INFO);
    AsyncStorageHelpers.save(StorageKey.USER_INFO, JSON.stringify(data));

    // localStorage.setItem('access_token', response.data.access_token);
    // localStorage.setItem('refresh_token', response.data.refresh_token);
  } else {
    // redirectSSO();
    // showAlert(TYPE.ERROR, 'get refresh token error');
    // navigationService.navigate(screenName.AuthenNavigator);
    // return {};
  }
}

export async function removeUser(): Promise<void> {
  // await AsyncStorageHelpers.remove(StorageKey.USER_INFO);
  // return Promise.resolve();
}

async function getUserInfo(): Promise<any> {
  const res = JSON.parse(
    (await AsyncStorageHelpers.get(StorageKey.USER_INFO)) as string
  );
  return Promise.resolve(res);
}

// TODO
export function checkToken(res: any) {
  // if (res && res.code === TOKEN_EXPIRED) {
  //   return new Promise<Object>((resolve, reject) => {
  //     Alert.alert(
  //       translate('notify'),
  //       translate('tokenInvalid'),
  //       [{ text: translate('common.yes'), onPress: () => {} }],
  //       { cancelable: false }
  //     );
  //   });
  // } else return res;
  return res;
}

//Process request
function processRequestRespository(
  reqPromise: Promise<any>,
  onSuccess?: (data?: any, totalPages?: number) => void,
  onfail?: (ex?: any, msg?: string) => void,
  isShowAlert: boolean = true,
  isShowLoading: boolean = true
) {
  // isShowLoading && showLoading();
  reqPromise
    .then((data) => {
      // hideLoading();
      switch (data?.status) {
        case SUCCESS:
          // isShowAlert && showAlert(TYPE.SUCCESS, translate('warning.success'), data.message);
          onSuccess && onSuccess(data.data, data?.totalPages);
          break;
        default:
          onfail && onfail(data);
          break;
      }
      //TODO: update sso
      // onSuccess && onSuccess(data.data);
    })
    .catch((e) => {
      // hideLoading();
      console.log("tes_err_data_ex: ", e);

      // isShowAlert && showAlert(TYPE.WARN, translate('warning.warning'), e.message);
      onfail && onfail(e);
    });
}

function processRequestTrustRespository(
  reqPromise: Promise<any>,
  onSuccess?: (data?: any) => void,
  onfail?: (ex?: any, msg?: string) => void,
  isShowAlert: boolean = true,
  isShowLoading: boolean = true
) {
  // isShowLoading && showLoading();
  reqPromise
    .then((data) => {
      // hideLoading();
      switch (data?.status) {
        case SUCCESS:
          // isShowAlert && showAlert(TYPE.SUCCESS, translate('warning.success'), data.message);
          onSuccess && onSuccess(data);
          break;
        default:
          onfail && onfail(data);
          break;
      }
      //TODO: update sso
      onSuccess && onSuccess(data);
    })
    .catch((e) => {
      // hideLoading();
      console.log("tes_err_data_ex: ", e);

      // isShowAlert && showAlert(TYPE.WARN, translate('warning.warning'), e.message);
      onfail && onfail(e);
    });
}

//Check token
//Check token
function decodeJwt(accessToken: string) {
  try {
    let base64Url = accessToken.split(".")[1];
    let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    let jsonPayload = decodeURIComponent(
      Base64.atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  } catch (error) {
    return null;
  }
}

function isExpiredToken(accessToken: string) {
  let decodeInfo = decodeJwt(accessToken);
  console.log("test_exp_token: ", decodeInfo);
  if (decodeInfo) {
    let now = new Date();
    console.log(
      "Check Time token : ",
      now.getTime(),
      "-------",
      decodeInfo.exp * 1000
    );

    const exp = decodeInfo.exp ?? null;
    const status = now.getTime() - exp * 1000 > 0;

    console.log(
      "test_exp_token_1: ",
      exp,
      ", ",
      now.getTime(),
      ", rs: ",
      (now.getTime() * 1000 - exp, ", status: ", status)
    );
    if (exp) {
      return status;
    }
  }
  return true;
}

export async function InvalidToken(error: any) {
  const setting: any = await getUserInfo();
  console.log("SETTING: ", setting);
  var accessToken = setting ? setting.accessToken : "";
  var user = setting.user;
  console.log("GET REFRESH TOKEN : ");

  // if (APP_CONFIGS.LOGIN_SSO === 'true') {
  //   console.log(error);
  if (error && error.response?.status === 401) {
    if (setting?.refreshToken) {
      const response = await getTokenByRefreshToken(setting?.refreshToken);
      if (response && response.status === SUCCESS) {
        const data: LoginMobileResponse = {
          user: user,
          accessToken: response.data.access_token,
          refreshToken: response.data.refresh_token,
        };
        AsyncStorageHelpers.remove(StorageKey.USER_INFO);
        AsyncStorageHelpers.save(StorageKey.USER_INFO, JSON.stringify(data));
      } else {
        // showAlert(TYPE.ERROR, 'get refresh token error');
        // navigationService.navigate(screenName.AuthenNavigator);
      }
    } else {
      // showAlert(TYPE.ERROR, 'get refresh token error');
      // navigationService.navigate(screenName.AuthenNavigator);
    }
    return error;
  }
  // else {
  //   return error;
  // }
  // }
}

//Get token by refresh token if token expired: created by tuda
// async function getTokenByRefreshToken(refreshToken: string): Promise<any> {
//   let data = {
//     refresh_token: refreshToken,
//     client_id: 'web',
//     grant_type: 'refresh_token',
//   };

//   var formBody = [];
//   console.log('test_formBody_0: ', data);
//   for (var property in data) {
//     var encodedKey = encodeURIComponent(property);
//     var encodedValue = encodeURIComponent(data[property]);
//     formBody.push(encodedKey + '=' + encodedValue);
//   }
//   formBody = formBody.join('&');

//   console.log('test_formBody: ', formBody);
//   try {
//     await RNFetchBlob.config({
//       trusty: true,
//     })
//       .fetch(
//         'POST',
//         'https://keycloak.hyperlogy.com/auth/realms/ihcm/protocol/openid-connect/token',
//         { 'Content-type': 'application/x-www-form-urlencoded' },
//         formBody
//       )
//       .then((res1) => res1.json())
//       .then((response) => {
//         console.log('test_get_new_token:', response);
//       })
//       .catch((error) => {
//         showMessage({
//           message: translate('error.mesSys'),
//           description: translate('error.errDes'),
//           type: 'danger',
//           icon: 'danger',
//           floating: true,
//           autoHide: true,
//           hideOnPress: true,
//         });
//       });
//   } catch (error) {
//     console.log('test_get_new_token_ex:', error);
//   }

//     let data = new URLSearchParams();
// const url_ihcm = 'https://keycloak.hyperlogy.com/auth/realms/ihcm/protocol/openid-connect/token';
// data.append('refresh_token', refreshToken);
// data.append('client_id', 'web');
// data.append('grant_type', 'refresh_token');
// try {
//   const response = await axios({
//     method: 'POST',
//     url: url_ihcm,
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     data: data,
//     timeout: 30000,
//   });

//   console.log('test_getTokenByRefreshToken: ', response);
//   return response;
// } catch (error) {
//   console.log('test_getTokenByRefreshToken_ex: ',error);
// }
// }

const getTokenByRefreshToken = async (refreshToken: string) => {
  let data = new URLSearchParams();
  data.append("refresh_token", refreshToken);
  data.append("client_id", "web");
  data.append("grant_type", "refresh_token");

  // const data = {
  //   refresh_token: refreshToken,
  //   client_id: 'web',
  //   grant_type: 'refresh_token',
  // };
  const domain =
    (await AsyncStorageHelpers.get(StorageKey.DOMAIN_COMPANY)) || "";
  const tenant = domain.replace(".ihcm.vn", "");

  console.log(
    "URL GET TOKEN BY REFRESH TOKEN :  ",
    APP_CONFIGS.GET_TOKEN_SERVER.replace("@tanent", tenant),
    "------ data : ",
    data
  );

  try {
    const response = await axios({
      method: "POST",
      url: APP_CONFIGS.GET_TOKEN_SERVER.replace("@tanent", tenant),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
      timeout: 30000,
    });

    return response;
  } catch (error) {
    console.log("test_getTokenByRefreshToken: ", error);
  }
};

export async function getTokenUrl() {
  // return GET_TOKEN_URL_PREFIX + getRealms() + GET_TOKEN_URL_SUFFIX;
  // return 'https://keycloak.hyperlogy.com/auth/realms/ihcm/protocol/openid-connect/token';
  const domain =
    (await AsyncStorageHelpers.get(StorageKey.DOMAIN_COMPANY)) || "";
  const tenant = domain.replace(".ihcm.vn", "");
  return APP_CONFIGS.GET_TOKEN_SERVER.replace("@tanent", tenant);
}

export {
  fetch,
  post,
  // // postFile,
  put,
  postForm,
  // postFormData,
  deletes,
  // postForm,
  // postTokenTest,
  // postTokenFormDataTest,
  // processRequestRespository,
  // processRequestTrustRespository,
  // getUserInfo,
};
