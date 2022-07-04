import { LoginMobileResponse } from "../../types/login";
import { UPDATE_USER, REMOVE_USER } from "../actions/index";

interface UserState {
  userInfo: any;
}

interface UserAction {
  type: string;
  payload: any;
}

const initialState = {};

export const userReducers = (
  state: any = initialState,
  action: any
): UserState => {
  console.log(
    "test_action_reducer: ",
    action.payload,
    ", data: ",
    action.data,
    ", type: ",
    action.type
  );
  switch (action.type) {
    case UPDATE_USER:
      const userInfo = action.payload || action.data;
      return { ...state, ...userInfo };
    case REMOVE_USER:
      state = {};
      return state;
    default:
      return state;
  }
};
