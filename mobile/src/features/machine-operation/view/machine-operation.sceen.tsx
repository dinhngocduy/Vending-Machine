import { TitleBar } from 'libraries/title-bar/title-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { ListMachineComponent } from './components/list-machine/list-machine.component';
import { SearchMachineComponent } from './components/search-machine-component/search-machine-component';

export const MachineOperationContainer = () => {
  return (
    <View style={{ flexDirection: 'column', flex: 1 }}>
      <TitleBar title="Quản lý máy" />
      <SearchMachineComponent />
      <View style={styles.list}>
        <ListMachineComponent />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    maxHeight: Dimensions.get('window').height - 172,
    flex: 1
  },
});
