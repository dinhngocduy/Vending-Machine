import { DatePicker } from "libraries/components/date-picker/date-picker";
import { Bar, Line } from "react-chartjs-2";
import "./bar-chart.scss";
import { BarChartAdapter } from "./bar-chart.adapter";

export const BarChart = () => {
  const { listTimePicker, setTime, labels, chartData } = BarChartAdapter();

  var data = {
    labels,
    datasets: [
      {
        label: "Số sản phẩm bán ra",
        // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        data: chartData.map((item) => item.value),

        borderColor: "#2596be",
        backgroundColor: "rgba(37, 150, 190, 0.5)",
      },
    ],
  };

  const options = {
    indexAxis: "y" as const,
    type: "time",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
      },
      title: {
        display: true,
        text: "Chart.js Horizontal Bar Chart",
      },
    },
  };

  return (
    <div className="bar-chart-ctn">
      <div className="bar-chart-header">
        <h1 className="bar-chart-title">Thống kê top mặt hàng bán chạy</h1>
        <DatePicker listData={listTimePicker} onChange={setTime} />
      </div>
      {/* {renderChart()} */}
      <Bar options={options} data={data} />
    </div>
  );
};
