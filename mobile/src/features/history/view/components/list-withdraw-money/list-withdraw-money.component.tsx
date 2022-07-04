import { PickTimeComponents } from 'libraries/pick-time-components/pick-time.componets';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListHistoryData from 'sample-data/list-history';
import { ListWithDrawMoneyItemComponent } from './list-withdraw-money-item/list-withdraw-money-item.component';
import { ListWithDrawMoneyProps } from './list-withdraw-money.props';

export const ListWithDrawMoneyComponent = (props: ListWithDrawMoneyProps) => {
  const { onClickItem } = props;
  const renderItem = (item: any) => {
    return <ListWithDrawMoneyItemComponent item={item} onPress={onClickItem} />;
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
