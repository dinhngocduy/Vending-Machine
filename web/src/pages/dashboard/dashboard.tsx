import React, { useEffect, useState } from "react";
import "./dashboard.scss";
import { User } from "../../../../vending-core/common/types/user";
import CardView from "libraries/components/card-view/CardView";
import { LineChart } from "./components/chart/line-chart/line-chart";
import { BarChart } from "./components/chart/bar-chart/bar-chart";
import { HomeAdapter } from "vending-core/model-home/home.adapter";
import { RevenueStatisticsComponent } from "./components/ revenue-statistics/revenue-statistics.component";
import { ProductStatisticsComponent } from "./components/product-statistics/product-statistics.component";
import { PaymentStatisticsComponent } from "./components/payment-statistics/payment-statistics.component";
import { AreaStatistics } from "./components/area-statistics/area-statistics.component";

export default function DashboardV2(props: any) {
  const user: User = props?.location?.state?.dataResult;
  const { getCountMachine } = HomeAdapter();

  const [countMachine, setCountMachine] = useState<any>();

  useEffect(() => {
    getCountMachine().then((res) => {
      setCountMachine(res);
    });

    return () => {};
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <CardView startCorlor="#ABDCFF" endColor="#0396FF">
          <div className="content">
            <div className="tittle">Tổng máy</div>
            <div className="data">{countMachine?.total || 0}</div>
          </div>
        </CardView>
        <CardView startCorlor="#84FFBE" endColor="#03BD5B">
          <div className="content">
            <div className="tittle">Đang hoạt động</div>
            <div className="data">{countMachine?.online || 0}</div>
          </div>
        </CardView>
        <CardView startCorlor="#FFB8BB" endColor="#FF4C54">
          <div className="content">
            <div className="tittle">Đã dừng</div>
            <div className="data">{countMachine?.offline || 0}</div>
          </div>
        </CardView>
      </div>
      <div style={{ flexDirection: "column", display: "flex" }}>
        <div className="dashboard-chart-view">
          {/* <BarChart />
          <LineChart /> */}
          <RevenueStatisticsComponent />
        </div>
        <div className="dashboard-chart-view">
          <div style={{ flex: 3 }}>
            <ProductStatisticsComponent />
          </div>
          <div style={{ flex: 2 }}>
            <PaymentStatisticsComponent />
          </div>
          {/* <BarChart /> */}
          {/* <DonutChart /> */}
        </div>
        <div className="dashboard-chart-view">
          <div style={{ flex: 3 }}>
            <AreaStatistics />
          </div>
          <div style={{ flex: 1 }}></div>
        </div>
      </div>
    </div>
  );
}
