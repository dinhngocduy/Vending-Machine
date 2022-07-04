import { IProductMapItem } from "libraries/types/machine";
import { IOption } from "libraries/types/type";
import mapSlotToOpcode from "libraries/utils/map-slot-to-opcode";
import { useEffect, useState } from "react";
import EventBus, { EventBusName } from "vending-core/common/event-bus";
import { MachineAdapter } from "vending-core/model-machine/machine.adapter";
import { EditProductMapItemProps } from "./edit-product-map-item-modal.props";

export const EditProductMapItemModalAdapter = (
  props: EditProductMapItemProps
) => {
  const { getListProduct, updateProductMapItem } = MachineAdapter();
  const { indexItem, closeModal, machine, listProductMapItem } = props;

  //state
  const [proName, setProName] = useState<IOption>();
  const [proPrice, setProPrice] = useState<number>();
  const [proCapacity, setProCapacity] = useState<number>();
  const [proQuantity, setProQuantity] = useState<number>();
  const [proOpcode, setProOpcode] = useState<string>("");
  const [proSlotNum, setSlotNum] = useState<number>(0);
  const [listProduct, setListProduct] = useState<any[]>([]);

  useEffect(() => {
    getListProductData();
  }, []);

  useEffect(() => {
    setProOpcode(
      mapSlotToOpcode(
        proSlotNum,
        machine?.machine?.modelInfo?.numberOfColumn || 1
      )
    );
  }, [proSlotNum]);

  useEffect(() => {
    console.log("Change Item Product Map");

    setProName({
      label: listProductMapItem[indexItem]?.product?.name || "",
      value: listProductMapItem[indexItem]?.product?.id,
    });
    setProPrice(listProductMapItem[indexItem]?.price);
    setProCapacity(listProductMapItem[indexItem]?.capacity);
    setProQuantity(listProductMapItem[indexItem]?.remain);
    setSlotNum(listProductMapItem[indexItem]?.slotNo || 0);
  }, [indexItem, listProductMapItem]);

  // lấy danh sách sản phẩm
  const getListProductData = async () => {
    const params = {
      page: 0,
      size: 100,
    };
    getListProduct(params)
      .then((res) => {
        if (res?.data) {
          let _data = res.data.map((element: any) => {
            let item: any = {};
            item["value"] = element?.id;
            item["label"] = element?.name;
            return item;
          });

          setListProduct(_data);
        }
      })
      .catch((err: any) => {});
  };

  // update product map item
  const updateProductMapItemData = () => {
    const data = {
      id: listProductMapItem[indexItem]?.id,
      product: { id: proName?.value },
      price: proPrice,
      capacity: proCapacity,
      remain: proQuantity,
      slotNo: proSlotNum,
      slotCode: proOpcode,
    };

    updateProductMapItem(data).then((res: any) => {
      closeModal();
      EventBus.getInstance().post({
        type: EventBusName.UPDATE_PRODUCT_MAP_ITEM,
        payload: res,
      });
    });
  };

  return {
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
  };
};
