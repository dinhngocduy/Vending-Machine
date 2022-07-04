import { PickLocationComponent } from 'libraries/pick-location-component/pick-location.component';
import { SearchInputComponent } from 'libraries/search-input/search-input-component';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SvgXml } from 'react-native-svg';
import navigationService from 'routers/navigation-service';
import colors from '../../../../../res/colors';
import * as screenName from '../../../../../routers/screen-name';

export const SearchMachineComponent = () => {
  const gotoChooseLocation = () => {
    navigationService.navigate(screenName.ChooseLocationScreen);
  };

  return (
    <View style={styles.container}>
      <SearchInputComponent placeHolderText="Nhập máy cần tìm kiếm" />
      <PickLocationComponent onPress={gotoChooseLocation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});
