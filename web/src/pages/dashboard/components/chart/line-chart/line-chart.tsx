import faker from "faker";
import { DatePicker } from "libraries/components/date-picker/date-picker";
import { ENUM_TIME_FILTER } from "libraries/enums/enum-time-filter";
import convertToCurrency from "libraries/utils/convert-to-currency";
import {
  generate24Hour,
  generate30Day,
  generate7Day,
  generate1Year,
} from "libraries/utils/generate-label-chart";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { LineChartAdapter } from "./line-chart.adapter";
import "./line-chart.scss";

export const LineChart = () => {
  const { listTimePicker, setTime, labels, chartData } = LineChartAdapter();

  const data = {
    labels,
    datasets: [
      {
        label: "Doanh số bán hàng (VND)",
        data: chartData.map((item) => item.value),
        fill: true,
        borderColor: "#900C3F",
        backgroundColor: "rgba(88, 24, 69, 0.2)",
        yAxisID: "y-axis-1",
      },
      // {
      //   label: "# of No Votes",
      //   data: [1, 2, 1, 1, 2, 2],
      //   fill: false,
      //   backgroundColor: "rgb(54, 162, 235)",
      //   borderColor: "rgba(54, 162, 235, 0.2)",
      //   yAxisID: "y-axis-2",
      // },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          type: "linear",
          display: true,
          position: "left",
          id: "y-axis-1",
          ticks: {
            beginAtZero: true,
            callback: function (value: string, index: any, values: any) {
              return convertToCurrency(value.toString());
            },
          },
        },
        // {
        //   type: "linear",
        //   display: true,
        //   position: "right",
        //   id: "y-axis-2",
        //   gridLines: {
        //     drawOnArea: false,
        //   },
        // },
      ],
    },
  };
  return (
    <div className="line-chart-ctn">
      <div className="line-chart-header">
        <h1 className="line-chart-title">Thống kê doanh thu bán hàng</h1>
        <DatePicker listData={listTimePicker} onChange={setTime} />
      </div>
      <Line data={data} options={options} />
    </div>
  );
};
