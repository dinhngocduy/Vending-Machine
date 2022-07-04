import { ConfirmModalRefProps } from "libraries/components/confirm-modal/confirm-modal";
import { PopupModalRefProps } from "libraries/components/modal-popup/modal-popup.components";
import { IProduct } from "libraries/types/product";
import { useEffect, useRef, useState } from "react";
import { Subscription } from "rxjs";
import EventBus, {
  EventBusType,
  EventBusName,
} from "vending-core/common/event-bus";
import { ProductAdapter } from "vending-core/model-product/product.adapter";

const PRODUCT_PER_PAGE = 10;

export const ListProductAdapter = () => {
  const { getListProduct } = ProductAdapter();

  // state
  const [listProduct, setListProduct] = useState<IProduct[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [productIndex, setProductIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const refConfirmModal = useRef<ConfirmModalRefProps>(null);
  const refEditProductModal = useRef<PopupModalRefProps>(null);

  const openEditProductModal = (index: number) => {
    setProductIndex(index);
    refEditProductModal.current?.setIsOpen(true);
  };

  const closeEditProductModal = () => {
    refEditProductModal.current?.setIsOpen(false);
  };

  const subscriptions = new Subscription();

  useEffect(() => {
    EventBusSubCription();
  }, []);

  useEffect(() => {
    return () => {
      subscriptions.unsubscribe();
    };
  }, []);

  useEffect(() => {
    getListProductData();
  }, [page]);

  // Eventbus Subcription
  const EventBusSubCription = () => {
    subscriptions.add(
      EventBus.getInstance().events.subscribe((res: EventBusType) => {
        const payload = res?.payload;
        switch (res?.type) {
          case EventBusName.UPDATE_PRODUCT:
            updateProduct(payload);
            break;
        }
      })
    );
  };

  // get list product
  const getListProductData = () => {
    setLoading(true)
    const data = {
      page: page - 1,
      size: PRODUCT_PER_PAGE,
    };

    getListProduct(data).then((res: any) => {
      if (res?.data) {
        setListProduct(res.data);
        setTotalPage(res.numberOfPages);
        setLoading(false)
      }
    }).catch((err) => {
      setLoading(false)
    });
  };

  // on update product
  const updateProduct = (product: IProduct) => {
    setListProduct((prev) => {
      return prev.map((item) => {
        if (item.id === product.id) {
          return product;
        } else return item;
      });
    });
  };

  // on delete product map item
  const onDeleteProduct = (id: string) => {
    console.log("DELETE PRODUCT : ", id);

    // deleteProductMapItem(id)
    //   .then((res) => {
    //     if (res === "deleted") {
    //       getProductMap();
    //       success("Xoá sản phẩm thành công");
    //     } else {
    //       error("Xoá sản phẩm thất bại");
    //     }
    //   })
    //   .catch((err) => {
    //     error("Xoá sản phẩm thất bại");
    //   });
  };

  // delete item
  const deleteProductData = (id: string) => {
    refConfirmModal.current?.openModal(true, () => onDeleteProduct, id);
  };

  return {
    listProduct,
    page,
    totalPage,
    setPage,
    PRODUCT_PER_PAGE,
    productIndex,
    setProductIndex,
    refConfirmModal,
    refEditProductModal,
    openEditProductModal,
    closeEditProductModal,
    deleteProductData,
    loading
  };
};
