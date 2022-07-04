import { ChooseImageComponent } from "libraries/components/choose-image/choose-image.component";
import { ModalInput } from "libraries/components/modal-input/modal-input";
import {
  ModalPopupComponent,
  PopupModalRefProps,
} from "libraries/components/modal-popup/modal-popup.components";
import { PullImageIcon, UploadImageIcon } from "libraries/icons/icon";
import { ConvertToOptionData } from "libraries/utils/convert-to-option-data";
import Button from "libraries/components/button/Button";
import { useRef } from "react";
import { Input } from "reactstrap";
import { AddProductAdapter } from "./add-product.adapter";
import { AddProductProps } from "./add-product.props";
import "./add-product.scss";

export const AddProductComponent = (props: AddProductProps) => {
  const {
    onChooseImage,
    openModal,
    refAddImageModal,
    refInputFile,
    imageDisplay,
    setProductName,
    setProductCode,
    setProductGroup,
    setStatus,
    setDescription,
    setPrice,
    setCost,
    setDisplayPrice,
    createProductData,
  } = AddProductAdapter(props);

  const modalAddImage = () => {
    return (
      <div className="add-image-moadl-content">
        <div className="add-image-moadl-content-header">
          <p> Tải file mẫu mới tại đây </p>
          <UploadImageIcon />
          <p style={{ color: "#00DAD4" }}>Tại đây</p>
        </div>
        <div className="iput-file-icon">
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            ref={refInputFile}
            onChange={(event) => {
              onChooseImage(event);
            }}
          />
          <PullImageIcon
            onClick={() => {
              refInputFile.current.click();
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="add-product-scr-ctn">
      <div className="add-product-content">
        <div className="input-product_-info-ctn left">
          <div className="input-product_-info-ctn-header">
            <p> Thông tin chung</p>
          </div>
          <div>
            <ModalInput
              label="Tên sản phẩm"
              placeholder="Nhập tên sản phẩm"
              isRequired={true}
              onChangeValue={setProductName}
            />
            <ModalInput
              label="Mã sản phẩm"
              placeholder="Nhập mã sản phẩm"
              isRequired={true}
              onChangeValue={setProductCode}
            />
            <ModalInput
              label="Nhóm sản phẩm"
              placeholder="Chọn nhóm sản phẩm"
              isRequired={true}
              isOption={true}
              listoption={ConvertToOptionData([
                "Nhóm nước giải khát",
                "Nhóm bim bim",
              ])}
              onChangeValue={setProductGroup}
            />
            <ModalInput
              label="Trạng thái"
              placeholder="Chọn trạng thái"
              isRequired={true}
              isOption={true}
              listoption={[
                { label: "hoạt động", value: true },
                { label: "không hoạt động", value: false },
              ]}
              onChangeValue={setStatus}
            />
            <ModalInput
              label="Mô tả"
              placeholder="Nhập mô tả"
              isRequired={true}
              isTextArea={true}
              onChangeValue={setDescription}
            />
            <ChooseImageComponent onclick={openModal} image={imageDisplay} />
          </div>
        </div>
        <div className="input-product_-info-ctn right">
          <div className="input-product_-info-ctn-header">
            <p>Giá bán</p>
          </div>
          <div>
            <ModalInput
              label="Giá gốc"
              placeholder="Nhập giá gốc"
              isRequired={true}
              onChangeValue={setCost}
            />
            <ModalInput
              label="Giá bán"
              placeholder="Nhập giá bán"
              isRequired={true}
              onChangeValue={setPrice}
            />
            <ModalInput
              label="Giá hiển thị"
              placeholder="Nhập giá hiển thị"
              isRequired={true}
              onChangeValue={setDisplayPrice}
            />
            <ModalInput
              label="Loại thanh toán"
              placeholder="Chọn loại thanh toán"
              isRequired={true}
              isOption={true}
              isMutilOption={true}
              listoption={ConvertToOptionData([
                "Thẻ",
                "Tiền mặt",
                "Momo",
                "VNPT Pay",
              ])}
            />
          </div>
        </div>
      </div>
      <div className="add-product-footer">
        <div style={{ marginRight: 15 }}>
          <Button
            children={<p>Huỷ</p>}
            background={""}
            textColor={"#808999"}
            borderColor={"#808999"}
            onClick={props.closeAddScreen}
          />
        </div>
        <div>
          <Button
            children={<p>Thêm mới</p>}
            background={"#00BAB5"}
            textColor={"#fff"}
            borderColor={""}
            onClick={createProductData}
          />
        </div>
      </div>
      <ModalPopupComponent
        title="Input sản phẩm"
        body={modalAddImage()}
        invisibleFooter={true}
        ref={refAddImageModal}
      />
    </div>
  );
};
