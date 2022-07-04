import { useEffect, useRef, useState } from "react";
import ToastifyAdapter from "libraries/components/toastify/toastify.adapter";
import { ProductMappingProps } from "./product-mapping.props";
import { MachineAdapter } from "vending-core/model-machine/machine.adapter";
import { Subscription } from "rxjs";

import { IProductMapItem } from "libraries/types/machine";
import { ConfirmModalRefProps } from "libraries/components/confirm-modal/confirm-modal";
import { PopupModalRefProps } from "libraries/components/modal-popup/modal-popup.components";
import EventBus, {
  EventBusType,
  EventBusName,
} from "vending-core/common/event-bus";

function ProductMappingAdapter(props: ProductMappingProps) {
  const { getProductMapMachine, deleteProductMapItem } = MachineAdapter();
  const { success, error } = ToastifyAdapter();
  const subscriptions = new Subscription();

  const PAGE_SIZE = 8;

  //state
  const [listProducts, setListProducts] = useState<IProductMapItem[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [indexItem, setIndexItem] = useState<number>(-1);
  const [searchText, setSearchText] = useState<string>("");

  const refConfirmModal = useRef<ConfirmModalRefProps>(null);
  const refAddProductModal = useRef<PopupModalRefProps>(null);
  const refEditProductMapItemModal = useRef<PopupModalRefProps>(null);

  // minhnn ------------------------------
  useEffect(() => {
    EventBusSubCription();
  }, []);

  useEffect(() => {
    return () => {
      subscriptions.unsubscribe();
    };
  }, []);

  useEffect(() => {
    setPage(1);
    setListProducts([]);
  }, [props.machine]);

  useEffect(() => {
    getProductMap();
  }, [page, props.machine]);

  useEffect(() => {
    setTimeout(() => {
      getProductMap();
    }, 1000);
  }, [searchText]);

  useEffect(() => {
    console.log("LIST PRODUCT MAP : ", listProducts);
  }, [listProducts]);

  // Eventbus Subcription
  const EventBusSubCription = () => {
    subscriptions.add(
      EventBus.getInstance().events.subscribe((res: EventBusType) => {
        const payload = res?.payload;
        switch (res?.type) {
          case EventBusName.UPDATE_PRODUCT_MAP_ITEM:
            onUpdateProductMapItem(payload);
            break;
          case EventBusName.ADD_PRODUCT_MAP_ITEM:
            getProductMap();
            break;
        }
      })
    );
  };

  // lấy danh sách product map
  const getProductMap = () => {
    setLoading(true);
    const data = {
      machineId: props.machine?.machine?.id,
      page: page - 1,
      size: PAGE_SIZE,
      keyword: searchText,
    };

    getProductMapMachine(data)
      .then((res: any) => {
        setListProducts(res?.data || []);
        setTotalPage(res?.numberOfPages || 0);
        setLoading(false);
      })
      .catch((err: any) => {
        setLoading(false);
      });
  };

  // // click edit item
  // const clickEditItem = (index: number) => {
  //   props.editProductMapItem(listProducts[index]);
  // };

  // on update product map item
  const onUpdateProductMapItem = (payload: IProductMapItem) => {
    setListProducts((prev: IProductMapItem[]) => {
      return prev.map((element) => {
        if (element.id === payload.id) {
          return payload;
        } else {
          return element;
        }
      });
    });
  };

  // on delete product map item
  const onDeleteProductMapItem = (id: string) => {
    deleteProductMapItem(id)
      .then((res) => {
        if (res === "deleted") {
          getProductMap();
          success("Xoá sản phẩm thành công");
        } else {
          error("Xoá sản phẩm thất bại");
        }
      })
      .catch((err) => {
        error("Xoá sản phẩm thất bại");
      });
  };

  // delete item
  const deleteProductMapItemData = (id: string) => {
    refConfirmModal.current?.openModal(true, () => onDeleteProductMapItem, id);
  };

  const closeEditProductMapItemModal = () => {
    refEditProductMapItemModal.current?.setIsOpen(false);
  };

  const openEditProductMapItemModal = (item: any) => {
    console.log("EDIT PRODUCT MAP ITEM : ", item, " --- ", listProducts);

    setIndexItem(item);
    refEditProductMapItemModal.current?.setIsOpen(true);
  };

  const openAddProductModal = () => {
    refAddProductModal.current?.setIsOpen(true);
  };

  const closeAddProductModal = () => {
    refAddProductModal.current?.setIsOpen(false);
  };

  // ----------------------------------------

  return {
    listProducts,
    page,
    setPage,
    totalPage,
    loading,
    PAGE_SIZE,
    refConfirmModal,
    deleteProductMapItemData,
    indexItem,
    openEditProductMapItemModal,
    closeEditProductMapItemModal,
    refEditProductMapItemModal,
    openAddProductModal,
    closeAddProductModal,
    refAddProductModal,
    searchText,
    setSearchText,
  };
}

export default ProductMappingAdapter;
