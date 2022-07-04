import { DatePicker } from "libraries/components/date-picker/date-picker";
import { ArrowGreenIcon } from "libraries/icons/icon";
import convertToCurrency from "libraries/utils/convert-to-currency";
import { useState } from "react";
import Chart from "react-chartjs-2";
import { RevenueStatisticsAdapter } from "./revenue-statistics.adapter";
import "./revenue-statistics.scss";

export const RevenueStatisticsComponent = () => {
  const { listTimePicker, setTime, labels, chartData } =
    RevenueStatisticsAdapter();
  const [option, setOption] = useState<number>(0);

  const data = {
    labels,
    datasets: [
      {
        type: "line",
        label: "Doanh thu",
        borderColor: "#4A90E2",
        borderWidth: 1,
        fill: false,
        data: chartData.map((item) => item.value1),
        tension: 0,
        spanGaps: true,
        pointBackgroundColor: "#fff",
        yAxisID: "y-axis-1",
      },
      {
        type: "bar",
        label: "Sản phẩm",
        backgroundColor: "#D4EDFB",
        data: chartData.map((item) => item.value2),
        borderColor: "white",
        borderWidth: 0,
        yAxisID: "y-axis-2",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      callbacks: {
        label: function (tooltipItem: any, data: any) {
          console.log("DATA CHART : ", tooltipItem);
          if (tooltipItem.datasetIndex === 0) {
            return (
              "Doanh thu: " + convertToCurrency(tooltipItem.yLabel + "VND")
            );
          }
          return "Sản phẩm: " + tooltipItem.yLabel;
        },
      },
    },
    scales: {
      xAxes: [
        {
          stacked: true,
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          stacked: false,
          position: "left",
          type: "linear",
          id: "y-axis-1",
          ticks: {
            beginAtZero: true,
            callback: function (tick: any, index: any, ticks: any) {
              return convertToCurrency(tick + "");
            },
          },
          scaleLabel: {
            display: true,
            labelString: "Doanh thu",
            fontSize: 13,
          },
        },
        {
          stacked: false,
          position: "right",
          type: "linear",
          id: "y-axis-2",
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          },
          ticks: {
            beginAtZero: true,
          },
          scaleLabel: {
            display: true,
            labelString: "Sản phẩm",
            fontSize: 13,
          },
        },
      ],
    },
  };

  return (
    <div className="revenue-statistics-container">
      <div className="revenue-statistics-header">
        <div className="titleHeader">
          <span className="title">Thống kê doanh thu bán hàng</span>
        </div>
        <div className="option-btn">
          <span
            className={`option-btn-item ${option === 0 ? "active" : ""}`}
            style={{ borderRightWidth: 1, width: "50%" }}
            onClick={() => {
              setOption(0);
            }}
          >
            Số tiền
          </span>
          <span
            className={`option-btn-item ${option === 1 ? "active" : ""}`}
            style={{ width: "50%" }}
            onClick={() => {
              setOption(1);
            }}
          >
            Tỉ trọng
          </span>
        </div>
        <div>
          <div style={{ paddingRight: "2%" }}>
            {/* <MultiDatePicker date={date} setDate={setDate} /> */}
            <DatePicker listData={listTimePicker} onChange={setTime} />
          </div>
        </div>
      </div>
      <div className="revenue-statistics-body">
        <div className="left-component">
          <div style={{ paddingTop: 40, width: "100%" }}>
            <Chart type="bar" data={data} options={options} height={300} />
          </div>
        </div>
        <div className="right-component">
          <div className="total-revenue-ctn">
            <span className="right_title">Tổng doanh thu</span>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <span className="total-revenue">5.000.000đ</span>
              <div className="growth-value-ctn">
                <ArrowGreenIcon />
                <span
                  className="growth-value"
                  style={{ fontWeight: 700, color: "#08A781" }}
                >
                  20,57%
                </span>
              </div>
            </div>
            <div className="row-detail">
              <span className="label">Khu vực Hà Nội</span>
              <span className="value">20</span>
            </div>
            <div className="row-detail">
              <span className="label">Khu vực Hà Nội</span>
              <span className="value">20</span>
              <div className="growth-value-ctn">
                <ArrowGreenIcon />
                <span className="growth-value">20,57%</span>
              </div>
            </div>
            <div className="row-detail">
              <span className="label">Khu vực Hà Nội</span>
              <span className="value">20</span>
              <div className="growth-value-ctn">
                <ArrowGreenIcon />
                <span className="growth-value">20,57%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
