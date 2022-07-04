import { TypeTask } from 'enum/type-task';
import { TitleBar } from 'libraries/title-bar/title-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HistoryDetialContentComponent } from './components/history-detail-content/history-detail-content.component';
import { HistoryDetailHeaderComponent } from './components/history-detail-header/history-detail-header.components';
import { MoneyComponent } from './components/money-component/money-component';

export const HistoryDetailContainer = (props: any) => {
  const item = props.navigation.getParam('item');
  const type = props.navigation.getParam('type');

  const renderTitle = () => {
    switch (type) {
      case TypeTask.FIX_ERROR:
        return 'Lịch sử sửa lỗi';
      case TypeTask.LOAD_GOODS:
        return 'Lịch sử nạp hàng';
      case TypeTask.WITHDRAW_MONEY:
        return 'Lịch sử rút tiền';
      default:
        return '';
    }
  };

  return (
    <View style={styles.cotainer}>
      <TitleBar title={renderTitle()} back={true} />
      {type === TypeTask.WITHDRAW_MONEY ? <MoneyComponent /> : null}
      <HistoryDetailHeaderComponent item={item} type={type} />
      {type === TypeTask.WITHDRAW_MONEY ? null : (
        <HistoryDetialContentComponent item={item} type={type} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
  },
});
