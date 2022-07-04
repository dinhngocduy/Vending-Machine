import Button from "libraries/components/button/Button";
import { ModalInput } from "libraries/components/modal-input/modal-input";
import { SwitchComponent } from "libraries/components/switch-component/switch-component";
import { useState } from "react";

export const AddModelMachineModal = () => {
  const [status, setStatus] = useState<boolean>(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div>
        <ModalInput
          label={"Tên model máy"}
          placeholder={"nhập tên model máy"}
          isRequired={true}
        />
        <ModalInput
          label={"Mô tả"}
          placeholder={"Nhập mô tả"}
          isRequired={true}
          isTextArea={true}
        />
        <SwitchComponent
          title="Trạng thái"
          value={status}
          setValue={setStatus}
        />
      </div>
      <div className="popup-modal-footer">
        <Button
          background="#fff"
          textColor="#808999"
          borderColor="#808999"
          height={40}
          width={100}
          // onClick={props.closeModal}
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
          // onClick={onUpdateProduct}
        >
          <>
            <p style={{ marginBottom: 0 }}>Thêm Model</p>
          </>
        </Button>
      </div>
    </div>
  );
};
