import { TypeTask } from 'enum/type-task';
import moment from 'moment';
import React from 'react';
import { StyleSheet, View, Text, FlatList, TextInput } from 'react-native';
import colors from 'res/colors';
import ListProductData from 'sample-data/list-product';
import { HistoryDetailContentProps } from './history-detail-content.props';
import { HistoryLoadGoodItemComponent } from './history-load-good-item/history-load-good-item.component';
import { HistoryLoadGoodItemProps } from './history-load-good-item/history-load-good-item.props';

export const HistoryDetialContentComponent = (props: HistoryDetailContentProps) => {
  const { item, type } = props;

  const renderTitle = () => {
    switch (type) {
      case TypeTask.FIX_ERROR:
        return 'THÔNG TIN LỖI';
      case TypeTask.LOAD_GOODS:
        return 'THÔNG TIN NẠP HÀNG';
      case TypeTask.WITHDRAW_MONEY:
        return '';
      default:
        return '';
    }
  };

  const renderProductItem = (item: HistoryLoadGoodItemProps) => {
    return <HistoryLoadGoodItemComponent id={item.id} name={item.name} />;
  };

  return (
    <View style={styles.root_ctn}>
      <View style={styles.container}>
        <Text style={styles.title}>{renderTitle()}</Text>
        {type === TypeTask.LOAD_GOODS ? (
          <View style={styles.flatlist_ctn}>
            <FlatList data={ListProductData} renderItem={({ item }) => renderProductItem(item)} />
          </View>
        ) : (
          <View style={styles.wrap_content}>
            {type === TypeTask.FIX_ERROR ? (
              <View>
                <View style={styles.row}>
                  <Text style={styles.label}>Tên Lỗi:</Text>
                  <Text style={styles.text_value}>Lỗi máy không nhận được tiền mặt</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.label}>Thời gian lỗi:</Text>
                  <Text style={styles.text_value}>
                    {moment(item.ennd_time).format('hh:mm DD/MM/yyyy')}
                  </Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.label}>Mô tả lỗi:</Text>
                  <Text style={styles.text_value}>
                    Cho tiền mặt vào máy tự trả lại tiền thừ và không thông báo được
                  </Text>
                </View>
              </View>
            ) : null}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root_ctn: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  wrap_content: {
    paddingHorizontal: 16,
  },
  flatlist_ctn: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4D5971',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.Midnight,
    lineHeight: 21,
    marginBottom: 2,
    width: '30%',
  },

  row: {
    flexDirection: 'row',
    marginBottom: 16,
  },

  text_value: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.Midnight,
    lineHeight: 21,
    marginBottom: 2,
    maxWidth: '65%',
  },
});
