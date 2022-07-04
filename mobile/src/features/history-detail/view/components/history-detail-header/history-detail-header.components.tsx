import { TypeTask } from 'enum/type-task';
import moment from 'moment';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import colors from 'res/colors';
import svgs from 'res/svgs';
import { HistoryDetailHeaderProps } from './history-detail-header.props';

export const HistoryDetailHeaderComponent = (props: HistoryDetailHeaderProps) => {
  const { item, type } = props;
  const checkIcon = () => {
    switch (type) {
      case TypeTask.FIX_ERROR:
        return svgs.task_icon.fix_err_success;
      case TypeTask.WITHDRAW_MONEY:
        return svgs.task_icon.withdraw_money;
      case TypeTask.LOAD_GOODS:
        return svgs.task_icon.load_good;
      default:
        return '';
    }
  };

  const renderDescripton = () => {
    switch (type) {
      case TypeTask.FIX_ERROR:
        return (
          <View style={styles.row_wrap}>
            <Text style={styles.label}>Tình trạng:</Text>
            <View style={styles.status_err_ctn}>
              <Text style={styles.status_err_text}>Đã sửa</Text>
            </View>
          </View>
        );
      case TypeTask.LOAD_GOODS:
        return (
          <View style={styles.row_wrap}>
            <Text style={styles.label}>Nội dung:</Text>
            <Text style={styles.value_text}>Tiếp hàng</Text>
          </View>
        );
      case TypeTask.WITHDRAW_MONEY:
        return null;
      default:
        return null;
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: type === TypeTask.WITHDRAW_MONEY ? '#fff' : '',
          flex: type === TypeTask.WITHDRAW_MONEY ? 1 : 0,
        },
      ]}
    >
      <View style={styles.header}>
        <SvgXml height={48} width={48} xml={checkIcon()} style={styles.icon} />
        <View>
          <Text style={styles.id_text}>{'#' + item.id}</Text>
          <Text style={styles.name_text}>{item.machine}</Text>
        </View>
      </View>
      <View style={styles.description_ctn}>
        <View style={styles.row_wrap}>
          <Text style={styles.label}>Thời gian:</Text>
          <Text style={styles.value_text}>{moment(item.time).format('hh:mm DD/MM/yyyy')}</Text>
        </View>
        {renderDescripton()}
        <View style={styles.row_wrap}>
          <Text style={styles.label}>Nhân viên:</Text>
          <Text style={styles.value_text}>{item.staff}</Text>
        </View>
        <View style={styles.row_wrap}>
          <Text style={styles.label}>Địa điểm:</Text>
          <Text style={styles.value_text}>{item.location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#EEF0F7',
    borderBottomWidth: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  header: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  id_text: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.primaryColor,
    paddingVertical: 3,
  },
  icon: {
    marginRight: 12,
  },
  name_text: {
    fontWeight: '700',
    color: colors.Midnight,
    marginBottom: 10,
    fontSize: 16,
  },
  description_ctn: {
    paddingVertical: 10,
  },
  row_wrap: {
    paddingVertical: 6,
    flexDirection: 'row',
  },
  label: {
    width: '30%',
    fontSize: 14,
    fontWeight: '400',
    color: '#4D5971',
  },
  value_text: {
    flex: 1,
    fontSize: 14,
    fontWeight: '400',
    color: '#4D5971',
  },
  status_err_ctn: {
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 4,
    backgroundColor: colors.Jade_Green,
  },
  status_err_text: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '500',
  },
});
