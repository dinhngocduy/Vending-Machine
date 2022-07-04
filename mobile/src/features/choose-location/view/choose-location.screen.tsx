import { SearchInputComponent } from 'libraries/search-input/search-input-component';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import svgs from 'res/svgs';
import navigationService from 'routers/navigation-service';
import ListLocationData from 'sample-data/list-location';
import colors from '../../../res/colors';
import { ListLocationComponent } from './components/list-location/list-location.component';

export const ChooseLocationContainer = () => {
  const closeScreen = () => {
    navigationService.pop();
  };

  return (
    <View style={styles.container}>
      <View style={styles.title_wrap}>
        <Text style={styles.title}>Chọn vị trí</Text>
        <SvgXml height={24} width={24} xml={svgs.icon.close} onPress={closeScreen} />
      </View>
      <View style={styles.search_wrap}>
        <SearchInputComponent placeHolderText="Nhập vị trí cần tìm kiếm" />
      </View>
      <View style={styles.list_location_ctn}>
        <ListLocationComponent data={ListLocationData} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: 'red',
  },
  title_wrap: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.Midnight,
    flex: 1,
    textAlign: 'center',
  },
  search_wrap: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  list_location_ctn: { flex: 1 },
});
