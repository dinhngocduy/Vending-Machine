import { PullImageIcon, UploadImageIcon } from "libraries/icons/icon";
import { useEffect, useRef, useState } from "react";
import Button from "libraries/components/button/Button";

import "./edit-banner-modal.scss";
import { EditBannerModalProps } from "./edit-banner-modal.props";
import { MachineAdapter } from "vending-core/model-machine/machine.adapter";
import EventBus, { EventBusName } from "vending-core/common/event-bus";

export const EditBannerModalComponent = (props: EditBannerModalProps) => {
  const { postBannerMachine } = MachineAdapter();

  const [image, setImage] = useState<any>();
  const [displayImage, setDisplayImage] = useState<any>();

  const refInputFile = useRef<any>(null);
  const onChooseImage = (event: any) => {
    console.log("====================================");
    console.log("Choose File : ", event.target.files);
    console.log("====================================");
    setImage(event.target.files[0]);
  };

  useEffect(() => {
    if (image) {
      var file = image;
      const pathfile = URL.createObjectURL(file);
      file["pathFile"] = pathfile;
      setDisplayImage(file);
    }
  }, [image]);

  const uploadBanner = async () => {
    const data = {
      machineId: props.machine?.machine.id,
      mainImageFile: image,
    };
    postBannerMachine(data).then((res) => {
      EventBus.getInstance().post({
        type: EventBusName.ADD_BANNER,
      });
      props.closeModal();
    });
  };

  return (
    <>
      <div className="container">
        <div className="iput-file-icon">
          <input
            type="file"
            id="file"
            // multiple={true}
            style={{ display: "none" }}
            ref={refInputFile}
            onChange={(event) => {
              onChooseImage(event);
            }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {displayImage ? (
            <img src={displayImage.pathFile} alt="" className="display-img" />
          ) : (
            <PullImageIcon
              onClick={() => {
                refInputFile.current.click();
              }}
            />
          )}
        </div>
        <div
          style={{
            margin: 15,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            children={<p>Huỷ</p>}
            background={""}
            textColor={"#808999"}
            borderColor={"#808999"}
            onClick={props.closeModal}
          />
          <Button
            children={<p>Lưu</p>}
            background={"#00BAB5"}
            textColor={"#fff"}
            borderColor={""}
            onClick={uploadBanner}
          />
        </div>
      </div>
    </>
  );
};
