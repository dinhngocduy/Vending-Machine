import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../../../../../res/colors';
import { NoteLabelProps } from './note-babel.props';

export const NoteLabelComponent = (props: NoteLabelProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.label, { backgroundColor: props.color }]} />
      <Text style={styles.text}>{props.label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  label: {
    height: 20,
    width: 20,
    borderRadius: 4,
    marginRight: 8,
  },
  text: {
    color: colors.Midnight,
    fontSize: 13,
    fontWeight: '400',
  },
});
