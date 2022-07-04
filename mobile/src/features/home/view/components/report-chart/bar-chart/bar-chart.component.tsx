import React from 'react';
import { View, Text } from 'react-native';
// import { BarChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';
import { BarChart, LineChart, PieChart } from 'react-native-gifted-charts';
import colors from '../../../../../../res/colors';
import { BarChartAdapter } from './bar-chart.adapter';
import { BarChartProps } from './bar-chart.props';

export const BarChartComponent = (props: BarChartProps) => {
  const { chartData } = BarChartAdapter(props);

  const map = () => {
    const result = chartData.map((element) => {
      const data: any = {
        label: element.label,
        value: element.value,
        topLabelComponent: () => (
          <Text style={{ color: 'rgba(37, 150, 190, 1)', fontSize: 12, marginBottom: 6 }}>{element.value}</Text>
        ),
      };
      return data;
    });
    console.log("CHART BAR DATA : ", result);
    return result
    
  };

  return (
    <View style={{ height: 200, padding: 20, flexDirection: 'row' }}>
      <BarChart
        isAnimated
        data={map()}
        scrollAnimation={true}
        width={280}
        frontColor={'rgba(212, 237, 251, 1)'}
        yAxisColor="lightgray"
        xAxisColor="lightgray"
        barWidth={40}
        noOfSections={5}
        activeOpacity = {1}    
      />
    </View>
  );
};
