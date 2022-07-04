import { PickLocationComponent } from 'libraries/pick-location-component/pick-location.component';
import { PickTimeComponents } from 'libraries/pick-time-components/pick-time.componets';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import navigationService from 'routers/navigation-service';
import * as screenName from '../../../../../routers/screen-name';

export const FilterTaskComponent = () => {
  const gotoChooseLocation = () => {
    navigationService.navigate(screenName.ChooseLocationScreen);
  };

  return (
    <View style={styles.container}>
      <PickTimeComponents title="Thời gian" />
      <PickLocationComponent onPress={gotoChooseLocation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});
