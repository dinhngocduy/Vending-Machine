import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../../../../../../res/colors';
import { HistoryLoadGoodItemProps } from './history-load-good-item.props';

export const HistoryLoadGoodItemComponent = (props: HistoryLoadGoodItemProps) => {
  const { id, name } = props;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: 'https://cf.shopee.vn/file/f6a87bd170eab0d27850ca866bcbc66e' }}
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.id_text}>{'#' + id}</Text>
        <Text style={styles.name_text}>{name}</Text>
      </View>
      <View style={styles.quantity_ctn}>
        <Text style={styles.quantity_text}>
          {' '}
          <Text style={styles.highlight_quantity}> {`+${10}`}</Text> Sản phẩm{' '}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.Athens_Gray,
  },
  image: {
    height: 48,
    width: 48,
    borderRadius: 4,
    borderColor: colors.Athens_Gray,
    borderWidth: 1,
    marginRight: 12,
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
  quantity_ctn: {
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  quantity_text: {
    fontSize: 14,
    color: colors.Midnight,
    fontWeight: '400',
  },
  highlight_quantity: {
    color: colors.Jade_Green,
  },
});
