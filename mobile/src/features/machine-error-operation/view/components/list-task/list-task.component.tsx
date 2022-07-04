import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { ListTaskItemComponent } from './list-task-item/list-task-item.component';
import { ListTaskItemProps } from './list-task-item/list-taxk-item.props';
import * as screenName from '../../../../../routers/screen-name';
import navigationService from 'routers/navigation-service';
import svgs from 'res/svgs';
import ListTaskData from 'sample-data/list-task';

export const ListTaskComponent = () => {
  const gotoTaskDetail = (item: any) => {
    navigationService.navigate(screenName.TaskDetailScreen, { task: item });
  };

  const renderBlank = () => {
    return (
      <View style={styles.blank_ctn}>
        <SvgXml width={200} xml={svgs.no_data_task} />
      </View>
    );
  };

  const renderItem = (item: any) => {
    return (
      <ListTaskItemComponent
        id={item.id}
        machineName={item.machineName}
        time={item.time}
        location={item.location}
        type={item.type}
        onPress={() => gotoTaskDetail(item)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={ListTaskData} renderItem={({ item }) => renderItem(item)} />
      {/* {renderBlank()} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  blank_ctn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#000',
  },
});
