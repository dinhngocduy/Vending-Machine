import { ProcessComponent } from 'libraries/process-components/process.component';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { convertToCurrency } from 'utils/functions/convertToCurrency';
import colors from '../../../../../../res/colors';
import { ListMachineItemProps } from './list-machine-item.props';

export const ListMachineItemComponent = (props: ListMachineItemProps) => {
  const { error, fullCash, outOfStock, id, name, turnover, process } = props;

  const renderStatusTag = () => {
    return (
      <View style={styles.status_tag_wrap}>
        {error ? (
          <View style={[styles.status_tag_ctn, { backgroundColor: colors.Sunset_Red }]}>
            <Text style={styles.status_tag_text}>Máy lỗi</Text>
          </View>
        ) : null}
        {outOfStock ? (
          <View style={[styles.status_tag_ctn, { backgroundColor: colors.warning }]}>
            <Text style={styles.status_tag_text}>Hết hàng</Text>
          </View>
        ) : null}
        {fullCash ? (
          <View style={[styles.status_tag_ctn, { backgroundColor: colors.Dodger_Blue }]}>
            <Text style={styles.status_tag_text}>Tiền đầy</Text>
          </View>
        ) : null}
      </View>
    );
  };

  return (
    <View>
      <TouchableOpacity onPress={props.onPress} style={styles.constainer}>
        <View style={styles.process_ctn}>
          <ProcessComponent
            percentage={process || 0}
            radius={28}
            duration={1000}
            strokeWidth={5}
            color={colors.Jade_Green}
            delay={0}
          />
        </View>
        <View style={styles.info_wrap}>
          <Text style={styles.id_text}>{'#' + id}</Text>
          <Text style={styles.name_text}>{name}</Text>
          <Text style={styles.turnover_title}>
            Tiền trong máy: <Text style={styles.turnover}>{convertToCurrency(turnover)}</Text>
          </Text>
          {renderStatusTag()}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginBottom: 1,
  },
  process_ctn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  info_wrap: {
    marginLeft: 16,
  },
  id_text: {
    color: colors.primaryColor,
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 20,
  },
  name_text: {
    fontSize: 16,
    color: colors.Midnight,
    fontWeight: '700',
    marginBottom: 4,
    lineHeight: 23,
  },
  turnover_title: {
    color: colors.Pale_Sky,
    fontSize: 14,
    fontWeight: '400',
  },
  turnover: {
    color: colors.Cobalt,
    fontSize: 14,
    fontWeight: '700',
  },
  status_tag_wrap: {
    flexDirection: 'row',
    paddingTop: 6,
    height:28
  },
  status_tag_ctn: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  status_tag_text: {
    fontSize: 12,
    fontWeight: '400',
    color: '#fff',
  },
});
