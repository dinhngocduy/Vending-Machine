import ToastifyAdapter from "libraries/components/toastify/toastify.adapter";
import { IOption } from "libraries/types/type";
import { useEffect, useState } from "react";
import EventBus, { EventBusName } from "vending-core/common/event-bus";
import { ProductAdapter } from "vending-core/model-product/product.adapter";
import { EditProductModalProps } from "./edit-product-modal.props";

export const EditProductModalAdapter = (props: EditProductModalProps) => {
  const { success, error } = ToastifyAdapter();

  // state
  const [image, setImage] = useState<any>();
  const [imageDisplay, setImageDisplay] = useState<any>();
  const [proName, setProductName] = useState<string>("");
  const [proCode, setProductCode] = useState<string>("");
  const [proGroup, setProductGroup] = useState<IOption>();
  const [status, setStatus] = useState<IOption>();
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  const { listProduct, index, closeModal } = props;
  const { updateProduct } = ProductAdapter();

  useEffect(() => {
    setProductName(listProduct[index]?.name || "");
    setProductCode(listProduct[index]?.code || "");
    setPrice(listProduct[index]?.standardPrice || 0);
    setDescription(listProduct[index]?.description || "");
    setStatus({
      label: listProduct[index]?.active ? "hoạt động" : "không hoạt động",
      value: listProduct[index]?.active,
    });
  }, [listProduct, index]);

  useEffect(() => {
    console.log("IMAGE", image);
    if (image) {
      var file = image;
      const pathfile = URL.createObjectURL(file);
      file["pathFile"] = pathfile;
      setImageDisplay(file);
    }
  }, [image]);

  // on choose image
  const onChooseImage = (event: any) => {
    const data = event.target.files[0];
    setImage(data);
  };

  // on update product
  const onUpdateProduct = () => {
    const pro = {
      id: listProduct[index]?.id,
      name: proName,
      code: proCode,
      description: description,
      standardPrice: price,
      type: 1,
      active: status?.value,
      imageDetail: listProduct[index]?.imageDetail,
    };

    const data = {
      properties: pro,
      mainImageFile: image,
    };

    updateProduct(data)
      .then((res: any) => {
        success("lưu thay đổi sản phẩm thành công");
        if (res?.id) {
          EventBus.getInstance().post({
            type: EventBusName.UPDATE_PRODUCT,
            payload: res,
          });
        }
        closeModal();
      })
      .catch((err: any) => {
        error("lưu thay đổi sản phẩm thất bại");
        closeModal();
      });
  };

  return {
    image,
    proName,
    setProductName,
    proCode,
    setProductCode,
    proGroup,
    setProductGroup,
    status,
    setStatus,
    description,
    setDescription,
    price,
    setPrice,
    imageDisplay,
    onChooseImage,
    onUpdateProduct,
  };
};
