import Button from "libraries/components/button/Button";
import { ConfirmModal } from "libraries/components/confirm-modal/confirm-modal";
import {
  ModalPopupComponent,
  PopupModalRefProps,
} from "libraries/components/modal-popup/modal-popup.components";
import { IconDeleteDisabled, PlusIcon } from "libraries/icons/icon";
import { EditBannerModalComponent } from "pages/machine/components/modal-content/edit-banner-modal/edit-banner-modal.component";
import { useRef } from "react";
import { APP_CONFIGS } from "vending-core/common/app-config";
import { MachineAdvertisementProps } from "./machine-advertisement.props";
import "./machine-advertisement.scss";
import { MachineAdvertisementAdapter } from "./machine-advertisiment.adapter";

export const MachineAdversement = (props: MachineAdvertisementProps) => {
  const {
    banner,
    deleteBanner,
    openEditBannerModal,
    closeEditBannerModal,
    refConfirmModal,
    refEditBannerModal,
    openConfirmDelete,
  } = MachineAdvertisementAdapter(props);

  const { machine } = props;

  const renderImageItem = (item: any) => {
    return (
      <div className="item_banner">
        <img
          src={APP_CONFIGS.URL_API + "files/image/" + item.imageDetails}
          className="banner_img "
        />
        <div className="icon_delete" onClick={() => openConfirmDelete(item.id)}>
          Xoá
        </div>
      </div>
    );
  };

  return (
    <div className="machine-advertisement-ctn">
      <div className="header">
        <p className="title"> Danh sách Banner quảng cáo</p>
        <Button
          background="#00BAB5"
          textColor="#FFF"
          borderColor="none"
          onClick={openEditBannerModal}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i style={{ height: 24, width: 24 }}>
              <PlusIcon />
            </i>
            <p style={{ marginBottom: 0, marginLeft: 8 }}>Thêm Banner mới</p>
          </div>
        </Button>
      </div>
      <div className="banner_ctn">
        {banner.map((element) => {
          return renderImageItem(element);
        })}
      </div>

      <ModalPopupComponent
        title="Thêm Banner máy"
        body={
          <EditBannerModalComponent
            closeModal={closeEditBannerModal}
            machine={machine}
          />
        }
        ref={refEditBannerModal}
      />
      <ConfirmModal ref={refConfirmModal} />
    </div>
  );
};
