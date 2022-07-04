import { AddImageIcon } from "libraries/icons/icon";
import { ChooseModalProps } from "./choose-image.props";
import "./choose-image.scss";

export const ChooseImageComponent = (props: ChooseModalProps) => {
  return (
    <div className="choose-image-ctn">
      <p className="choose-image-label">
        Hình ảnh sản phẩm <p>*</p>
      </p>
      {props.image ? (
        <img
          alt=""
          className="product-image"
          src={props.image.pathFile}
          onClick={props.onclick}
        />
      ) : (
        <AddImageIcon onClick={props.onclick} />
      )}
    </div>
  );
};
