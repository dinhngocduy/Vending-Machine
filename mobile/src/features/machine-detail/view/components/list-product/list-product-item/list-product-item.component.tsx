import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { convertToCurrency } from 'utils/functions/convertToCurrency';
import { getImageUrl } from 'utils/functions/getImageUrl';
import colors from '../../../../../../res/colors';
import { ListProductItemProps } from './list-product-item.props';

export const ListProductItemComponent = (props: ListProductItemProps) => {
  const { id, name, price, stock, capacity, image } = props;
  return (
    <View style={styles.container}>
      <View style={styles.avatar_wrap}>
        <Image
          source={{ uri: getImageUrl(image) }}
          style={styles.avatar}
          resizeMode = 'center'
          resizeMethod = 'scale'
        />
      </View>
      <View style={styles.info_wrap}>
        <View style={styles.id_wrap}>
          <Text style={styles.id_text}>{'#' + id}</Text>
          <View style={styles.tag_ctn}>
            <Text style={styles.tag_text}>{stock + '/' + capacity}</Text>
          </View>
        </View>
        <View style={styles.name_wrap}>
          <Text style={styles.name_text}>{name}</Text>
          <Text style={styles.price_text}>{convertToCurrency(price)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: colors.Athens_Gray,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 4,
    borderWidth: 1,
    // backgroundColor: '#E6E8EB', 
    padding: 4
  },
  avatar_wrap: {
    marginRight: 16,
  },
  info_wrap: {
    flex: 1,
  },

  id_text: {
    fontSize: 13,
    color: colors.primaryColor,
    fontWeight: '500',
    flex: 1,
  },
  name_text: {
    color: colors.Midnight,
    fontWeight: '700',
    flex: 1,
  },
  price_text: {
    color: colors.Cobalt,
    fontSize: 14,
    fontWeight: '500',
  },
  id_wrap: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  name_wrap: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  tag_ctn: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    backgroundColor: colors.primaryColor,
  },
  tag_text: {
    fontSize: 13,
    fontWeight: '500',
    color: '#fff',
  },
});
