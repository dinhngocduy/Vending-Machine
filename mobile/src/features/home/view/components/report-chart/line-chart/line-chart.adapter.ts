import { ENUM_TIME_FILTER } from 'enum/enum-time-filter';
import { useEffect, useState } from 'react';
import {
  generate24Hour,
  generate7Day,
  generate30Day,
  generate1Year,
} from 'utils/functions/generate-label-chart';
import { HomeAdapter } from '../../../../../../../../vending-core/model-home/home.adapter';
import { LineChartProps } from './line-chart.props';

export const LineChartAdapter = (props: LineChartProps) => {
  
  const { getStatistialPayment } = HomeAdapter();
  const { timeFilter } = props;
  const [patternKey, setPatternKey] = useState<number>(0);
  const [chartData, setChartData] = useState<any[]>([{ label: 0, value: 0 }]);
  const [labels, setLabels] = useState<any[]>(generate24Hour());

  useEffect(() => {
    if (timeFilter === ENUM_TIME_FILTER.DAY) {
      setLabels(generate24Hour());
      setPatternKey(0);
    }
    if (timeFilter === ENUM_TIME_FILTER.WEEK) {
      setLabels(generate7Day());
      setPatternKey(1);
    }
    if (timeFilter === ENUM_TIME_FILTER.MONTH) {
      setLabels(generate30Day());
      setPatternKey(2);
    }

    if (timeFilter === ENUM_TIME_FILTER.YEAR) {
      setLabels(generate1Year());
      setPatternKey(3);
    }
  }, [timeFilter]);

  //
  useEffect(() => {
    getStatistialPaymentData();
  }, [labels]);

  useEffect(() => {
    console.log('CHART DATA : ', chartData);
  }, [chartData]);

  // map data
  const mapDataStatistial = (res: any) => {
    var list: any[] = [];
    labels.map((item) => {
      // console.log("map data : ", item, " --- ", res[item]);

      list.push({
        label: item,
        value: (res[item] && res[item]) || 0,
      });
    });

    setChartData(list);
  };

  // get statistial product
  const getStatistialPaymentData = () => {
    const params = {
      patternKey: patternKey,
    };
    getStatistialPayment(params).then((res: any) => {
      console.log('Statistial Payment data :', res);
      mapDataStatistial(res?.data);
    });
  };

  return {
    chartData,
  };
};
