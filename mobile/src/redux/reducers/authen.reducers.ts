import { AUTHEN_TYPES, AUTHEN_TYPE_STEPS } from 'features/authen/model';
import { VERIFICATION_ID_TYPE, ENTER_PHONE_SCREEN } from './../actions/index';
import { AuthenAction } from './../../features/authen/model/authen.entity';
import { AUTHEN_TYPE } from '../actions/index';

interface AuthenTypeState {
  authenType: AuthenAction;
  verificationId: string;
}

interface AuthenTypeAction {
  type: string;
  payload: AuthenTypeState;
}

const initialState = {
  authenType: null,
};

export const authenReducers = (state = initialState, action: AuthenTypeAction): AuthenTypeState => {
  switch (action.type) {
    case AUTHEN_TYPE:
      return { ...action.payload };
    default:
      return state;
  }
};
