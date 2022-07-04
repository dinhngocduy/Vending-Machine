import { TypeTask } from 'enum/type-task';
import moment from 'moment';
import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import svgs from 'res/svgs';
import colors from '../../../../../../res/colors';
import { ListTaskItemProps } from './list-taxk-item.props';

export const ListTaskItemComponent = (props: ListTaskItemProps) => {
  const { id, machineName, location, time, type } = props;

  const checkIcon = () => {
    switch (type) {
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
    <View>
      <TouchableOpacity style={styles.constainer} onPress={props.onPress}>
        <View style={styles.icon_wrap}>
          <SvgXml height={48} width={48} xml={checkIcon()} />
        </View>
        <View style={styles.info_ctn}>
          <Text style={styles.id_text}>{'#' + id}</Text>
          <Text style={styles.name_text}>{machineName}</Text>
          <View style={styles.bottom_ctn}>
            <View style={styles.time_wrap}>
              <View style={{ flexDirection: 'row', paddingVertical: 4 }}>
                <SvgXml height={16} width={16} xml={svgs.icon.clock} />
                <Text style={styles.time_text}>{moment(time).format('hh:mm DD/MM/yyyy ')}</Text>
              </View>
              <View style={{ flexDirection: 'row', paddingVertical: 4 }}>
                <SvgXml height={16} width={16} xml={svgs.icon.loaction_black} />
                <Text style={styles.time_text}>{location}</Text>
              </View>
            </View>
            <Image
              source={{ uri: 'https://www.w3schools.com/w3images/avatar2.png' }}
              style={styles.avatar}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderColor: colors.Athens_Gray,
    borderBottomWidth: 1,
  },
  id_text: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.primaryColor,
    paddingVertical: 3,
  },
  name_text: {
    fontWeight: '700',
    color: colors.Midnight,
    marginBottom: 10,
    fontSize: 16,
  },
  time_text: {
    fontWeight: '400',
    color: colors.Midnight,
    fontSize: 13,
    marginLeft: 4,
  },
  icon_wrap: {
    marginRight: 12,
  },
  info_ctn: {
    flex: 1,
  },
  time_wrap: {
    flex: 1,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },
  bottom_ctn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
