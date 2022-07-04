import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import colors from '../../../../../res/colors';
import { ReportChartProps } from './report-chart.props';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { NoteLabelComponent } from './note-label/note-label';
import { SvgXml } from 'react-native-svg';
import svgs from 'res/svgs';
import { TypeChart } from 'enum/type-chart';

export const ReportChartComponent = (props: ReportChartProps) => {
  // Line Chart
  const renderLineChart = (timeFilter: string) => {
    return <LineChartComponent timeFilter={timeFilter} />;
  };

  // Pie chart

  const renderPieCahrt = () => {
    return <PieChartComponent />;
  };

  // render Bar Chart
  const renderBarChart = (timeFilter: string) => {
    return <BarChartComponent timeFilter={timeFilter} />;
  };

  const renderBlankChart = () => {
    return (
      <View>
        <View style={styles.chart}>
          <SvgXml height={120} width={120} xml={svgs.no_data_chart} />
        </View>
        <View style={styles.null_text_wrap}>
          <Text style={styles.null_text}> Chưa có dữ liệu </Text>
        </View>
      </View>
    );
  };

  const renderChart = (timeFilter: string) => {
    switch (props.type) {
      case TypeChart.LineChart:
        return renderLineChart(timeFilter);
      case TypeChart.PieChart:
        return renderPieCahrt();
      case TypeChart.BarChart:
        return renderBarChart(timeFilter);
      default:
        return renderBlankChart();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.title_wrap}>
        <View style = {styles.title_border}>
          <Text style={styles.title}> {props.title} </Text>
        </View>
      </View>
      {renderChart(props.time)}
      {/* {props.type != undefined ? (
        <View>
          <View style={styles.note}>
            <NoteLabelComponent label="Tiền mặt" color={colors.Jade_Green} />
            <NoteLabelComponent label="Momo" color={colors.Sunset_Red} />
          </View>
          <View style={styles.note}>
            <NoteLabelComponent label="VNPT Pay" color={colors.Dodger_Blue} />
            <NoteLabelComponent label="Thẻ ngân hàng" color={colors.warning} />
          </View>
        </View>
      ) : null} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width - 32,
    height: Dimensions.get('screen').width - 32,
    backgroundColor: '#fff',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  title_wrap: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection:'row'
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.chart_title,
    paddingBottom: 10
  },
  title_border:{
     borderBottomWidth: 2    ,
     borderColor: '#1890FF'
  },
  note: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  null_text_wrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  null_text: {
    fontSize: 14,
    color: colors.Midnight,
    fontWeight: '700',
    alignItems: 'center',
  },
  chart: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
