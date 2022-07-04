import CardView from "libraries/components/card-view/CardView";
import { EditMachineIcon } from "libraries/icons/icon";
import convertToCurrency from "libraries/utils/convert-to-currency";
import Button from "libraries/components/button/Button";
import { MachineInfoProps } from "./machine-info.props";
import "./machine-info.scss";
import {
  RightSideBarModal,
  SideModalRefProps,
} from "libraries/components/right-sidebar-modal/right-sidebar-modal";
import { useRef } from "react";
import { EditMachineModal } from "pages/machine/components/modal-content/edit-machine-modal/edit-machine-modal";
import {
  ModalPopupComponent,
  PopupModalRefProps,
} from "libraries/components/modal-popup/modal-popup.components";
import { EditBannerModalComponent } from "pages/machine/components/modal-content/edit-banner-modal/edit-banner-modal.component";
import { MachineInfoAdpater } from "./machine-info.adapter";
import moment from "moment";

const location = {
  id: "1",
  name: "Máy 1",
  code: "123456",
  address: "Số 1, Trung Hòa, Cầu Giấy, Hà Nội",
  owner: "Nhà điều hành 1",
  ownerAddress: "Tầng 2, Trung Yên Plaza, số 1 Trung Hoà, Cầu Giấy, Hà Nội",
  group: "Nhóm máy ABFC",
  status: "Đang hoạt động",
  model: 'Máy bán hàng 55"',
  machineModel: "Máy bán nước",
};

export const MachineInfo = (props: MachineInfoProps) => {
  console.log("ITEM : ", props.item);
  const { item } = props;
  const { lastTimeUpdate } = MachineInfoAdpater();
  const refEditMachineModal = useRef<SideModalRefProps>(null);

  const openEditMachineModal = () => {
    refEditMachineModal.current?.setIsOpen(true);
  };

  const closeEditMachineModal = () => {
    refEditMachineModal.current?.setIsOpen(false);
  };

  return (
    <div className="info-view">
      <div className="info-view__left">
        <div className="info-view-item">
          <p className="info-view-item__label">Tên máy:</p>
          <p className="info-view-item__data">{item?.machine?.referenceName}</p>
        </div>
        <div className="info-view-item">
          <p className="info-view-item__label">Mã máy:</p>
          <p className="info-view-item__data">{item?.machine?.serialNumber}</p>
        </div>
        <div className="info-view-item">
          <p className="info-view-item__label">Mã định danh:</p>
          <p className="info-view-item__data">{item?.machine?.identifyCode}</p>
        </div>
        <div className="info-view-item">
          <p className="info-view-item__label">Địa điểm:</p>
          <p className="info-view-item__data">
            {item?.machine?.address +
              ", " +
              item?.machine?.village +
              " ," +
              item?.machine?.district +
              " ," +
              item?.machine?.province}
          </p>
        </div>
        <div className="info-view-item">
          <p className="info-view-item__label">Nhà điều hành:</p>
          <p className="info-view-item__data">Hyperlogy</p>
        </div>
        <div className="info-view-item">
          <p className="info-view-item__label">Vị trí nhà điều hành:</p>
          <p className="info-view-item__data">{location.ownerAddress}</p>
        </div>
        {/* <div className="info-view-item">
          <p className="info-view-item__label">Nhóm máy:</p>
          <p className="info-view-item__data">{location.group}</p>
        </div> */}
        <div className="info-view-item">
          <p className="info-view-item__label">Last update time:</p>
          <p className="info-view-item__data">
            {moment(lastTimeUpdate).format("HH:mm:ss DD/MM/yyyy") +
              "(" +
              lastTimeUpdate +
              ")"}
          </p>
        </div>
        <div className="info-view-item">
          <p className="info-view-item__label">Trạng thái:</p>
          <div
            style={{ flex: 3, justifyContent: "flex-start", display: "flex" }}
          >
            <div
              className={`status-tag ${item?.machine?.active ? "active" : ""}`}
            >
              <p>
                {item?.machine?.active ? "Đang hoạt động" : "Không hoạt động"}
              </p>
            </div>
          </div>
        </div>
        <div className="info-view-item">
          <p className="info-view-item__label">Kiểu máy:</p>
          <p className="info-view-item__data">
            {item?.machine?.modelInfo?.name}
          </p>
        </div>
        <div className="info-view-item">
          <p className="info-view-item__label">Mô hình máy</p>
          <p className="info-view-item__data">{location.machineModel}</p>
        </div>

        <div className="info-view-item flex-center">
          <Button
            background="#00BAB5"
            textColor="#FFF"
            borderColor="none"
            onClick={openEditMachineModal}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <EditMachineIcon />
              <p style={{ marginBottom: 0, marginLeft: 8 }}>Chỉnh sửa</p>
            </div>
          </Button>
        </div>
      </div>
      <div className="info-view__right">
        <div className="card_view_ctn">
          <CardView startCorlor="#ABDCFF" endColor="#0396FF">
            <div className="content">
              <div className="tittle">Tổng tiền hiện tại</div>
              <div className="data">
                {convertToCurrency(
                  (item?.cashInMachine || 0).toString()
                ) + " VND"}
                {/* 0 VND */}
              </div>
            </div>
          </CardView>
          <CardView startCorlor="#65FDF0" endColor="#1D6FA3">
            <div className="content">
              <div className="tittle">Sản phẩm</div>
              <div className="data">
                {item?.remainProducts || 0} / {item?.totalProducts || 0}
              </div>
            </div>
          </CardView>
          <CardView startCorlor="#FFE985" endColor="#FA742B">
            <div className="content">
              <div className="tittle">Lượt giao dịch</div>
              <div className="data">{item?.totalTransactions || 0}</div>
            </div>
          </CardView>
          <CardView startCorlor="#FFBBBB" endColor="#FF4C54">
            <div className="content">
              <div className="tittle">Nhiệt độ</div>
              <div className="data">{item?.temperature || 0} °C</div>
            </div>
          </CardView>
        </div>
      </div>
      <RightSideBarModal
        title="Chỉnh sửa máy"
        body={
          <EditMachineModal closeModal={closeEditMachineModal} machine={item} />
        }
        ref={refEditMachineModal}
      />
    </div>
  );
};
