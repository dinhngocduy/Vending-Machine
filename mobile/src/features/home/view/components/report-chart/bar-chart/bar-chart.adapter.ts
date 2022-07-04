import { ENUM_TIME_FILTER } from 'enum/enum-time-filter';
import { useState, useEffect } from 'react';
import {
  generate24Hour,
  generate7Day,
  generate30Day,
  generate1Year,
} from 'utils/functions/generate-label-chart';
import { HomeAdapter } from '../../../../../../../../vending-core/model-home/home.adapter';
import { BarChartProps } from './bar-chart.props';

export const BarChartAdapter = (props: BarChartProps) => {
  const { timeFilter } = props;
  const { getStatistialProduct } = HomeAdapter();

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
    getStatistialProductData();
  }, [labels]);

  useEffect(() => {
  }, [chartData]);

  // map data
  const mapDataStatistial = (res: any) => {
    var list: any[] = [];
    labels.map((item) => {
      list.push({
        label: item,
        value: (res[item] && res[item]) || 0,
      });
    });

    setChartData(list);
  };

  // get statistial product
  const getStatistialProductData = () => {
    const params = {
      patternKey: patternKey,
    };
    getStatistialProduct(params).then((res) => {
      // console.log("Statistial Product data :", res);
      mapDataStatistial(res?.data);
    });
  };

  return {
    labels,
    chartData,
  };
};
