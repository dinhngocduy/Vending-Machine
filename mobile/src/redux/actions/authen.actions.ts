import { AuthenAction } from "features/authen/model";
import { AUTHEN_TYPE, ENTER_PHONE_SCREEN } from ".";

export const saveAuthenType = (data: AuthenAction) => {
  return {
    type: AUTHEN_TYPE,
    payload: data
  };
};

export const goToEnterPhoneScreen = () => {
  return {
    type: ENTER_PHONE_SCREEN,
  };
};
