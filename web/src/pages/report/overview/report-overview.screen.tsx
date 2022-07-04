import { MultiDatePicker } from "libraries/components/multi-date-picker/multi-date-picker";
import moment from "moment";
import { useState } from "react";
import { ReportCardViewComponent } from "./component/report-cardview/report-cardview.component";
import "./report-overview.scss";
import { TopProductComponent } from "./component/top-product/top-product.component";
import { TopMachineComponent } from "./component/top-machine/top-machine.component";
import { PlusCircleGreen, PlusIcon } from "libraries/icons/icon";
import { ReportMultiTypeChart } from "./component/report-multi-type-chart/report-multi-type-chart.component";
import { ReportStackBarChart } from "./component/report-stack-bar-chart/report-stack-bar-chart.component";
import { ProductStatisticsComponent } from "pages/dashboard/components/product-statistics/product-statistics.component";

export const ReportOverView = () => {
  const [date, setDate] = useState<any>([
    moment().subtract(1, "days"),
    moment(),
  ]);

  return (
    <>
      <div className="report-overview-ctn">
        <div>
          <div className="report-overview-header-ctn">
            <MultiDatePicker date={date} setDate={setDate} />
            <div className="add-report-btn">
              <PlusCircleGreen />
              <span className="btn-text">Thêm báo cáo</span>
            </div>
          </div>
        </div>
        <div className="report-overview-card-view-ctn">
          <ReportCardViewComponent title="TỔNG DOANH THU" value="20.000.000đ" />
          <ReportCardViewComponent title="TỔNG SẢN PHẨM" value="5000" />
        </div>
        <div className="report-overview-row-ctn">
          <div style={{ flex: 1, marginRight: 20 }}>
            <ReportMultiTypeChart />
          </div>
          <div style={{ flex: 1 }}>
            <ReportStackBarChart />
          </div>
        </div>
        <div className="report-overview-row-ctn">
          <div style={{ flex: 1, marginRight: 20 }}>
            <TopProductComponent />
          </div>
          <div style={{ flex: 1 }}>
            <TopMachineComponent />
          </div>
        </div>
        <div className="report-overview-row-ctn">
          <div style={{ flex: 1, marginRight: 20 }}>
            <ProductStatisticsComponent/>
          </div>
          <div style={{ flex: 1 }}>
          
          </div>
        </div>
      </div>
       
    </>
  );
};
