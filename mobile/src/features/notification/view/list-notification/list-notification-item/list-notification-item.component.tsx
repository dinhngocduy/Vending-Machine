import { NOTICATION_TYPE } from 'enum/notification';
import moment from 'moment';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import colors from 'res/colors';
import svgs from 'res/svgs';
import { ListNotificationItemProps } from './list-notification-item.props';

export const ListNotificationItemComponent = (props: ListNotificationItemProps) => {
  const { item, onPress } = props;

  const renderIcon = () => {
    switch (item.type) {
      case NOTICATION_TYPE.WARNING_HIGH_TEMPERATURE:
        return svgs.notication_icon.temperature;
      case NOTICATION_TYPE.WARNING_MOTOR:
        return svgs.notication_icon.motor;
      case NOTICATION_TYPE.ALERT_SOLD_OUT:
        return svgs.notication_icon.fill_product;
      case NOTICATION_TYPE.WARNING_CASH:
        return svgs.notication_icon.card_err;
      case NOTICATION_TYPE.ALERT_FULL_CASH:
        return svgs.notication_icon.cash;
      case NOTICATION_TYPE.OPEN_MACHINE:
        return svgs.notication_icon.open_door;

      default:
        return svgs.notication_icon.error;
    }
  };

  const renderBg = () => {
    switch (item.type) {
      case NOTICATION_TYPE.WARNING_HIGH_TEMPERATURE:
      case NOTICATION_TYPE.WARNING_MOTOR:
      case NOTICATION_TYPE.WARNING_CASH:
        return colors.error_background;
      case NOTICATION_TYPE.ALERT_SOLD_OUT:
      case NOTICATION_TYPE.ALERT_FULL_CASH:
        return colors.warning_background;
      case NOTICATION_TYPE.OPEN_MACHINE:
        return colors.info_backgroud;
      default:
        return colors.error_background;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: item.read ? '#FFFFFF' : '#F5F8FB' }]}
      onPress={() => onPress(item)}
    >
      <View style={[styles.icon, { backgroundColor: renderBg() }]}>
        <SvgXml width={24} xml={renderIcon()} />
      </View>
      <View style={styles.wrap_ifno}>
        <Text
          style={[
            styles.text,
            { color: item.read ? '#808999' : '#000', fontWeight: item.read ? '400' : '700' },
          ]}
        >
          Máy bán hàng
          <Text style={styles.text_highlight}> Hyper SVM 55 inch </Text> {item.description}
        </Text>
        <Text style={styles.time_stamp}>{moment(item.createdDate).format('hh:mm DD/MM/yyyy')}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    flex: 1,
  },
  wrap_ifno: {
    paddingHorizontal: 12,
  },
  text: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.Midnight,
    maxWidth: '95%',
    marginBottom: 4,
  },
  text_highlight: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primaryColor,
  },
  time_stamp: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.Regent_Gray,
  },
  icon: {
    height: 48,
    width: 48,
    borderRadius: 48,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
