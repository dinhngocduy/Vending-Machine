/* 
    Created by thaolt
*/

import React, { PureComponent } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';
import colors from 'res/colors';
import { translate } from 'res/languages';
import { DimensionHelpers } from '../../../../../helpers/dimension-helpers';
import images from 'res/images';
import { SvgXml } from 'react-native-svg';
import svgs from 'res/svgs';
import { TextField } from '../../../../../libraries/text-field/text-field';
import { HyperButtonComponent } from '../../../../../libraries/hyper-button/hyper-button.component';
import { RefObject } from '../../../../../libraries/text-field/ref-props';

interface Props {
  auth: (username: string, password: string) => void;
  gotoHome: any;
}

export const LoginFormComponent = (props: Props) => {
  const { auth, gotoHome } = props;
  const refTxtUsername = React.useRef<RefObject>(null);
  const refTxtPass = React.useRef<RefObject>(null);

  const login = () => {
    auth(refTxtUsername.current?.getValue(), refTxtPass.current?.getValue());
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
      style={{ width: DimensionHelpers.width, paddingHorizontal: 32 }}
    >
      <KeyboardAvoidingView
        behavior="padding"
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <View style={{ alignItems: 'center' }}>
          <SvgXml width={120} xml={svgs.logo_vending} />

          <Text style={styles.label_text}>Đăng nhập</Text>

          <TextField
            containerStyle={{ marginTop: 32 }}
            ref={refTxtUsername}
            lable={'Tài Khoản'}
            placeHolderText="Nhập tài khoản"
            // defaultValue="hyperlogy"
            errorTxt={translate('error.errorEmail')}
          />
          <TextField
            containerStyle={{ marginTop: 32 }}
            ref={refTxtPass}
            placeHolderText={'Nhập mật khẩu'}
            // defaultValue="Hyper@2020"
            lable={'Mật khẩu'}
            passInput={true}
            errorTxt={translate('error.errorPass')}
          />

          {/* <Text style = {styles.err_text}>* Tài khoản hoặc mật khẩu không chính xác</Text> */}

          <HyperButtonComponent
            containerStyles={styles.signIn}
            text={'Đăng nhập'}
            textStyle={styles.textSign}
            onPress={login}
          />
          <View style={styles.language_ctn}>
            <View style={[styles.language_btn, { borderWidth: 1 }]}>
              <SvgXml width={24} xml={svgs.logo_vn} />
              <Text style={{ marginLeft: 6, color: '#4D5971' }}>VN</Text>
            </View>
            <View style={[styles.language_btn, { borderWidth: 0 }]}>
              <SvgXml width={24} xml={svgs.logo_en} />
              <Text style={{ marginLeft: 6, color: '#4D5971' }}>EN</Text>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.statusBar,
  },

  label_text: {
    fontSize: 28,
    color: '#1A2948',
    marginVertical: 30,
    fontWeight: 'bold',
  },

  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 4,
    borderWidth: 1,
    borderColor: '#E6E8EB',
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    color: 'white',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 50,
    backgroundColor: '#00DAD4',
  },
  textSign: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ffffff',
  },
  logo: {
    width: 120,
    height: 120,
  },
  language_ctn: {
    marginTop: 50,
    flexDirection: 'row',
  },
  language_btn: {
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    borderColor: '#4080FF',
    marginHorizontal: 10,
  },
  err_text:{
    color: colors.Sunset_Red,
    paddingVertical: 10,
    fontSize: 14,
  }
});
