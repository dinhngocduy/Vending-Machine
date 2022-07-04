import ComboBox from "libraries/components/combo-box/ComboBox";
import { ENUM_TIME_FILTER } from "libraries/enums/enum-time-filter";
import Button from "libraries/components/button/Button";
import SearchInput from "pages/machine/components/search-input/search-input";
import { useState } from "react";
import { TableReport } from "./component/table-report/table-report";
import "./report.scss";
import { ReportHeaderComponent } from "./component/report-header/report-header";
import { fromDate } from "libraries/utils/from-date";

export const ReportScreen = () => {
  // state
  const [filterTenant, setFilterTenant] = useState<string>();
  const [filterGroup, setFilterGroup] = useState<string>();
  const [filterModel, setFilterModel] = useState<string>();
  const [filterTime, setFilterTime] = useState<Date>();
  const [searchText, setSearchText] = useState<string>();

  return (
    <div className="report-ctn">
      <div className="report-filterbar">
        <div className="report-filterbar__left">
          <ComboBox
            label="Nhà điều hành"
            listOption={["Tất cả", "Hyperlogy", "Root"]}
            onChange={setFilterTenant}
          />
          <ComboBox
            label="Nhóm máy"
            listOption={["Tất cả", "Nhóm 1", "Nhóm 2"]}
            onChange={setFilterGroup}
          />
          <ComboBox
            label="Kiểu máy"
            listOption={["Tất cả", "Máy nóng", "Máy lạnh"]}
            onChange={setFilterModel}
          />
          <ComboBox
            label="Thời gian"
            listOption={[
              "Tất cả",
              ENUM_TIME_FILTER.DAY,
              ENUM_TIME_FILTER.WEEK,
              ENUM_TIME_FILTER.MONTH,
            ]}
            onChange={(value: any) => {
              console.log("CHANGE TIME : ", fromDate(value));
              setFilterTime(fromDate(value));
            }}
          />
          <SearchInput hint="Mã máy" onChange={setSearchText} />
        </div>
        <div className="report-filterbar__right">
          <Button background="none" textColor="#00BAB5" borderColor="#00BAB5 ">
            <p>Tìm kiếm</p>
          </Button>
        </div>
      </div>
      <div className="report-manager-view">
        <ReportHeaderComponent />
        <TableReport />
      </div>
    </div>
  );
};
