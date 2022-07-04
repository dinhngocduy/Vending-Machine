import { TitleBar } from 'libraries/title-bar/title-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FilterTaskComponent } from './components/filter-task/filter-task.component';
import { ListTaskComponent } from './components/list-task/list-task.component';

export const MachineErrorOperationContainer = () => {
  return (
    <View style={stlyes.container}>
      <TitleBar title="Quản lý công việc" />
      <FilterTaskComponent />
      <View style={{ flex: 1 }}>
        <ListTaskComponent />
      </View>
    </View>
  );
};

const stlyes = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
  },
});
