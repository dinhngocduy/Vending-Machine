import {
  BottleIcon,
  ChartIcon,
  ClockIcon,
  HomeIcon,
  Logo,
  MachineIcon,
  SettingIcon,
  TaskListIcon,
  MenuIcon,
} from "libraries/icons/svg/slide-bar-icon/side-bar.icon";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SlideBarItemComponent } from "./slide-bar-item/slide-bar-item.component";
import "./slide-bar.scss";

export const SlideBarComponent = () => {
  const [active, SetActive] = useState<boolean>(true);
  const [collapsed, SetCollapsed] = useState<boolean>(false);

  useEffect(() => {
    document.getElementById("slidebar")?.classList.toggle("active", active);
    document
      .getElementById("slidebar-header")
      ?.classList.toggle("active", active);
    document
      .getElementById("slidebar-header-icon")
      ?.classList.toggle("active", active);
    var items = document.getElementsByClassName("slidebar-item");
    for (var i = 0; i < items.length; i++) {
      items[i].classList.toggle("active", active);

      var child = items[i].children;
      for (var j = 0; j < child.length; j++) {
        child[j].classList.toggle("active", active);
      }
    }
  }, [active]);

  const toggleSidebar = () => {
    SetCollapsed(!collapsed);
  }


  return (
    <>
      <div className="slidebar" id="slidebar">
        <div className="slidebar-header" id="slidebar-header">
          <div className="slidebar-header-icon" id="slidebar-header-icon">
            <Logo />
          </div>
          <div
            className="slidebar-menu-icon"
            onClick={() => {
              SetActive(!active)
          }}
          >
            <MenuIcon />
          </div>
        </div>
        <div className="slidebar-body">
          <ul>
            <li>
            <NavLink to="/dashboard" activeClassName="active" exact={true}>
              <SlideBarItemComponent name="Trang chủ" icon={<HomeIcon />} />
            </NavLink>
            </li>

            <li>
            <NavLink to="/jobs" activeClassName="active">
              <SlideBarItemComponent name="Công việc" icon={<TaskListIcon />} />
            </NavLink>
            </li>

            <li>
            <NavLink to="/machine" activeClassName="active">
              <SlideBarItemComponent name="Quản lý máy" icon={<MachineIcon />} />
            </NavLink>
            </li>

            <li>
            <NavLink to="/product" activeClassName="active">
              <SlideBarItemComponent name="Sản phẩm" icon={<BottleIcon />} />
            </NavLink>
            </li>

            <li>
            <NavLink to="/history" activeClassName="active">
              <SlideBarItemComponent name="Lịch sử" icon={<ClockIcon />} />
            </NavLink>
            </li>

            <li>
              <div className={`report-sidebar-dropdown-toggle ${collapsed ? `collapsed` : ``}`}
               onClick={toggleSidebar}>
                <NavLink to="/report/overview" activeClassName="active">
                  <SlideBarItemComponent name="Báo cáo" icon={<ChartIcon/>}/>
                </NavLink>
              </div>
              <div className={`sidebar-dropdown-item ${collapsed ? "collapsed_entered" : ""}`}>
                {/* report child item */}
                <NavLink to="/report/overview" activeClassName="active">
                  <SlideBarItemComponent name="Báo cáo tổng quan"/>
                </NavLink>
                <NavLink to="/report/sales" activeClassName="active">
                  <SlideBarItemComponent name="Báo cáo Doanh thu" />
                </NavLink>
                <NavLink to="/report/inventory" activeClassName="active">
                  <SlideBarItemComponent name="Báo cáo tồn hàng" />
                </NavLink>
                <NavLink to="/report/detailed" activeClassName="active">
                  <SlideBarItemComponent name="Báo cáo chi tiết" />
                </NavLink>
              </div>
            </li>

            <li>
            <NavLink to="/admin" activeClassName="active">
              <SlideBarItemComponent name="Quản trị" icon={<SettingIcon />} />
            </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </>
  );
};
