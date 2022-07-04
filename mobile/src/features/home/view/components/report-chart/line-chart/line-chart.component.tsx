import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { convertToCurrency } from 'utils/functions/convertToCurrency';

import colors from '../../../../../../res/colors';
import { LineChartAdapter } from './line-chart.adapter';
import { LineChartProps } from './line-chart.props';

export const LineChartComponent = (props: LineChartProps) => {
  const { chartData } = LineChartAdapter(props);

  const map = () => {
    return chartData.map((element) => {
      const data: any = {
        label: element.label,
        value: element.value /1000,
        dataPointText: convertToCurrency(element.value),
      };
      return data;
    });
  };

  return (
    <View style={{ height: 200, padding: 20, flexDirection: 'row' }}>
      <LineChart
        // areaChart
        // curved
        isAnimated
        // hideYAxisText
        // hideDataPoints
        // hideAxesAndRules
        dataPointsColor1="#f00"
        data={map()}
        scrollAnimation={true}
        width={280}
        startOpacity={0.8}
        color1={'#4A90E2'}
        animationDuration={3000}
        initialSpacing={20}
        thickness={2}
        yAxisColor="lightgray"
        xAxisColor="lightgray"
        pressEnabled={true}
        showDataPointOnPress={true}
        showTextOnPress={true}
        showStripOnPress={true}
        yAxisLabelWidth = {40}
        textShiftY={-8}
        textShiftX={-10}
        noOfSections={5}
        dataPointsWidth = {20}
        hideDataPoints = {false}
        yAxisLabelSuffix = 'K'
      />
    </View>
  );
};
