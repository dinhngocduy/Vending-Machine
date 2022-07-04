import { useState } from "react";
import { Pie } from "react-chartjs-2";
import "./payment-statistics.scss";

export const PaymentStatisticsComponent = () => {
  const [option, setOption] = useState<number>(0);
  const chartColors = ["#D0021B", "#F5A623", "#03BD5B"];
  const [dataChart, setDataChart] = useState<number[]>([30, 50, 100]);
  const data = {
    maintainAspectRatio: false,
    responsive: false,
    labels: ["Khu vực Hà Nội", "Khu vực TP HCM", "Khu vực khác"],
    datasets: [
      {
        data: dataChart,
        backgroundColor: chartColors,
        hoverBackgroundColor: chartColors,
      },
    ],
  };
  const pieOptions = {
    maintainAspectRatio: false,

    legend: {
      display: false,
      position: "right",
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };

  const renderLabel = (label: string, color: string) => {
    return (
      <div className="triangle-ctn">
        <div className="triangle" style={{ borderBottomColor: color }} />
        <span className="triangle-title" style={{ color: color }}>
          {label}
        </span>
      </div>
    );
  };

  return (
    <div className="payment-statistic-container">
      <div className="payment-statistic-header">
        <span className="title"> Báo cáo theo hình thức thanh toán</span>
      </div>
      <div className="payment-statistic-body">
        <div className="chart-ctn">
          <div className="pieChart">
            <Pie data={data} options={pieOptions} height={200} />
          </div>

          <div
            style={{
              justifyContent: "flex-end",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
            className="chartLegend"
          >
            {renderLabel("Khu vực Hà Nội", "#D0021B")}
            {renderLabel("Khu vực TP HCM", "#F5A623")}
            {renderLabel("Khu vực khác", "#03BD5B")}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <div className="option-btn">
            <span
              className={`option-btn-item ${option === 0 ? "active" : ""}`}
              style={{ borderRightWidth: 1 }}
              onClick={() => {
                setOption(0);
                setDataChart([30, 50, 100]);
              }}
            >
              Tiền mặt
            </span>
            <span
              className={`option-btn-item ${option === 1 ? "active" : ""}`}
              style={{ borderRightWidth: 1 }}
              onClick={() => {
                setOption(1);
                setDataChart([90, 50, 40]);
              }}
            >
              Momo
            </span>
            <span
              className={`option-btn-item ${option === 2 ? "active" : ""}`}
              onClick={() => {
                setOption(2);
                setDataChart([120, 40, 20]);
              }}
            >
              Thẻ ngân hàng
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
