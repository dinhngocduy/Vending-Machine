import CardView from "libraries/components/card-view/CardView";
import { MachineOffIcon, MachineOnIcon } from "libraries/icons/icon";
import CellTableItemScreen from "libraries/components/cell-table-item/cell-table-item";
import { Table } from "reactstrap";
import "./table-report.scss";
import { TableReportAdapter } from "./table-report.adapter";
import { PaginateComponent } from "libraries/components/paginate/paginate.component";
import { IMachine } from "libraries/types/machine";
import { IMachineReport } from "libraries/types/report";

export const TableReport = () => {
  const listColumn = [
    "Tên máy",
    "Nhóm máy",
    "Tổng số giao dịch",
    "Giao dịch tiền mặt",
    "Giao dịch thẻ ngân hàng",
    "Giao dịch momo",
    "Tổng tiền giao dịch",
  ];

  const { listMachine, page, totalPage, setPage, MACHINE_PER_PAGE } =
    TableReportAdapter();

  const renderContentTable = () => {
    return listMachine?.map((item) => {
      return (
        <tr>
          <CellTableItemScreen
            content={""}
            hasListOptions={false}
            hasEditedByPm={false}
            isError={false}
            child={machineNameItem(item)}
            className="w-300"
          />
          <CellTableItemScreen
            content={"Nhóm máy A"}
            hasListOptions={false}
            hasEditedByPm={false}
            isError={false}
          />
          {/* <CellTableItemScreen
            content={"20"}
            hasListOptions={false}
            hasEditedByPm={false}
            isError={false}
          /> */}
          <CellTableItemScreen
            content={item?.totalTransactions?.toString()}
            hasListOptions={false}
            hasEditedByPm={false}
            isError={false}
          />
          <CellTableItemScreen
            content={item?.cashOrderAmount}
            hasListOptions={false}
            hasEditedByPm={false}
            isError={false}
            contentIsCurrency={true}
          />
          <CellTableItemScreen
            content={item?.atmOrderAmount}
            hasListOptions={false}
            hasEditedByPm={false}
            isError={false}
            contentIsCurrency={true}
          />
          <CellTableItemScreen
            content={item?.momoOrderAmount}
            hasListOptions={false}
            hasEditedByPm={false}
            isError={false}
            contentIsCurrency={true}
          />
          <CellTableItemScreen
            content={item?.orderAmount}
            hasListOptions={false}
            hasEditedByPm={false}
            isError={false}
            contentIsCurrency={true}
          />
        </tr>
      );
    });
  };

  const machineNameItem = (item: IMachineReport) => {
    return (
      <div className="machine-item-cell">
        <div
          className={`machine-item-cell-icon ${
            item?.machine?.active ? "active" : ""
          }`}
        >
          {item?.machine?.active ? <MachineOnIcon /> : <MachineOffIcon />}
        </div>
        <div className="machine-item-cell-detail">
          <span className="machine-item-cell-detail-code">
            {item?.machine?.serialNumber}
          </span>
          <span className="machine-item-cell-detail-name">
            {item?.machine?.referenceName}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="tabble-report-ctn">
      <div className="table-report-body">
        <div className="table-report-title">
          <p>Danh sách máy</p>
          {/* <div className="tilte-btn-function">
            <UploadImageIcon />
            <span>Xuất excel</span>
          </div>
          <div className="tilte-btn-function">
            <SettingGreenIcon />
            <span>Ẩn/hiện cột </span>
          </div> */}
        </div>
        <div className="table-report-wrap__table mt2">
          <Table striped bordered>
            <thead>
              <tr className="table__header">
                {listColumn.map((element) => {
                  return (
                    <th>
                      <span>{element}</span>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>{renderContentTable()}</tbody>
          </Table>
        </div>
      </div>
      <PaginateComponent
        totalPage={totalPage}
        currenPage={page}
        onChange={setPage}
      />
    </div>
  );
};
