import { MoneyIcon, RpUpArrow } from "libraries/icons/icon";
import { ReportCardViewProps } from "./report-cardview.props";
import "./report-cardview.scss";
export const ReportCardViewComponent = (props: ReportCardViewProps) => {
  const { title, value } = props;

  return (
    <>
      <div className="report-card-view-ctn">
        <div className="report-card-view-header">
          <span className="report-card-view-title">{title.toUpperCase()}</span>
          <div className="report-card-view-header-right">
            <RpUpArrow width={14} height={14} />
            <span className="report-card-view-header-right value">+16,24%</span>
          </div>
        </div>
        <div className="report-card-view-body">
          <span className="report-card-view-body-value">{value}</span>
        </div>
        <div className="report-card-view-footer">
          <span className="detail-text-btn">Xem chi tiết</span>
          <div className="money-icon">
            <MoneyIcon height={20} width={20} />
          </div>
        </div>
      </div>
    </>
  );
};
