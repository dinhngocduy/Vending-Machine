import { ModalInput } from "libraries/components/modal-input/modal-input";
import Button from "libraries/components/button/Button";
import { ChooseImageComponent } from "libraries/components/choose-image/choose-image.component";
import { EditProductModalAdapter } from "./edit-product-modal.adapter";
import { EditProductModalProps } from "./edit-product-modal.props";
import { useRef } from "react";

export const EditProductModal = (props: EditProductModalProps) => {
  const {
    proName,
    setProductName,
    proCode,
    setProductCode,
    status,
    setStatus,
    description,
    setDescription,
    price,
    setPrice,
    imageDisplay,
    onChooseImage,
    onUpdateProduct
  } = EditProductModalAdapter(props);

  const {} = props;
  const refInputFile = useRef<any>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ flex: 1 }}>
        <ModalInput
          label="Tên sản phẩm"
          placeholder="Nhập tên sản phẩm"
          isRequired={true}
          value={proName}
          onChangeValue={setProductName}
        />
        <ModalInput
          label="Mã sản phẩm"
          placeholder="Nhập mã sản phẩm"
          isRequired={true}
          // isOption={true}
          // listoption={listModel}
          value={proCode}
          onChangeValue={setProductCode}
        />
        <ModalInput
          label="Giá sản phẩm"
          placeholder="Nhập giá sản phẩm"
          isRequired={true}
          value={price}
          onChangeValue={setPrice}
        />

        <ModalInput
          label="Trạng thái"
          placeholder="Chọn trạng thái"
          isRequired={true}
          isOption={true}
          value={status}
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
          value={description}
          onChangeValue={setDescription}
        />
        <input
          type="file"
          id="file"
          style={{ display: "none" }}
          ref={refInputFile}
          onChange={(event) => {
            onChooseImage(event);
          }}
        />
        <ChooseImageComponent
          onclick={() => {
            refInputFile.current.click();
          }}
          image={imageDisplay}
        />
      </div>
      <div className="popup-modal-footer">
        <Button
          background="#fff"
          textColor="#808999"
          borderColor="#808999"
          height={40}
          width={100}
          onClick={props.closeModal}
        >
          <>
            <p style={{ marginBottom: 0 }}>Huỷ</p>
          </>
        </Button>
        <Button
          background="#00BAB5"
          textColor="#FFF"
          borderColor="none"
          height={40}
          width={100}
          onClick={onUpdateProduct}
        >
          <>
            <p style={{ marginBottom: 0 }}>Lưu thay đổi</p>
          </>
        </Button>
      </div>
    </div>
  );
};
