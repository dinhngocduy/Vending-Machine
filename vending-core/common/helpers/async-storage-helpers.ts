export enum StorageKey {
  USER_INFO = "USER_INFO",
  DEVICE_INFO = "DEVICE_INFO",
  DOMAIN_COMPANY = "DOMAIN_COMPANY",
  //
  VIDEO_CALL_INFO = "VIDEO_CALL_INFO",
  ACCESS_TOKEN = "ACCESS_TOKEN",
  REFRESH_TOKEN = "REFRESH_TOKEN"
}

async function save(key: StorageKey, value: any) {
  const AsyncStorage: any = await import(
    "@react-native-community/async-storage"
  );

  AsyncStorage.default
    ? AsyncStorage.default.setItem(key, value)
    : AsyncStorage.setItem(key, value);
}

async function get(key: StorageKey) {
  const AsyncStorage: any = await import(
    "@react-native-community/async-storage"
  );

  const rs = AsyncStorage.default
    ? AsyncStorage.default.getItem(key)
    : AsyncStorage.getItem(key);
  return rs;
}

async function remove(key: StorageKey) {
  const AsyncStorage: any = await import(
    "@react-native-community/async-storage"
  );
  return AsyncStorage.removeItem(key);
}

// Sử dụng nếu AsyncStorage dữ liệu dạng Json object
function saveObject(key: string, value: any) {
  const AsyncStorage: any = import("@react-native-community/async-storage");

  AsyncStorage.default
    ? AsyncStorage.default.setItem(key, JSON.stringify(value))
    : AsyncStorage.setItem(key, JSON.stringify(value));
}

// sử dụng nếu AsyncStorage dữ liệu dạng Json object
async function getObject(key: string) {
  const AsyncStorage: any = await import(
    "@react-native-community/async-storage"
  );
  let value: any = AsyncStorage.default
    ? AsyncStorage.default.getItem(key)
    : AsyncStorage.getItem(key);

  return JSON.parse(value);
}

     export default {
  save,
  get,
  remove,
  saveObject,
  getObject,
};
