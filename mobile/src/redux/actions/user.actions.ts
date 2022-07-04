import { USER_TYPE, UPDATE_USER_NOTI_SETTING, UPDATE_PROFILE_CUSTOMER_ADMIN } from './index';
import { AuthenResponse } from 'features/authen/model';
import { IEmployeeNotiSetting } from 'types/user';

export const saveUserInfo = (data: AuthenResponse) => {
  return {
    type: USER_TYPE,
    data: data,
  };
};
