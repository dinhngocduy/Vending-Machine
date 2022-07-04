import { ENUM_TIME_FILTER } from "libraries/enums/enum-time-filter";
import {
  generate24Hour,
  generate7Day,
  generate30Day,
  generate1Year,
} from "libraries/utils/generate-label-chart";
import { useEffect, useState } from "react";
import { HomeAdapter } from "vending-core/model-home/home.adapter";

export const RevenueStatisticsAdapter = () => {
  const listTimePicker: string[] = [
    ENUM_TIME_FILTER.DAY,
    ENUM_TIME_FILTER.WEEK,
    ENUM_TIME_FILTER.MONTH,
    ENUM_TIME_FILTER.YEAR,
  ];
  const { getStatistialPayment , getStatistialProduct } = HomeAdapter();

  const [time, setTime] = useState<string>(listTimePicker[0]);
  const [patternKey, setPatternKey] = useState<number>(0);
  const [chartData, setChartData] = useState<any[]>([]);
  const [labels, setLabels] = useState<any[]>(generate24Hour());

  useEffect(() => {
    if (time === ENUM_TIME_FILTER.DAY) {
      setLabels(generate24Hour());
      setPatternKey(0); 
    }
    if (time === ENUM_TIME_FILTER.WEEK) {
      setLabels(generate7Day());
      setPatternKey(1);
    }
    if (time === ENUM_TIME_FILTER.MONTH) {
      setLabels(generate30Day());
      setPatternKey(2);
    }

    if (time === ENUM_TIME_FILTER.YEAR) {
      setLabels(generate1Year());
      setPatternKey(3);
    }
  }, [time]);

  //
  useEffect(() => {
    getChartData();
  }, [labels]);

  useEffect(() => {
    console.log("CHART DATA : ", chartData);
  }, [chartData]);

  // map data
  const mapData = (data1: any, data2: any) => {
    var list: any[] = [];
    labels.map((item) => {
      // console.log("map data : ", data1, " --- ", data2);

      list.push({
        label: item,
        value1: (data1[item] && data1[item]) || 0,
        value2: (data2[item] && data2[item]) || 0
      });
    });

    setChartData(list);
  };

  // get statistial product
  const getChartData = async () => {
    const params = {
      patternKey: patternKey,
    };
    const data1 = await getStatistialPayment(params)
    const data2 = await getStatistialProduct(params)

    mapData(data1?.data, data2?.data);

  };

  return {
    listTimePicker,
    time,
    setTime,
    labels,
    chartData,
  };
};
