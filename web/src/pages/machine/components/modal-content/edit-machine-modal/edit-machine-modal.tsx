import { ModalInput } from "libraries/components/modal-input/modal-input";
import { SelectLocationComponent } from "libraries/components/select-location/select-location-component";
import { ConvertToOptionData } from "libraries/utils/convert-to-option-data";
import Button from "../../../../../libraries/components/button/Button";
import { EditMachineModalAdapter } from "./edit-machine-modal.adpter";
import { EditMachineModalProps } from "./edit-machine-modal.props";

export const EditMachineModal = (props: EditMachineModalProps) => {
  const { machine, closeModal } = props;
  const {
    machineName,
    serialNum,
    machineModel,
    status,
    description,
    setMachineName,
    setDescription,
    setMachineModal,
    setSerialNum,
    setStatus,
    locationRef,
    listModel,
    updateMachineData,
    identifyCode,
    setIdentifyCode,
  } = EditMachineModalAdapter(props);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ flex: 1 }}>
        <ModalInput
          label="Tên máy"
          placeholder="Nhập tên máy"
          isRequired={true}
          value={machineName}
          onChangeValue={setMachineName}
        />
        <ModalInput
          label="Model máy"
          placeholder="Chọn model máy"
          isRequired={true}
          isOption={true}
          listoption={listModel}
          value={machineModel}
          onChangeValue={setMachineModal}
        />
        <ModalInput
          label="Mã máy"
          placeholder="Nhập mã máy"
          isRequired={true}
          value={serialNum}
          onChangeValue={setSerialNum}
        />
        <ModalInput
          label="Mã định danh"
          placeholder={"Nhập mã định danh"}
          isRequired={true}
          value={identifyCode}
          onChangeValue={setIdentifyCode}
        />
        <SelectLocationComponent
          ref={locationRef}
          defaultValue={{
            city: machine?.machine?.province || "",
            district: machine?.machine?.district || "",
            ward: machine?.machine?.village || "",
            address: machine?.machine?.address || "",
          }}
        />
        <ModalInput
          label="Trạng thái"
          placeholder="Chọn trạng thái"
          isRequired={true}
          isOption={true}
          value={status}
          listoption={[
            { label: "Hoạt động", value: true },
            { label: "Không hoạt động", value: false },
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
          onClick={updateMachineData}
        >
          <>
            <p style={{ marginBottom: 0 }}>Lưu thay đổi</p>
          </>
        </Button>
      </div>
    </div>
  );
};
