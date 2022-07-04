import CardView from "libraries/components/card-view/CardView";
import convertToCurrency from "libraries/utils/convert-to-currency";
import { ReportHeaderAdapter } from "./report-header.adapter";
import "./report-header.scss";

export const ReportHeaderComponent = () => {
  const { report } = ReportHeaderAdapter();

  return (
    <div>
      <div className="tabble-report-header">
        <CardView startCorlor="#ABDCFF" endColor="#0396FF">
          <div className="content">
            <div className="tittle">Tổng doanh thu</div>
            <div className="data">
              {convertToCurrency(
                (report?.totalTransactionAmount || 0).toString()
              ) + " VND"}
            </div>
          </div>
        </CardView>
        <CardView startCorlor="#65FDF0" endColor="#1D6FA3">
          <div className="content">
            <div className="tittle">Tổng giao dịch</div>
            <div className="data">{report?.totalTransaction || 0}</div>
          </div>
        </CardView>
        <CardView startCorlor="#FFE985" endColor="#FA742B">
          <div className="content">
            <div className="tittle">Giao dịch tiền mặt</div>
            <div className="data">
              {convertToCurrency(
                (report?.totalCashTransactionAmount || 0).toString()
              ) + " VND"}
            </div>
          </div>
        </CardView>
        <CardView startCorlor="#84FFBE" endColor="#03BD5B">
          <div className="content">
            <div className="tittle">Giao dịch Momo</div>
            <div className="data">
              {convertToCurrency(
                (report?.totalMomoTransactionAmount || 0).toString()
              ) + " VND"}
            </div>
          </div>
        </CardView>
        <CardView startCorlor="#FFB8BB" endColor="#FF4C54">
          <div className="content">
            <div className="tittle">Giao dịch thẻ ngân hàng</div>
            <div className="data">
              {convertToCurrency(
                (report?.totalAtmTransactionAmount || 0).toString()
              ) + " VND"}
            </div>
          </div>
        </CardView>
      </div>
    </div>
  );
};
