import { DatePicker } from "libraries/components/date-picker/date-picker";
import { Doughnut } from "react-chartjs-2";
import "./donut-chart.scss";

export const DonutChart = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5],
        backgroundColor: ["#33CC5E", "#FF4D54", "#4080FF", "#FF7F08"],
        // borderColor: ["#33CC5E", "#FF4D54", "#4080FF", "#FF7F08"],
        // borderWidth: 1,
      },
    ],
  };

  return (
    <div className="donut-chart-ctn">
      <div className="donut-chart-header">
        <h1 className="donut-chart-title">Thống kê top mặt hàng bán chạy</h1>
        {/* <DatePicker /> */}
      </div>
      <Doughnut data={data} />
    </div>
  );
};
