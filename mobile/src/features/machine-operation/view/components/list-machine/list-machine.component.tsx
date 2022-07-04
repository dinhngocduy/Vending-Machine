import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ListMachineItemComponent } from './list-machine-item/list-machine-item.component';
import { ListMachineItemProps } from './list-machine-item/list-machine-item.props';
import * as screenName from '../../../../../routers/screen-name';
import navigationService from 'routers/navigation-service';
import ListMachineData from 'sample-data/list-machine';
import { ListMachineAdapter } from './list-machine.adapter';
import { IMachine } from 'enum/machine';
import { ListProductProps } from 'features/machine-detail/view/components/list-product/list-product.props';
import LoadingView from 'libraries/loading/loading-view';

export const ListMachineComponent = () => {
  const { listMachine, loading, refreshData } = ListMachineAdapter();

  const gotoMachineDetail = (item: any) => {
    navigationService.navigate(screenName.MachineDetailScreen, { machine: item });
  };

  const renderItem = (item: IMachine) => {
    return (
      <ListMachineItemComponent
        error={item.machine.id === 'OGo6Jq0qfhBP0Bjuro003001' ? false : true}
        fullCash={item.machine.id === 'OGo6Jq0qfhBP0Bjuro003001' ? false : true}
        outOfStock={item.machine.id === 'OGo6Jq0qfhBP0Bjuro003001' ? false : true}
        id={item.machine.identifyCode}
        name={item.machine.referenceName}
        turnover={item.cashInMachine}
        process={parseInt(((item.remainProducts / item.totalProducts) * 100).toFixed(0))}
        onPress={() => gotoMachineDetail(item)}
      />
    );
  };

  return (
    <View style={styles.cotainer}>
      {loading ? (
        <View style = {styles.loading_ctn}>
          <LoadingView/>
        </View>
      ) : (
        <FlatList
          style={styles.flatlist}
          data={listMachine}
          renderItem={({ item }) => renderItem(item)}
          refreshing = {loading}
          onRefresh = {refreshData}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
  },
  flatlist: {
    // flex: 1,
  },
  loading_ctn:{
    flex: 1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center'
  }
});
