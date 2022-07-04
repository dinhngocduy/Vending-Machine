import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colos from '../../../../../res/colors';
import { PrameterCtnProps } from './parameter-ctn.props';

export const ParameterCtnComponents = (props: PrameterCtnProps) => {
  const { title, dataColor, data, percent } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.data_ctn}>
        <Text style={[styles.data_text, { color: dataColor }]}>{data}</Text>
        {percent && <Text style={styles.percent_text}>{`(${percent}%)`}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 72,
    width: '30%',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.2)',
    marginHorizontal: 6,
    marginTop: 10,
    padding: 10,
  },
  title: {
    color: colos.Pale_Sky,
    fontSize: 13,
    fontWeight: '400',
  },
  data_ctn: {
    flexDirection: 'row',
    paddingTop: 4,
    alignItems: 'center',
  },
  data_text: {
    fontSize: 18,
    fontWeight: '700',
    paddingHorizontal: 4,
  },
  percent_text: {
    fontSize: 13,
    color: colos.Regent_Gray,
  },
});
