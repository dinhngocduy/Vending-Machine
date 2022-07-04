import CellTableItemScreen from "libraries/components/cell-table-item/cell-table-item";
import moment from "moment";
import { FcDeleteDatabase } from "react-icons/fc";
import { Table } from "reactstrap";
import { APP_CONFIGS } from "vending-core/common/app-config";
import { MachineLogAdapter } from "./machine-log.adapter";
import "./machine-log.scss";

export const MachineLogComponent = () => {
  const { listLog } = MachineLogAdapter();

  const convertTime = (element: string) => {
      if(element.indexOf('-') != -1){
        
        const milise = element.replace("SVM001-","").replace(".txt","").trim()
        return moment(parseInt(milise)).format("HH:mm:ss DD/MM/yyyy")
      }
      return ""
  }

  const showContentTable = () => {
    if (listLog.length > 0) {
      return listLog.map((element: any, index: number) => {
        return (
          <tr key={index} style={{ height: 60 }}>
            {/* <td className="checkbox-ctn">
              <input type="checkbox" />
            </td> */}

            {/* STT */}
            <CellTableItemScreen
              isTh={true}
              content={(index + 1).toString()}
              hasListOptions={false}
              isError={false}
              hasEditedByPm={false}
              listOptions={[]}
            ></CellTableItemScreen>
            {/* Tên file */}
            <CellTableItemScreen
              content={element}
              hasListOptions={false}
              isError={false}
              hasEditedByPm={false}
            ></CellTableItemScreen>
            {/* Thời gian */}
            <CellTableItemScreen
              content={convertTime(element)}
              hasListOptions={false}
              isError={false}
              hasEditedByPm={false}
            ></CellTableItemScreen>
            {/* Link file */}
            <CellTableItemScreen
              content={""}
              // contentIsCurrency={true}
              child={
                <a
                  className="link-file"
                  href={APP_CONFIGS.URL_API + "files/image/" + element}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {APP_CONFIGS.URL_API + "files/image/" + element}
                </a>
              }
              hasListOptions={false}
              isError={false}
              hasEditedByPm={false}
            ></CellTableItemScreen>
          </tr>
        );
      });
    } else {
      return (
        <tr>
          <td colSpan={9}>
            <div className="null-data">
              <FcDeleteDatabase
                style={{ width: "10%", height: "10%" }}
                className="img-40"
              ></FcDeleteDatabase>
              <p>Chưa có file log cho máy này</p>
            </div>
          </td>
        </tr>
      );
    }
  };

  return (
    <div className="machine-log">
      <div className="machine-log-header">
        <p className="title">Danh sách file log</p>
      </div>
      {/* <ErrorBoundary> */}

      <div className="machine-log__table mt-2">
        <Table striped bordered>
          <thead>
            <tr className="table__header">
              {/* <th className="checkbox">
                    <input type="checkbox" />
                  </th> */}
              <th>
                <span>STT</span>
              </th>
              <th>
                <span>Tên File</span>
              </th>
              <th>
                <span>Thời gian</span>
              </th>
              <th>
                <span>Link file</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {showContentTable()}
            {/* <tr></tr> */}
          </tbody>
        </Table>
      </div>
      <div style={{ flex: 1 }} />
      {/* <PaginateComponent
            totalPage={totalPage}
            currenPage={page}
            onChange={setPage}
          /> */}

      {/* </ErrorBoundary> */}
      <div className="d-flex justify-content-between align-items-center"></div>
    </div>
  );
};
