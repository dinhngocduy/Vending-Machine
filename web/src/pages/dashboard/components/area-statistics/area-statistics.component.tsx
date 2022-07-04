import "./area-statistics.scss";
import { HorizontalBar } from "react-chartjs-2";
import convertToCurrency from "libraries/utils/convert-to-currency";

export const AreaStatistics = () => {
  const options = {
    legend: {
      display: false,
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem: any, data: any) {
          return convertToCurrency(tooltipItem.xLabel + "VND");
        },
      },
    },
    plugins: {
      datalabels: {
        color: "#36A2EB",
      },
    },
    maintainAspectRatio: false,
  };

  const labels = [
    "Quận Hai Bà Trưng",
    "Quận Đống Đa",
    "Quận Cầu Giấy",
    "Quận Thanh Xuân",
    "Quận Hoàng Mai",
  ];

  const data = {
    labels,
    datasets: [
      {
        axis: "y",
        label: "Doanh thu",
        data: [127000, 189000, 59000, 165000, 110500],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "#D4EDFB",
      },
    ],
  };

  return (
    <div className="area-statistics-container">
      <div className="area-statistics-header">
        <span className="title">Doanh thu theo khu vực</span>
      </div>
      <div className="area-statistics-body">
        <HorizontalBar data={data} options={options} height={330} />
      </div>
    </div>
  );
};
