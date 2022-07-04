/* 
    Created by thaolt
*/
import { showAlert, TYPE } from 'libraries/dropdown-alert';
import { WebViewMessageEvent, WebViewNavigation } from 'react-native-webview';
import { translate } from 'res/languages';
import { hideLoading } from '../../../../../libraries/loading/loading-modal';
import { LoginFormWebView } from './login-form-web-view';


export class LoginFormWvComponentAdapter {
  private LoginFormWvComponent: LoginFormWebView;
  private userName: string = '';
  private pass: string = '';
  private isErrorWv: boolean = true;
  private TIME_OUT_ERROR: number = 10000;
  private isLogin: boolean = false;

  constructor(Component: LoginFormWebView) {
    this.LoginFormWvComponent = Component;
  }

  onMessage = (e: WebViewMessageEvent) => {
    console.log('test_onMessage: ' + e);
  };

  onNavigationStateChange = (newNavState: WebViewNavigation) => {
    console.log(
      'test_test_onNavigationStateChange_0' +
      newNavState +
      ', username: ' +
      this.userName +
      ', pass: ' +
      this.pass
    );
    // showAlert(TYPE.WARN, 'nav: '+ newNavState)
    const tmp_url = (newNavState && newNavState.url) || null;

    if (tmp_url) {
      if (tmp_url.includes('ticket')) {
        this.isErrorWv = false;
        if (!this.isLogin) {
          // loginHandle(data.username, data.password);
          const url_part = tmp_url.split('?');
          const ticket = url_part?.[url_part?.length - 1]?.split('=')?.[1];
          // showAlert(TYPE.WARN, 'inside: '+ ticket)
          console.log('test_onNavigationStateChange_inside:' + ticket);
          // hideLoading();
        //   this.checkTicket(ticket);
          this.isLogin = true;
        }
      } else if (tmp_url.includes('&code')) {
        console.log('test_session_state: ' + tmp_url);
        const url_part = tmp_url.split('&');
        const code = url_part?.[url_part?.length - 1]?.split('=')?.[1];
        console.log('test_session_state_code: ' + code);

        //TODO
        // this.fillFormWv('thao', 'Hyper@123')
        if (!code.includes('http')) {
          // setTimeout(() => {
          code && this.LoginFormWvComponent.props.getToken(code);
          // }, 500);
        }
      }
    }
  };

  fillFormWv = (username: string, pass: string) => {
    // showLog('test_fillFormWv: ', username, pass);
    // let injectedData = `document.getElementById("username").value = '${username}';document.getElementById("password").value = '${pass}';document.querySelector("#kc-form-login input.login").click();`;
    let injectedData = `document.getElementById("username").value = '${username}';document.getElementById("password").value = '${pass}'`;
    this.LoginFormWvComponent.refWebEl.current?.injectJavaScript(injectedData);
    this.userName = username;
    this.pass = pass;

    // this.checkIsErrorWv();
  };

  private checkIsErrorWv = () => {
    setTimeout(() => {
      if (this.isErrorWv) {
        hideLoading();
        showAlert(TYPE.WARN, translate('warning.errServer'));
        this.isErrorWv = false;
      }
    }, 2000);
  }; 

//   private checkTicket = (ticket: string) => {
//     processRequestRespository(
//       LoginOldServices.getInstance().checkTicket(ticket),
//       this.onCheckTicketSuccess
//     );
//   };

//   private onCheckTicketSuccess = (result: any) => {
//     //Login mobile
//     const loginMobileReq: LoginMobileRequest = {
//       email: this.userName,
//       password: this.pass,
//     };

//     this.LoginFormWvComponent.props.loginMobile(loginMobileReq);
//   };
}
