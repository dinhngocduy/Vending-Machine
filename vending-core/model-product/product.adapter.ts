import { reqCreateProduct } from "../common/types/interface-base-request";
import ProductServices from "./product.services";

export function ProductAdapter() {
  // get list product
  const getListProduct = async (data: any) => {
    const res = await ProductServices.getInstance().getListProduct(data);
    return res;
  };

  // create a new product
  const createProduct = async (data: reqCreateProduct) => {
    console.log("Upload File :", data.mainImageFile);

    ProductServices.getInstance()
      .uploadImage(data.mainImageFile)
      .then((response) => {
        console.log("RESPONE UPLOAD IMAGE: ", response);

        const param = {
          name: data?.properties?.name,
          code: data?.properties?.code,
          description: data?.properties?.description,
          standardPrice: data?.properties?.standardPrice,
          imageDetail: response[0]?.filename,
          type: data?.properties?.type,
          active: data?.properties?.active,
        };

        ProductServices.getInstance()
          .createProduct(param)
          .then((res) => {
            return res;
          })
          .catch((err) => {
            return err;
          });
      })
      .catch((err) => {
        return err;
      });
  };

  // update product
  const updateProduct = async (data: any) => {
    if (data.mainImageFile) {
      const FormData = require("form-data");
      const formData = new FormData();
      formData.append("file", data.mainImageFile);

      ProductServices.getInstance()
        .uploadImage(formData)
        .then(async (response) => {
          const param = {
            id: data?.properties?.id,
            name: data?.properties?.name,
            code: data?.properties?.code,
            description: data?.properties?.description,
            standardPrice: data?.properties?.standardPrice,
            imageDetail: response[0]?.filename,
            type: data?.properties?.type,
            active: data?.properties?.active,
          };

          return await ProductServices.getInstance().updateProduct(param);
        });
    } else {
      const param = {
        id: data?.properties?.id,
        name: data?.properties?.name,
        code: data?.properties?.code,
        description: data?.properties?.description,
        standardPrice: data?.properties?.standardPrice,
        imageDetail: data?.properties?.imageDetail,
        type: data?.properties?.type,
        active: data?.properties?.active,
      };

      return await ProductServices.getInstance().updateProduct(param);
    }
  };

  return {
    getListProduct,
    createProduct,
    updateProduct,
  };
}
