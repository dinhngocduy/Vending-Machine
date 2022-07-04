import { PopupModalRefProps } from "libraries/components/modal-popup/modal-popup.components";
import { IOption } from "libraries/types/type";
import { useEffect, useRef, useState } from "react";
import { ProductAdapter } from "vending-core/model-product/product.adapter";
import { AddProductProps } from "./add-product.props";

export const AddProductAdapter = (props: AddProductProps) => {
  const { createProduct } = ProductAdapter();

  const refAddImageModal = useRef<PopupModalRefProps>(null);
  const refInputFile = useRef<any>(null);

  const { closeAddScreen } = props;

  // state
  const [image, setImage] = useState<any>();
  const [imageDisplay, setImageDisplay] = useState<any>();
  const [proName, setProductName] = useState<string>("");
  const [proCode, setProductCode] = useState<string>("");
  const [proGroup, setProductGroup] = useState<IOption>();
  const [status, setStatus] = useState<IOption>();
  const [description, setDescription] = useState<string>("");
  const [cost, setCost] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [displayPrice, setDisplayPrice] = useState<string>("");

  useEffect(() => {
    console.log("IMAGE", image);
    if (image) {
      var file = image;
      const pathfile = URL.createObjectURL(file);
      file["pathFile"] = pathfile;
      setImageDisplay(file);
    }
  }, [image]);

  // open modal
  const openModal = () => {
    refAddImageModal.current?.setIsOpen(true);
  };

  const closeModal = () => {
    refAddImageModal.current?.setIsOpen(false);
  };

  // on choose image
  const onChooseImage = (event: any) => {
    const data = event.target.files[0];
    setImage(data);
    closeModal();
  };

  // createProduct
  const createProductData = () => {
    const pro = {
      name: proName,
      code: proCode,
      standardPrice: price,
      description: description,
      type: 1,
      active: status?.value,
    };

    const FormData = require("form-data");
    const formData = new FormData();
    formData.append("file", image);

    const data = {
      properties: pro,
      mainImageFile: formData,
    };

    createProduct(data)
      .then((res) => {
        closeAddScreen();
      })
      .catch((err: any) => {
        closeAddScreen();
      });
  };

  return {
    onChooseImage,
    openModal,
    refAddImageModal,
    refInputFile,
    image,
    setProductName,
    setProductCode,
    setProductGroup,
    setStatus,
    setDescription,
    setPrice,
    setCost,
    setDisplayPrice,
    createProductData,
    imageDisplay,
  };
};
