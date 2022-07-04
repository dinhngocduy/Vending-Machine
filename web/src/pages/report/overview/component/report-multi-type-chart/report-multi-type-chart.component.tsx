import convertToCurrency from "libraries/utils/convert-to-currency";
import "./report-multi-type-chart.scss";
import { Bar } from "react-chartjs-2";

export const ReportMultiTypeChart = () => {
  const labels = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];

  const data = {
    labels,
    datasets: [
      {
        type: "line",
        label: "Sản phẩm",
        borderColor: "#F7BA1E",
        borderWidth: 2,
        fill: false,
        data: [
          127000, 89000, 149000, 115000, 16500, 23400, 127000, 118000, 59000,
          151000, 20500, 23400,
        ],
        tension: 0,
        spanGaps: true,
        pointBackgroundColor: "#fff",
        yAxisID: "y-axis-1",
      },
      {
        type: "bar",
        label: "Doanh thu",
        backgroundColor: "#165DFF",
        data: [
          127000, 189000, 59000, 165000, 110500, 23400, 127000, 189000, 59000,
          165000, 110500, 23400,
        ],
        borderColor: "white",
        borderWidth: 0,
        yAxisID: "y-axis-1",
      },
      {
        type: "bar",
        label: "Sản phẩm",
        backgroundColor: "#0FC6C2",
        data: [
          27000, 289000, 49000, 15000, 116500, 123400, 27000, 18000, 159000,
          15000, 120500, 123400,
        ],
        borderColor: "white",
        borderWidth: 0,
        yAxisID: "y-axis-1",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      position: "bottom",
    },
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
          stacked: false,
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
          // scaleLabel: {
          //   display: true,
          //   labelString: "Doanh thu",
          //   fontSize: 13,
          // },
        },
      ],
    },
  };

  return (
    <div className="report-multi-chart-ctn">
      <Bar type="bar" data={data} options={options} height={350} />
    </div>
  );
};
