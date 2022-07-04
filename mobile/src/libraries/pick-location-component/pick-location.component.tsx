import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import colors from 'res/colors';
import svgs from '../../res/svgs';
import { PickLocationProps } from './pick-location.props';

export const PickLocationComponent = (props: PickLocationProps) => {
  return (
    <View>
      <TouchableOpacity style={styles.location_choose_ctn} onPress={props.onPress}>
        <Text style={styles.location_text}>Vị trí</Text>
        <SvgXml height={16} width={16} xml={svgs.icon.drop_down} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  location_choose_ctn: {
    // width: '30%',
    width: 110,
    height: 44,
    borderWidth: 1,
    borderColor: '#CCCFD6',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 4,
    marginLeft: 12,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  location_text: {
    fontSize: 14,
    color: colors.Bombay,
    flex: 1,
  },
});
