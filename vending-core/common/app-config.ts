const ENV: string = "DEV";

let APP_CONFIGS = {
  DEFAULT_NUMBER_PAGE: 1,
  ITEM_PER_PAGE: 20,
  CHAT_ITEM_PER_PAGE: 20,
  URL_API: "https://app.smartvendingmachines.net/",
  GET_TOKEN_SERVER:
    "https://auth.smartvendingmachines.net/auth/realms/smart-vending-machine/protocol/openid-connect/token",
  UPLOAD_FILE_SERVER: "https://app-test.smartvendingmachines.net/files/image",
  SSO_URL: "https://keycloak.hyperlogy.com/auth/realms/smart-vending-machine",
  GET_TOKEN_URL_SUFFIX: "/protocol/openid-connect/",
  DOMAIN_APP: "http://app-test.smartvendingmachines.net:3000/dashboard",
  REDIRECT_URL:
    "https://keycloak.hyperlogy.com/auth/realms/smart-vending-machine/protocol/openid-connect/auth?client_id=web&response_type=code&scope=offline_access&redirect_uri=",
};

if (ENV === "STAGING") {
  APP_CONFIGS.URL_API = "https://app.smartvendingmachines.net/";
  APP_CONFIGS.GET_TOKEN_SERVER =
    "https://auth.smartvendingmachines.net/auth/realms/smart-vending-machine/protocol/openid-connect/token";
  APP_CONFIGS.UPLOAD_FILE_SERVER =
    "https://app.smartvendingmachines.net/files/image";
  APP_CONFIGS.DOMAIN_APP = "https://app.smartvendingmachines.net/dashboard";
} else if (ENV === "PRODUCTION") {
  APP_CONFIGS.URL_API = "https://app.smartvendingmachines.net/";
  APP_CONFIGS.GET_TOKEN_SERVER =
    "https://auth.smartvendingmachines.net/auth/realms/smart-vending-machine/protocol/openid-connect/token";
  APP_CONFIGS.UPLOAD_FILE_SERVER =
    "https://app.smartvendingmachines.net/files/image";
}

export { APP_CONFIGS };
