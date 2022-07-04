import { TypeTask } from 'enum/type-task';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ListProductData from 'sample-data/list-product';

import colors from '../../../../../res/colors';
import { LoadGoodItemComponent } from './load-good-item/load-good-item.component';
import { LoadGoodItemProps } from './load-good-item/load-good-item.props';

import { TaskDetailContentProps } from './task-detail-content.props';

export const TaskDetailContentComponent = (props: TaskDetailContentProps) => {
  const { task } = props;

  const renderProductItem = (item: LoadGoodItemProps) => {
    return <LoadGoodItemComponent id={item.id} name={item.name} />;
  };

  const renderTitle = () => {
    switch (task.type) {
      case TypeTask.FIX_ERROR:
        return 'THÔNG TIN LỖI';
      case TypeTask.LOAD_GOODS:
        return 'THÔNG TIN NẠP HÀNG';
      case TypeTask.WITHDRAW_MONEY:
        return 'THÔNG TIN RÚT TIỀN';
      default:
        return '';
    }
  };

  const renderButton = () => {
    switch (task.type) {
      case TypeTask.FIX_ERROR:
        return (
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btn_text}>Đã sửa</Text>
          </TouchableOpacity>
        );
      case TypeTask.LOAD_GOODS:
        return (
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btn_text}>Đã nạp hàng</Text>
          </TouchableOpacity>
        );
      case TypeTask.WITHDRAW_MONEY:
        return (
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btn_text}>Đã rút tiền</Text>
          </TouchableOpacity>
        );
    }
  };

  return (
    <View style={styles.root_ctn}>
      <View style={styles.container}>
        <Text style={styles.title}>{renderTitle()}</Text>
        {task.type === TypeTask.LOAD_GOODS ? (
          <View style={styles.flatlist_ctn}>
            <FlatList data={ListProductData} renderItem={({ item }) => renderProductItem(item)} />
          </View>
        ) : (
          <View style={styles.wrap_content}>
            {task.type === TypeTask.FIX_ERROR ? (
              <View>
                <Text style={styles.label}>Tên Lỗi</Text>
                <TextInput style={styles.text_input} placeholder="Nhập tên lỗi" />
              </View>
            ) : (
              <View>
                <Text style={styles.label}>Nhập số tiền đã rút</Text>
                <TextInput
                  style={styles.text_input}
                  placeholder="Nhập tiền đã rút"
                  keyboardType="number-pad"
                />
              </View>
            )}
            <View style={{ marginTop: 20 }}>
              <Text style={styles.label}>Mô tả lỗi</Text>
              <View style={styles.text_area_ctn}>
                <TextInput
                  placeholder="Nhập mô tả về lỗi"
                  multiline={true}
                  style={styles.text_area}
                />
              </View>
            </View>
          </View>
        )}
      </View>
      <View style={styles.btn_ctn}>{renderButton()}</View>
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
    fontWeight: '700',
    color: colors.Midnight,
    lineHeight: 21,
    marginBottom: 2,
  },
  text_input: {
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.Athens_Gray,
    paddingHorizontal: 10,
  },
  text_area_ctn: {
    backgroundColor: '#fff',
    height: 130,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.Athens_Gray,
    paddingHorizontal: 10,
  },
  text_area: {
    // height: '100%',
  },
  btn_ctn: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderColor: colors.Athens_Gray,
    borderTopWidth: 1,
  },
  btn: {
    paddingVertical: 12,
    backgroundColor: colors.primaryColor,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_text: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '500',
  },
});
