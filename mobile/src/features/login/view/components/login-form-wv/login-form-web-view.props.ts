export interface LoginFormWebViewProps {
    // domain:string
    // loginMobile: (data: LoginMobileRequest) => void;
    getToken: (code: string) => void;
  }