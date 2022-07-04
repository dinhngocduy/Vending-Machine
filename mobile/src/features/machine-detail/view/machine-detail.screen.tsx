import { IMachine } from 'enum/machine';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListProductComponent } from './components/list-product/list-product.component';
import { MachineDetailBottomButton } from './components/machine-detail-bottom-button/machine-detai-bottom-button.component';
import { MachineDetailHeaderProps } from './components/machine-detail-header/machine-datail-header.props';
import { MachineDetailHeaderComponent } from './components/machine-detail-header/machine-detail-header.component';

export const MachineDetailContainer = (props: any) => {
  const machine: IMachine = props.navigation.getParam('machine');
  console.log('MACHINE DETAIL :', machine);

  return (
    <View style={styles.container}>
      <MachineDetailHeaderComponent
        id={machine?.machine?.identifyCode}
        name={machine?.machine?.referenceName}
        location={machine?.machine?.address}
        error={'OGo6Jq0qfhBP0Bjuro003001' ? false : true}
        fullCash={'OGo6Jq0qfhBP0Bjuro003001' ? false : true}
        turnover={machine?.cashInMachine}
        process={parseInt(((machine?.remainProducts / machine?.totalProducts) * 100).toFixed(0))}
        outOfStock={'OGo6Jq0qfhBP0Bjuro003001' ? false : true}
        remainProduct={machine?.remainProducts}
        totalProduct={machine?.totalProducts}
      />
      <View style={styles.list_product_ctn}>
        <ListProductComponent machine={machine} />
      </View>
      <MachineDetailBottomButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  list_product_ctn: {
    flex: 1,
  },
});
