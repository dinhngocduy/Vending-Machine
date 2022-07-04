import ComboBox from "libraries/components/combo-box/ComboBox";
import { PlusIcon, SearchEmpty } from "libraries/icons/icon";
import Button from "../../libraries/components/button/Button";
import ListMachine from "./components/list-machine/List-machine";
import { MachineDetails } from "./components/machine-detail/machine-detail";
import SearchInput from "./components/search-input/search-input";
import "./machine.scss";
import { Route } from "react-router-dom";
import { useRef, useState } from "react";
import {
  RightSideBarModal,
  SideModalRefProps,
} from "libraries/components/right-sidebar-modal/right-sidebar-modal";
import { IMachine, IProductMapItem } from "libraries/types/machine";
import { AddMachineModal } from "./components/modal-content/add-machine-modal/add-machine-modal";

export default function MachineScreen() {
  // state
  const [machine, setMachine] = useState<IMachine>();
  const [productMapItem, setProductMapItem] = useState<IProductMapItem>();
  const [filterTenant, setFilterTenant] = useState<string>();
  const [filterStattus, setFilterStatus] = useState<string>();
  const [searchText, setSearchText] = useState<string>();

  const refAddMachineModal = useRef<SideModalRefProps>(null);

  // modal body
  const addMachineModal = () => {
    return <AddMachineModal closeModal={closeAddtMachineModal} />;
  };

  //  onpen modal function
  const openAddMachineModal = () => {
    refAddMachineModal.current?.setIsOpen(true);
  };

  const closeAddtMachineModal = () => {
    refAddMachineModal.current?.setIsOpen(false);
  };

  return (
    <div className="machine-ctn">
      <div className="filterbar">
        <div className="filterbar__left">
          <ComboBox
            label="Đơn vị"
            listOption={["Tất cả", "Hyperlogy", "Root"]}
            onChange={setFilterTenant}
          />
          <ComboBox
            label="Trạng thái"
            listOption={["Tất cả", "Hoạt động", "Không hoạt động"]}
            onChange={setFilterStatus}
          />
          {/* <ComboBox
            label="Địa điểm"
            listOption={["Tất cả", "Cầu Giấy", "Hoàng Mai"]}
          /> */}
          <SearchInput hint="Mã máy" onChange={setSearchText} />
          <Button background="none" textColor="#00BAB5" borderColor="#00BAB5 ">
            <p>Tìm kiếm</p>
          </Button>
        </div>
        <div className="filterbar__right">
          <Button background="#00BAB5" textColor="#FFF" borderColor="none">
            <div
              onClick={openAddMachineModal}
              style={{ display: "flex", alignItems: "center" }}
            >
              <i style={{ height: 24, width: 24 }}>
                <PlusIcon />
              </i>
              <p style={{ marginLeft: "8px" }}>Thêm máy</p>
            </div>
          </Button>
        </div>
      </div>
      <div className="machine-manager-view">
        <ListMachine onClickItem={setMachine} />
        <div className="machine-manager-view__content">
          <div className="machine-detail-ctn">
            <Route path="/machine" exact>
              <MachineDetails />
            </Route>
            <Route path="/machine/:id" exact>
              <MachineDetails />
            </Route>
          </div>
        </div>
      </div>
      <RightSideBarModal
        title="Thêm máy mới"
        body={addMachineModal()}
        ref={refAddMachineModal}
      />
    </div>
  );
}
