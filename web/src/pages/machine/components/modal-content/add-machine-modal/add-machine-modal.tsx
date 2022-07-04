import { ModalInput } from "libraries/components/modal-input/modal-input";
import { SelectLocationComponent } from "libraries/components/select-location/select-location-component";
import { ConvertToOptionData } from "libraries/utils/convert-to-option-data";
import Button from "../../../../../libraries/components/button/Button";
import { AddMachineModalAdpter } from "./add-machine-modal.adapter";
import { AddMachineModalProps } from "./add-machine-modal.props";

export const AddMachineModal = (props: AddMachineModalProps) => {
  const { closeModal } = props;

  const {
    setMachineName,
    setMachineModal,
    setSerialNum,
    setTenant,
    setStatus,
    setDescription,
    identityCode,
    setIdentityCode,
    listModel,
    locationRef,
    addMachine,
  } = AddMachineModalAdpter(props);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ flex: 1 }}>
        <ModalInput
          label="Tên máy"
          placeholder="Nhập tên máy"
          isRequired={true}
          onChangeValue={setMachineName}
        />
        <ModalInput
          label="Mã máy"
          placeholder="Nhập mã máy"
          isRequired={true}
          onChangeValue={setSerialNum}
        />
        <ModalInput
          label="Mã định danh"
          placeholder={"Nhập mã định danh"}
          isRequired={true}
          onChangeValue={setIdentityCode}
        />
        <ModalInput
          label="Model máy"
          placeholder="Chọn model máy"
          isRequired={true}
          isOption={true}
          listoption={listModel}
          onChangeValue={setMachineModal}
        />
        <SelectLocationComponent ref={locationRef} />

        <ModalInput
          label="Nhà điều hành"
          placeholder="Chọn nhà điều hành"
          isRequired={true}
          isOption={true}
          listoption={ConvertToOptionData(["Hyperlogy", "Root"])}
          onChangeValue={setTenant}
        />
        <ModalInput
          label="Trạng thái"
          placeholder="Chọn trạng thái"
          isRequired={true}
          isOption={true}
          listoption={[
            { label: "Hoạt động", value: true },
            { label: "Không hoạt động", value: false },
          ]}
          onChangeValue={setStatus}
        />
        <ModalInput
          label="Mô tả"
          placeholder="Nhập mô tả "
          isRequired={true}
          isTextArea={true}
          onChangeValue={setDescription}
        />
      </div>
      <div className="sidebar-modal-footer">
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
          onClick={addMachine}
        >
          <>
            <p style={{ marginBottom: 0 }}>Thêm mới</p>
          </>
        </Button>
      </div>
    </div>
  );
};
