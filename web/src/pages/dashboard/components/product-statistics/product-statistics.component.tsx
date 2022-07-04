import { DatePicker } from "libraries/components/date-picker/date-picker";
import { MultiDatePicker } from "libraries/components/multi-date-picker/multi-date-picker";
import { ENUM_TIME_FILTER } from "libraries/enums/enum-time-filter";
import moment from "moment";
import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "./product-statistics.scss";
export const ProductStatisticsComponent = () => {
  const listTimePicker: string[] = [
    ENUM_TIME_FILTER.DAY,
    ENUM_TIME_FILTER.WEEK,
    ENUM_TIME_FILTER.MONTH,
    ENUM_TIME_FILTER.YEAR,
  ];
  const [time, setTime] = useState<string>(listTimePicker[0]);

  const chartColors = ["#03BD5B", "#4A90E2", "#F5A623", "#FF1C45"];

  const data = {
    maintainAspectRatio: false,
    responsive: false,
    labels: ["Đồ ăn", "Đồ uống", "Đồ chơi", "Đồ ăn vặt"],
    datasets: [
      {
        data: [300, 50, 100, 50],
        backgroundColor: chartColors,
        hoverBackgroundColor: chartColors,
        fillColor: chartColors,
      },
    ],
  };

  const renderCardStatistic = (label: string, value: number, color: string) => {
    return (
      <div className="card-statistics-detail">
        <span className="value" style={{ color: color }}>
          {value}
        </span>
        <span className="label" style={{ color: color }}>
          {label}
        </span>
      </div>
    );
  };

  const pieOptions = {
    maintainAspectRatio: false,

    legend: {
      display: false,
      position: "left",
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };

  return (
    <div className="product-statistic-ctn">
      <div className="product-statistics-header">
        <div className="titleHeader">
          <span className="title">Tổng số sản phẩm bán ra</span>
        </div>
        <div className="datePicker">
          <div>
            <DatePicker listData={listTimePicker} onChange={setTime} />
          </div>
        </div>
      </div>

      <div className="product-statistics-body">
        <div className="left-component">
          <Doughnut data={data} options={pieOptions} height={250} />
        </div>
        <div className="right-component">
          <div className="row">
            {renderCardStatistic("Tổng sản phẩm", 31350, "#2D3540")}
          </div>
          <div className="row">
            {renderCardStatistic("Đồ ăn", 16280, chartColors[0])}
            {renderCardStatistic("Đồ uống", 16280, chartColors[1])}
          </div>
          <div className="row">
            {renderCardStatistic("Đồ chơi", 15070, chartColors[2])}
            {renderCardStatistic("Đồ ăn vặt", 15070, chartColors[3])}
          </div>
        </div>
      </div>
    </div>
  );
};
