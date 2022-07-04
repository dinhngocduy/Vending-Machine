import { ModalInput } from "libraries/components/modal-input/modal-input";
import { ConvertToOptionData } from "libraries/utils/convert-to-option-data";
import { AddProductProps } from "pages/product/components/add-product/add-product.props";
import Button from "../../../../../libraries/components/button/Button";
import { AddProductModalAdapter } from "./add-product-modal.adpter";
import { AddProductModalProps } from "./add-product-modal.props";

export const AddProductModal = (props: AddProductModalProps) => {
  const {
    setProName,
    setProCapacity,
    setProOpcode,
    proOpcode,
    setProPrice,
    setProQuantity,
    setSlotNum,
    onAddProduct,
    listProduct,
  } = AddProductModalAdapter(props);

  return (
    <>
      <ModalInput
        label="Chọn sản phẩm"
        placeholder="Chọn sản phẩm"
        isRequired={true}
        onChangeValue={setProName}
        isOption={true}
        listoption={listProduct}
      />
      <ModalInput
        label="Giá tiền"
        placeholder="Nhập giá tiền"
        isRequired={true}
        onChangeValue={setProPrice}
      />
      <ModalInput
        label="Số lượng ô chứa"
        placeholder="Nhập số lượng ô chứa"
        isRequired={true}
        onChangeValue={setProCapacity}
      />
      <ModalInput
        label="Số lượng sản phẩm"
        placeholder="Nhập số lượng sản phẩm"
        isRequired={true}
        onChangeValue={setProQuantity}
      />
      <ModalInput
        label="Vị trí trên máy"
        placeholder="Nhập vị trí trên máy"
        isRequired={true}
        onChangeValue={setSlotNum}
      />
      <ModalInput
        label="Opcode"
        isRequired={false}
        placeholder="Nhập Opcode"
        onChangeValue={setProOpcode}
        disableTextInput={true}
        disableValue={proOpcode}
      />

      <div className="popup-modal-footer">
        <Button
          background="#fff"
          textColor="#808999"
          borderColor="#808999"
          height={40}
          width={100}
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
          onClick={onAddProduct}
        >
          <>
            <p style={{ marginBottom: 0 }}>Thêm mới</p>
          </>
        </Button>
      </div>
    </>
  );
};
