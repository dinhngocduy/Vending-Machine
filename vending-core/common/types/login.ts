import { User } from './user';

export interface LoginMobileResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
  fcmToken?:string;
  // message: string;
}

export interface LoginMobileRequest {
  email: string;
  password: string;
}
