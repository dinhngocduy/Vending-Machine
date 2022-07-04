import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from 'res/colors';

export const MoneyComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>-100.000.000 đ</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    alignItems: 'center',
    backgroundColor: '#F5F8FB',
  },
  text: {
    fontSize: 28,
    color: colors.Sunset_Red,
  },
});
