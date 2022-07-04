import { NotifiOnOffComponent } from 'libraries/notifi-on-off/notifi-on-off.component';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import colors from 'res/colors';
import svgs from 'res/svgs';
import navigationService from 'routers/navigation-service';
import * as screenName from '../../../../routers/screen-name';

export const ProfileActionComponent = () => {
  const gotoEdit = () => {
    navigationService.navigate(screenName.EditProfileScreen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row_ctn}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={gotoEdit}
          >
            <SvgXml width={24} height={24} xml={svgs.icon.pen} />
            <Text style={styles.txt}>Chỉnh sửa thông tin</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.line} />
      <NotifiOnOffComponent />
      <View style={styles.line} />
      <View style={styles.row_ctn}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <SvgXml width={24} height={24} xml={svgs.icon.earth} />
          <Text style={styles.txt}>Ngôn ngữ</Text>
          <View>
            <Text style={styles.language_text}>Tiếng việt</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  line: {
    height: 0,
    marginHorizontal: 16,
    borderColor: colors.Athens_Gray,
    borderWidth: 0.5,
  },
  row_ctn: {
    height: 56,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: '#fff',
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
  language_text: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.Regent_Gray,
  },
});
