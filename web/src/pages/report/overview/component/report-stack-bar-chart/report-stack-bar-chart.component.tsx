import "./report-stack-bar-chart.scss";
import { HorizontalBar } from "react-chartjs-2";

export const ReportStackBarChart = () => {
  const labels = ["Hà Nội", "Hà Nội", "Hà Nội", "Hà Nội", "Hà Nội"];

  const data = {
    labels,
    datasets: [
      {
        label: "Sản phẩm",
        backgroundColor: "#F7BA1E",
        data: [12, 5, 6, 20, 10],
        borderColor: "white",
        borderWidth: 0,
        axis: "y-axis-1",
      },
      {
        label: "Doanh thu",
        backgroundColor: "#165DFF",
        data: [4, 15, 10, 3, 20],
        borderColor: "white",
        borderWidth: 0,
        axis: "y-axis-1",
      },
      {
        label: "Sản phẩm 1",
        backgroundColor: "#0FC6C2",
        data: [20, 15, 9, 3, 10],
        borderColor: "white",
        borderWidth: 0,
        axis: "y-axis-1",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,

    responsive: true,
    legend: {
      position: "bottom",
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
          stacked: true,
          position: "left",
        },
      ],
    },
  };

  return (
    <>
      <div className="report-stack-bar-chart-ctn">
        <HorizontalBar data={data} options={options} height={350} />
      </div>
    </>
  );
};
