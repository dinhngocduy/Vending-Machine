import { TypeTask } from 'enum/type-task';
import moment from 'moment';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import colors from '../../../../../../res/colors';
import svgs from '../../../../../../res/svgs';
import { ListFixBugItemProps } from './list-fix-bug-item.props';

export const ListFixBugItemComponent = (props: ListFixBugItemProps) => {
  const { item, onPress } = props;
  const onPressItem = () => {
    onPress(item, TypeTask.FIX_ERROR);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressItem}>
        <View style={styles.row}>
          <SvgXml height={20} width={20} xml={svgs.icon.clock} />
          <Text style={styles.time_text}>
            {moment(item.start_time).format('hh:mm DD/MM/yyyy') +
              ' - ' +
              moment(item.ennd_time).format('hh:mm DD/MM/yyyy')}
          </Text>
        </View>
        <View style={styles.info_wrap}>
          <Text style={styles.id_text}>{'#' + item.id}</Text>
          <Text style={styles.name_text}>{item.machine}</Text>
          <View style={[styles.row, { marginBottom: 4 }]}>
            <SvgXml height={16} width={16} xml={svgs.icon.user} />
            <Text style={styles.staff_name}>{item.staff}</Text>
          </View>
          <View style={styles.row}>
            <SvgXml height={16} width={16} xml={svgs.icon.loaction_black} />
            <Text style={styles.staff_name}>{item.location}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderColor: colors.Athens_Gray,
    borderBottomWidth: 1,
  },
  time_text: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.Midnight,
    marginLeft: 5,
    flex: 1,
  },

  money_text: {
    color: colors.Sunset_Red,
    fontWeight: '700',
  },

  id_text: {
    color: colors.primaryColor,
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 20,
    marginBottom: 4,
  },
  name_text: {
    fontSize: 16,
    color: colors.Midnight,
    fontWeight: '700',
    marginBottom: 4,
    lineHeight: 23,
  },
  staff_name: {
    fontWeight: '400',
    color: colors.Midnight,
    marginLeft: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info_wrap: {
    paddingLeft: 20,
    paddingTop: 8,
  },
});
