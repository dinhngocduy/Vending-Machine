import { BarChartIcon, MachineOnIcon } from "libraries/icons/icon";
import "./top-machine.scss";
export const TopMachineComponent = () => {
  const item = () => {
    return (
      <>
        <div className="item-machine-ctn">
          <div className="item-machine-icon-ctn">
            <MachineOnIcon />
          </div>
          <div className="item-machine-cell" style={{ flex: 2 }}>
            <span className="item-machine-label" style={{ fontWeight: 700 }}>
              Máy 0001
            </span>
            <span className="item-machine-value">Hà Nội</span>
          </div>
          <div className="item-machine-cell" style={{ flex: 1 }}>
            <span className="item-machine-label">Stock</span>
            <span className="item-machine-value">500</span>
          </div>
          <div className="item-machine-cell" style={{ flex: 2 }}>
            <span className="item-machine-label">Hàng trong máy</span>
            <span className="item-machine-value">450</span>
          </div>
          <div className="item-machine-cell" style={{ flex: 2 }}>
            <span className="item-machine-label">Tổng doanh thu</span>
            <span className="item-machine-value">5.000.000đ</span>
          </div>
          <div style={{ flex: 1, flexDirection: 'row', display: 'flex', alignItems: 'center'}}>
              <span style = {{marginTop: 5, fontSize: 14}}>38%</span>
              <BarChartIcon/>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="top-machine-ctn">
        <div className="top-machine-header">
          <span className="container-title">
            Top máy bán hàng bán chạy nhất
          </span>
        </div>
        <div className="top-machine-body">
          {item()}
          {item()}
          {item()}
          {item()}
          {item()}
          {item()}
          {item()}
        </div>
      </div>
    </>
  );
};
