import Button from "libraries/components/button/Button";
import CellTableItemScreen from "libraries/components/cell-table-item/cell-table-item";
import { ModalPopupComponent } from "libraries/components/modal-popup/modal-popup.components";
import { PaginateComponent } from "libraries/components/paginate/paginate.component";
import {
  DeleteProductMapIcon,
  EditProductMapIcon,
  PlusIcon,
} from "libraries/icons/icon";
import { IMachineModel } from "libraries/types/machine";
import { Table } from "reactstrap";
import { AddModelMachineModal } from "../../modal-content/add-model-machine/add-model-machine-modal";
import { ManageModelMachineAdapter } from "./manage-model-machine.adapter";
import "./manage-model-machine.scss";

export const ManageModelMachineComponent = () => {
  const listColumn = ["STT", "Tên", "Mô tả", "Trạng thái", "Hành động"];
  const {
    refAddModelMachineModal,
    openAddModelMachineModal,
    closeAddModelMachineModal,
    listModel,
  } = ManageModelMachineAdapter();

  // content

  const renderContentTable = () => {
    return listModel.map((item: IMachineModel, index: number) => {
      return (
        <tr>
          <CellTableItemScreen
            content={index + 1}
            hasListOptions={false}
            hasEditedByPm={false}
            isError={false}
            className="w-50"
          />
          <CellTableItemScreen
            content={item.name}
            hasListOptions={false}
            hasEditedByPm={false}
            isError={false}
          />
          <CellTableItemScreen
            content={item.description}
            hasListOptions={false}
            hasEditedByPm={false}
            isError={false}
          />
          <CellTableItemScreen
            hasListOptions={false}
            child={
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <div className={`active-tag ${item.active ? "active" : ""}`}>
                  <p>{item.active ? "Hoạt động" : "Ngưng hoạt động"}</p>
                </div>
              </div>
            }
            content={""}
            isError={false}
            hasEditedByPm={false}
          ></CellTableItemScreen>
          <CellTableItemScreen
            child={
              <div style={{ justifyContent: "center", alignItems: "center" }}>
                <EditProductMapIcon
                  style={{ marginRight: 14 }}
                  // onClick={() => openEditProductModal(index)}
                />
                <DeleteProductMapIcon
                // onClick={() => deleteProductData(item.id)}
                ></DeleteProductMapIcon>
              </div>
            }
            content={""}
            hasListOptions={false}
            hasEditedByPm={false}
            isError={false}
          ></CellTableItemScreen>
        </tr>
      );
    });
  };

  return (
    <div className="manage-model-machine-ctn">
      <div className="manage-model-machine-header">
        <span>Danh sách model máy</span>
        <Button background="#00BAB5" textColor="#FFF" borderColor="none">
          <div
            onClick={openAddModelMachineModal}
            style={{ display: "flex", alignItems: "center" }}
          >
            <i style={{ height: 24, width: 24 }}>
              <PlusIcon />
            </i>
            <p style={{ marginLeft: "8px" }}>Thêm model</p>
          </div>
        </Button>
      </div>
      <div className="manage-model-machine-table-ctn">
        <div className="manage-model-machine-table__table mt2">
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
      <PaginateComponent totalPage={5} currenPage={1} onChange={() => {}} />
      <ModalPopupComponent
        title="thêm loại máy"
        ref={refAddModelMachineModal}
        body={<AddModelMachineModal />}
      />
    </div>
  );
};
