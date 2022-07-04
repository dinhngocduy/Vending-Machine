import { HyperButtonComponent } from 'libraries/hyper-button/hyper-button.component';
import { RefObject } from 'libraries/text-field/ref-props';
import { TextField } from 'libraries/text-field/text-field';
import { TitleBar } from 'libraries/title-bar/title-bar';
import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import colors from 'res/colors';

export const EditProfileContainer = () => {
  const refTxtUsername = React.useRef<RefObject>(null);
  const refTxtPhoneNum = React.useRef<RefObject>(null);
  const refTxtEmail = React.useRef<RefObject>(null);

  return (
    <View style={{ flexDirection: 'column', flex: 1 }}>
      <TitleBar title="Chỉnh sửa thông tin" back={true} />
      <View style={styles.container}>
        <View style={styles.avatar_ctn}>
          <Image
            style={styles.avatar}
            source={{ uri: 'https://www.w3schools.com/w3images/avatar2.png' }}
          />
          <Text style={styles.highlight_text}>Nhấn để sửa ảnh</Text>
        </View>
        <TextField
          containerStyle={{ marginTop: 32 }}
          ref={refTxtUsername}
          placeHolderText={'Họ và tên'}
          // defaultValue="Hyper@123"
          lable={'Họ và tên'}
          passInput={false}
          errorTxt={''}
        />

        <TextField
          containerStyle={{ marginTop: 32 }}
          ref={refTxtPhoneNum}
          placeHolderText={'Số điện thoại'}
          // defaultValue="Hyper@123"
          lable={'Số điện thoại'}
          passInput={false}
          errorTxt={''}
        />
        <TextField
          containerStyle={{ marginTop: 32 }}
          ref={refTxtEmail}
          placeHolderText={'Email'}
          // defaultValue="Hyper@123"
          lable={'Email'}
          passInput={false}
          errorTxt={''}
        />
      </View>
      <View style={styles.btn_wrap}>
        <HyperButtonComponent
          containerStyles={styles.btn_ctn}
          text={'Lưu'}
          textStyle={styles.textBtn}
          // onPress={login}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: colors.primary_bg,
    flex: 1,
  },
  avatar_ctn: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  avatar: {
    height: 110,
    width: 110,
    borderRadius: 110,
    marginBottom: 12,
  },
  highlight_text: {
    color: colors.Dodger_Blue,
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
  btn_ctn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#00DAD4',
  },
  textBtn: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ffffff',
  },
  btn_wrap: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
});
