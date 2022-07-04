import { SelectLocationComponent } from "libraries/components/select-location/select-location-component";
import {
  ManageMachineIcon,
  ManageProductIcon,
  ManageUserIcon,
} from "libraries/icons/icon";
import "./admin.scss";
import { ManageModelMachineComponent } from "./components/manage-machine/manage-model-machine/manage-model-machine.component";

export const AdminScreen = () => {
  return (
    <div className="admin-container">
      <div className="admin-menu">
        <div className="admin-menu-item-ctn">
          <div>
            <ManageMachineIcon />
            <span> Quản trị máy </span>
          </div>
        </div>
        <div className="admin-menu-item-ctn">
          <ManageUserIcon />
          <span> Quản lý nhân viên </span>
        </div>
        <div className="admin-menu-item-ctn">
          <ManageProductIcon />
          <span> Quản lý nhóm sản phẩm </span>
        </div>
        <div className="admin-menu-item-ctn">
          <ManageUserIcon />
          <span> Quản lý đơn vị </span>
        </div>
      </div>
      {/* <ManageModelMachineComponent /> */}
    </div>
  );
};
