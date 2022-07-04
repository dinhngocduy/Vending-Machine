import ToastifyAdapter from "libraries/components/toastify/toastify.adapter";
import mapSlotToOpcode from "libraries/utils/map-slot-to-opcode";
import { useEffect, useRef, useState } from "react";
import EventBus, { EventBusName } from "vending-core/common/event-bus";
import { MachineAdapter } from "vending-core/model-machine/machine.adapter";
import { AddProductModalProps } from "./add-product-modal.props";

export const AddProductModalAdapter = (props: AddProductModalProps) => {
  const { addProductMap, getListProduct } = MachineAdapter();
  const { success, error } = ToastifyAdapter();

  //props
  const { machine, closeModal } = props;

  //state
  const [proName, setProName] = useState<any>("");
  const [proPrice, setProPrice] = useState<string>("");
  const [proCapacity, setProCapacity] = useState<string>("");
  const [proQuantity, setProQuantity] = useState<string>("");
  const [proOpcode, setProOpcode] = useState<string>("");
  const [proSlotNum, setSlotNum] = useState<number>(0);
  const [listProduct, setListProduct] = useState<any[]>([]);

  // -----------------
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

  // thêm một sản phẩm vào product mapping
  const onAddProduct = () => {
    const value = {
      product: { id: proName?.value },
      price: proPrice,
      capacity: proCapacity,
      remain: proQuantity,
      slotNo: proSlotNum,
      slotCode: proOpcode,
      machineId: machine?.machine?.id,
    };

    console.log("ADD PRODUCT MAP : ", value);
    addProductMap(value)
      .then((res) => {
        closeModal();
        success("Thêm sản phẩm vào product map thành công ");
        EventBus.getInstance().post({
          type: EventBusName.ADD_PRODUCT_MAP_ITEM,
          payload: res,
        });
      })
      .catch((err: any) => {
        closeModal();
        error("Thêm sản phẩm vào product map thất bại ");
      });
  };

  // lấy danh sách sản phẩm
  const getListProductData = () => {
    const params = {
      page: 0,
      size: 100,
    };

    getListProduct(params)
      .then((res) => {
        if (res?.data) {
          let _data = res.data
            .filter((item: any) => {
              if (item.active) {
                return item;
              }
            })
            .map((element: any) => {
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
    onAddProduct,
    listProduct,
  };
};
