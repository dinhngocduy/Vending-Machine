import {
  USER_TYPE,
  UPDATE_USER_NOTI_SETTING,
  UPDATE_PROFILE_CUSTOMER_ADMIN,
} from '../actions/index';
import { AuthenResponse } from 'features/authen/model';

interface UserState {
  user: AuthenResponse;
}

interface UserAction {
  type: string;
  data: AuthenResponse;
}

const initialState = {};

export const userReducers = (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case USER_TYPE:
      return { ...state, ...action.data };
    case UPDATE_PROFILE_CUSTOMER_ADMIN:
      return {
        ...state,
        // @ts-ignore
        employee: {
          // @ts-ignore
          ...state.employee,
          ...action.data,
        },
      };
    case UPDATE_USER_NOTI_SETTING:
      return {
        ...state,
        // @ts-ignore
        employee: {
          // @ts-ignore
          ...state.employee,
          noti_setting: action.data,
        },
      };
      return state;
    default:
      return state;
  }
};
