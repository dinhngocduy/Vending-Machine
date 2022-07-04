/* 
    Created by thaolt
*/

import React, { FunctionComponent as Component, PureComponent } from 'react';
import { StyleSheet, View, Alert, Dimensions } from 'react-native';
import { WebView, WebViewNavigation, WebViewMessageEvent } from 'react-native-webview';
import { APP_CONFIGS } from '../../../../../../../vending-core/common/app-config';
import { LoginFormWvComponentAdapter } from './login-form-web-view.adapter';
import { LoginFormWebViewProps } from './login-form-web-view.props';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export class LoginFormWebView extends PureComponent<LoginFormWebViewProps> {
  refWebEl = React.createRef<WebView>();
  LoginFormWvComponentAdapter: LoginFormWvComponentAdapter;
  tanent: string = '';
  constructor(props: LoginFormWebViewProps) {
    super(props);
    this.LoginFormWvComponentAdapter = new LoginFormWvComponentAdapter(this);
    // this.getTanent();
  }

  //   getTanent = async () => {
  //     this.tanent = this.props.domain;
  //     showLog('TANENT : ' + this.tanent);
  //   };

  render() {
    const url_ihcm = APP_CONFIGS.REDIRECT_URL + APP_CONFIGS.DOMAIN_APP;
    

    // const url_ihcm = APP_CONFIGS.GET_TOKEN_SERVER + this.tanent + '/protocol/openid-connect/token';
    return (
      <View style={{ width: screenWidth, height: screenHeight }}>
        <WebView
          onError={({ nativeEvent }) => {
            Alert.alert('Error', JSON.stringify(nativeEvent, null, 2), [{ text: 'OK' }], {
              cancelable: true,
            });
          }}
          // ref={webview => {
          //   this.webview = webview;
          // }}
          ref={this.refWebEl}
          // style={{width:0, height:0}}
          style={{ backgroundColor: 'white' }}
          source={{
            uri: url_ihcm,
            // uri: 'http://172.16.40.153:8080/auth/realms/localhost/protocol/openid-connect/auth?client_id=web&response_type=code&scope=profile&redirect_uri=http://localhost.ihcm.vn:8081/callback',
            // 'https://keycloak.hyperlogy.com/auth/realms/ihcm/protocol/openid-connect/auth?client_id=web&response_type=code&scope=profile&redirect_uri=http://test2608.ihcm.com:3000/chat',
            // 'https://sso.hyperlogy.com/cas/login?service=https%3A%2F%2Fdemo10.ihcm.vn%2Fihcm%2Fapi/auth/validateCasTicket/',
          }}
          injectedJavaScript={INJECTED_JAVASCRIPT}
          javaScriptEnabled={true}
          onMessage={this.LoginFormWvComponentAdapter.onMessage}
          onNavigationStateChange={this.LoginFormWvComponentAdapter.onNavigationStateChange}
          incognito={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});

const INJECTED_JAVASCRIPT = `
  window.parseToJson=function(data){
    return JSON.parse(data.replace(/^"|"$/,"'"));
  }
  true;
`;
