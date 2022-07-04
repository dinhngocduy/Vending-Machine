import { TypeTask } from 'enum/type-task';
import moment from 'moment';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import colors from 'res/colors';
import svgs from 'res/svgs';
import { TaskDetailHeaderProps } from './task-detail-header.props';

export const TaskDetailHeaderComponent = (props: TaskDetailHeaderProps) => {
  const { task } = props;

  const checkIcon = () => {
    switch (task.type) {
      case TypeTask.FIX_ERROR:
        return svgs.task_icon.error;
      case TypeTask.WITHDRAW_MONEY:
        return svgs.task_icon.withdraw_money;
      case TypeTask.LOAD_GOODS:
        return svgs.task_icon.load_good;
      default:
        return '';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SvgXml height={48} width={48} xml={checkIcon()} style={styles.icon} />
        <View>
          <Text style={styles.id_text}>{'#' + task.id}</Text>
          <Text style={styles.name_text}>{task.machineName}</Text>
        </View>
      </View>
      <View style={styles.description_ctn}>
        <View style={styles.row_wrap}>
          <Text style={styles.label}>Thời gian:</Text>
          <Text style={styles.value_text}>{moment(task.time).format('hh:mm DD/MM/yyyy')}</Text>
        </View>
        {task.type === TypeTask.FIX_ERROR ? (
          <View style={styles.row_wrap}>
            <Text style={styles.label}>Tình trạng:</Text>
            <View style={styles.status_err_ctn}>
              <Text style={styles.status_err_text}>Chưa sửa</Text>
            </View>
          </View>
        ) : (
          <View style={styles.row_wrap}>
            <Text style={styles.label}>Nội dung:</Text>
            <Text style={styles.value_text}>{task.description}</Text>
          </View>
        )}

        <View style={styles.row_wrap}>
          <Text style={styles.label}>Nhân viên:</Text>
          <Text style={styles.value_text}>{task.staff}</Text>
        </View>
        <View style={styles.row_wrap}>
          <Text style={styles.label}>Địa điểm:</Text>
          <Text style={styles.value_text}>{task.location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#EEF0F7',
    borderBottomWidth: 2,
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
    backgroundColor: colors.Sunset_Red,
  },
  status_err_text: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '500',
  },
});
