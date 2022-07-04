/* 
  Created by thaolt
*/
import { DimensionHelpers } from 'helpers/dimension-helpers';
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { translate } from 'res/languages';
import navigationService from 'routers/navigation-service';
import asyncStorageHelpers, {
  StorageKey,
} from '../../../../../vending-core/common/helpers/async-storage-helpers';
import { HomeProps } from '../../../../../vending-core/model-home/home.props';
import { LoginAdapter } from '../../../../../vending-core/model-login/login.adapter';
import { LoginFormComponent } from './components/login-form/login-form.component';
import * as screenName from '../../../routers/screen-name';
import { LoginFormWebView } from './components/login-form-wv/login-form-web-view';
import { RootAdapter } from '../../../../../vending-core/model-root/root.adapter';

export const LoginContainer = (props: any) => {
  const { auth } = LoginAdapter();
  const {getTokenByCode} = RootAdapter()

  const gotoHome = async () => {
   
    // console.log('test_user: ', user, navigationService);
    navigationService.navigate(screenName.HomeScreen);
  };

  // const login = async (username: string, password: string) => {
  //   const data = {
  //     username: username,
  //     password: password,
  //     grant_type: 'password', 
  //     client_id: 'web',
  //   };
  //   const res = await auth(data);
  //   console.log('LOGIN RESPONSE :', res);

  //   if (res) {
  //     asyncStorageHelpers.save(StorageKey.ACCESS_TOKEN, res.access_token)
  //     asyncStorageHelpers.save(StorageKey.REFRESH_TOKEN, res.refresh_token)
  //     gotoHome();
  //   }
  // };

  return (
    <View style={styles.container}>
      {/* <LoginFormComponent auth={login} gotoHome={gotoHome} /> */}
      <LoginFormWebView getToken = {getTokenByCode}/> 
    </View>
  );
};

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // marginBottom: bottomSpaceHeight(),
  },
  content: { flex: 1, marginTop: DimensionHelpers.height * 0.1 },
  version: { paddingLeft: 15 },
});
