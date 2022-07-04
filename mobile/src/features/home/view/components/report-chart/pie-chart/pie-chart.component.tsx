import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-svg';
import { PieChart } from 'react-native-gifted-charts';
import colors from '../../../../../../res/colors';

const pieData = [
  { value: 50, color: '#03BD5B' },
  { value: 40, color: '#4A90E2' },
  { value: 20, color: '#FF4C54' },
  { value: 10, color: '#F5A623' },
];

 export const PieChartComponent = () => {
  return (
    <View style={styles.container}>       
      <PieChart
        showText
        textColor="black"
        radius={120}
        textSize={20}
        showTextBackground
        textBackgroundRadius={26}
        data={pieData}
        donut={true}
      />
      <View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});
