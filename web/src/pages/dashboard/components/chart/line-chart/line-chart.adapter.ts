import { ENUM_TIME_FILTER } from "libraries/enums/enum-time-filter";
import {
  generate24Hour,
  generate30Day,
  generate7Day,
  generate1Year,
} from "libraries/utils/generate-label-chart";
import { useEffect, useState } from "react";
import { HomeAdapter } from "vending-core/model-home/home.adapter";

export const LineChartAdapter = () => {
  const listTimePicker: string[] = [
    ENUM_TIME_FILTER.DAY,
    ENUM_TIME_FILTER.WEEK,
    ENUM_TIME_FILTER.MONTH,
    ENUM_TIME_FILTER.YEAR,
  ];

  const { getStatistialPayment } = HomeAdapter();

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
    getStatistialPaymentData();
  }, [labels]);

  useEffect(() => {
    console.log("CHART DATA : ", chartData);
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
      console.log("Statistial Payment data :", res);
      mapDataStatistial(res?.data);
    });
  };

  return {
    listTimePicker,
    time,
    setTime,
    labels,
    chartData,
  };
};
