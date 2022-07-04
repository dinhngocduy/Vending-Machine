import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import svgs from 'res/svgs';
import colors from '../../res/colors';
import { PickTimeProps } from './pick-time.props';

export const PickTimeComponents = (props: PickTimeProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ flexDirection: 'row', flex: 1 }} onPress={props.onPress}>
        <Text style={styles.text}>{props.title}</Text>
        <SvgXml height={16} width={16} xml={svgs.calendar} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 44,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.boder_color_1,
    flexDirection: 'row',
    padding: 10,
    flex: 1,
  },
  text: {
    fontSize: 14,
    color: colors.Regent_Gray,
    flex: 1,
  },
});
