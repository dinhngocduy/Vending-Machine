import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import svgs from 'res/svgs';
import colors from '../../../../../../res/colors';
import { ListLocationItemProps } from './list-location-item.props';

export const ListLocationItemComponent = (props: ListLocationItemProps) => {
  return (
    <View style={styles.container}>
      <SvgXml height={20} width={20} xml={svgs.icon.location} />
      <Text style={styles.location_text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: colors.Athens_Gray,
  },
  location_text: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.Midnight,
    flex: 1,
    marginLeft: 8,
  },
});
