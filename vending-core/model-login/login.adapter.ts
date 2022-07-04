/*
    Created by thaolt
*/

import LoginServices from "./login.services";

export function LoginAdapter() {
  const auth = async (data: any) => {
    return await LoginServices.getInstance().auth(data);
  };
  return {
    auth,
  };
}
