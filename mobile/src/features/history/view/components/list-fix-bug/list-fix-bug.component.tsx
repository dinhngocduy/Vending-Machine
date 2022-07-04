import { PickTimeComponents } from 'libraries/pick-time-components/pick-time.componets';
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ListHistoryData from 'sample-data/list-history';
import { ListFixBugItemComponent } from './list-fix-bug-item/list-fix-bug-item.component';
import { ListFixBugProps } from './list-fix-bug.props';

export const ListFixBugComponent = (props: ListFixBugProps) => {
  const { onClickItem } = props;

  const renderItem = (item: any) => {
    return <ListFixBugItemComponent item={item} onPress={onClickItem} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.pick_time_ctn}>
        <PickTimeComponents title="Thời gian" />
      </View>
      <View style={{ flex: 1 }}>
        <FlatList data={ListHistoryData} renderItem={({ item }) => renderItem(item)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  pick_time_ctn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
  },
});
