import { Route } from "react-router-dom";
import "./header.scss";
import HeaderAdapter from "./header.adapter";
import { IconBell } from "libraries/icons/icon";
import { ENUM_PAGE } from "libraries/enums/page";

function HeaderScreen() {
  const { page, setPage, toggleMenu, hasMiniMenu, logoutApp } =
    HeaderAdapter();

  return (
    <header className="tittlebar">
      <Route path="/dashboard" exact>
        <p className="tittlebar-name">Trang chủ</p>
      </Route>
      <Route path="/jobs" exact>
        <p className="tittlebar-name">Công việc</p>
      </Route>
      <Route path="/machine" exact>
        <p className="tittlebar-name">Quản lý máy</p>
      </Route>
      <Route path="/machine/:id" exact>
        <p className="tittlebar-name">Quản lý máy</p>
      </Route>
      <Route path="/product" exact>
        <p className="tittlebar-name">Sản phẩm</p>
      </Route>
      <Route path="/history" exact>
        <p className="tittlebar-name">Lịch sử</p>
      </Route>
      <Route path="/report" exact>
        <p className="tittlebar-name">Báo cáo</p>
      </Route>
      <Route path={ENUM_PAGE.REPORT_OVERVIEW} exact>
        <p className="tittlebar-name">Báo cáo tổng quan</p>
      </Route>
      <Route path={ENUM_PAGE.REPORT_SALES} exact>
        <p className="tittlebar-name">Báo cáo doanh thu</p>
      </Route>
      <Route path={ENUM_PAGE.REPORT_INVENTORY} exact>
        <p className="tittlebar-name">Báo cáo tồn hàng</p>
      </Route>
      <Route path={ENUM_PAGE.REPORT_DETAILED} exact>
        <p className="tittlebar-name">Báo cáo chi tiết</p>
      </Route>
      <Route path="/admin" exact>
        <p className="tittlebar-name">Quản trị</p>
      </Route>
      <div>
        <IconBell className="notification-icon" />
        <img
          src="https://www.w3schools.com/w3images/avatar6.png"
          alt=""
          onClick={logoutApp}
        />
      </div>
    </header>
  );
}

export default HeaderScreen;
