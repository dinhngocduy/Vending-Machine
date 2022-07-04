import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SvgXml } from 'react-native-svg';
import svgs from 'res/svgs';
import { ListLocationItemComponent } from './list-location-item/list-location-item.component';
import { ListLocationProps } from './list-location.props';

export const ListLocationComponent = (props: ListLocationProps) => {
  const renderItem = (item: string) => {
    return <ListLocationItemComponent title={item} />;
  };

  const renderBlankData = () => {
    return (
      <View style={styles.blank_ctn}>
        <SvgXml width={200} xml={svgs.no_data_search} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={props.data} renderItem={({ item }) => renderItem(item)} />
      {/* {renderBlankData()} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  blank_ctn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#000',
  },
});
