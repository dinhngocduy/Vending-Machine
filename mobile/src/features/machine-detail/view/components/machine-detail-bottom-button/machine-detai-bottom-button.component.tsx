import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../../../../res/colors';

export const MachineDetailBottomButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.btn_ctn, { backgroundColor: colors.Jade_Green }]}>
        <Text style={styles.btn_text}>Nạp hàng</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn_ctn, { backgroundColor: colors.primaryColor }]}>
        <Text style={styles.btn_text}>Rút tiền</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: colors.Athens_Gray,
  },
  btn_ctn: {
    width: '45%',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 8,
  },
  btn_text: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '500',
  },
});
