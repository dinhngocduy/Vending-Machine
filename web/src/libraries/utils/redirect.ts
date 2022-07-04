import { APP_CONFIGS } from "vending-core/common/app-config";
export const redirectSSO = () => {
  const url = APP_CONFIGS.REDIRECT_URL + APP_CONFIGS.DOMAIN_APP;
  console.log("REDIRECT SSO URL: ", url);
  
  window.location.href = url;
};

export const redirectApp = () => {
  console.log("REDIRECT APP : ", window.location);
  window.location.href = APP_CONFIGS.DOMAIN_APP;
};
