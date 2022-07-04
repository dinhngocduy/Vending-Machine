import { combineReducers } from 'redux';
import { userReducers } from './user.reducers';
import { authenReducers } from './authen.reducers';

const rootReducers = combineReducers({
  user: userReducers,
  authen: authenReducers
});

export default rootReducers;
export type AppState = ReturnType<typeof rootReducers>;
