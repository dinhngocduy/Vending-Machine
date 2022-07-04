import { ModalInput } from "libraries/components/modal-input/modal-input";
import Button from "../../../../../libraries/components/button/Button";
import { EditProductMapItemModalAdapter } from "./edit-product-map-item-modal.adapter";
import { EditProductMapItemProps } from "./edit-product-map-item-modal.props";

export const EditProductMapItemModal = (props: EditProductMapItemProps) => {
  const { closeModal } = props;

  const {
    proCapacity,
    setProCapacity,
    proName,
    setProName,
    proPrice,
    setProPrice,
    proQuantity,
    setProQuantity,
    proOpcode,
    setProOpcode,
    proSlotNum,
    setSlotNum,
    listProduct,
    updateProductMapItemData,
  } = EditProductMapItemModalAdapter(props);

  return (
    <>
      <ModalInput
        label="Chọn sản phẩm"
        placeholder="Chọn sản phẩm"
        isRequired={true}
        onChangeValue={setProName}
        isOption={true}
        listoption={listProduct}
        value={proName}
      />
      <ModalInput
        label="Giá tiền"
        placeholder="Nhập giá tiền"
        isRequired={true}
        onChangeValue={setProPrice}
        value={proPrice}
      />
      <ModalInput
        label="Số lượng ô chứa"
        placeholder="Nhập số lượng ô chứa"
        isRequired={true}
        onChangeValue={setProCapacity}
        value={proCapacity}
      />
      <ModalInput
        label="Số lượng sản phẩm"
        placeholder="Nhập số lượng sản phẩm"
        isRequired={true}
        onChangeValue={setProQuantity}
        value={proQuantity}
      />
      <ModalInput
        label="Vị trí trên máy"
        placeholder="Nhập vị trí trên máy"
        isRequired={true}
        onChangeValue={setSlotNum}
        value={proSlotNum}
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
          onClick={closeModal}
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
          onClick={updateProductMapItemData}
        >
          <>
            <p style={{ marginBottom: 0 }}>Lưu thay đổi</p>
          </>
        </Button>
      </div>
    </>
  );
};
