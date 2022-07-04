import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import svgs from 'res/svgs';
import navigationService from 'routers/navigation-service';
import colors from '../../../res/colors';
import images from '../../../res/images';
import { ProfileActionComponent } from './profile-action-component/profile-action-component';
import * as screenname from 'routers/screen-name'
import asyncStorageHelpers, { StorageKey } from '../../../../../vending-core/common/helpers/async-storage-helpers';

export const AccountContainer = () => {

  const logout = () => {
    asyncStorageHelpers.save(StorageKey.ACCESS_TOKEN,'')
    asyncStorageHelpers.save(StorageKey.REFRESH_TOKEN,'')
    navigationService.reset(screenname.LoginScreen)
  }



  return (
    <View style={styles.container}>
      <View style={styles.header_bg}>
        <ImageBackground
          source={images.profile_header_bg}
          resizeMode="cover"
          style={{ height: '100%' }}
        />
      </View>
      <View style={styles.avatar_wrap}>
        <View style={styles.avatar_ctn}>
          <Image
            source={{ uri: 'https://www.w3schools.com/w3images/avatar2.png' }}
            style={styles.avatar}
          />
        </View>
      </View>
      <View style={styles.info_ctn}>
        <Text style={styles.name_text}>Nguyễn Ngọc Minh</Text>
        <Text style={styles.phone_num}>0338.759.771</Text>
      </View>
      <ProfileActionComponent />
      <TouchableOpacity style={styles.row_ctn} onPress = {logout}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <SvgXml width={24} height={24} xml={svgs.icon.sign_out} />
          <Text style={styles.txt}>Đăng xuất</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5F8FB',
  },
  header_bg: {
    // width: '100%',
    height: 170,
  },
  avatar_wrap: {
    width: '100%',
    alignItems: 'center',
    marginTop: -55,
  },
  avatar_ctn: {
    height: 118,
    width: 118,
    borderRadius: 118,
    borderColor: 'rgba(255,255,255,0.5)',
    borderWidth: 4,
  },
  avatar: {
    height: 110,
    width: 110,
    borderRadius: 110,
  },
  info_ctn: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  name_text: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.Midnight,
    paddingBottom: 4,
  },
  phone_num: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.Regent_Gray,
  },
  row_ctn: {
    height: 56,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 12,
  },
  txt: {
    fontSize: 16,
    color: colors.Midnight,
    fontWeight: '500',
    flex: 1,
    marginLeft: 12,
  },
  txtStatus: {
    fontSize: 12,
    color: '#667085',
    marginTop: 2,
  },
});
