import { IProduct } from "libraries/types/product";
import { Table } from "reactstrap";
import { ListProduct } from "sample-data/product";
import CellTableItemScreen from "libraries/components/cell-table-item/cell-table-item";

import "./list-product.scss";
import { DeleteProductMapIcon, EditProductMapIcon } from "libraries/icons/icon";
import { PaginateComponent } from "libraries/components/paginate/paginate.component";
import { ListProductAdapter } from "./list-product.adapter";
import { APP_CONFIGS } from "vending-core/common/app-config";
import { EditProductModal } from "../modal-content/edit-product-modal/edit-product-modal";
import { ModalPopupProps } from "libraries/components/modal-popup/modal-popup.props";
import { useRef } from "react";
import {
  ModalPopupComponent,
  PopupModalRefProps,
} from "libraries/components/modal-popup/modal-popup.components";
import { ConfirmModal } from "libraries/components/confirm-modal/confirm-modal";
import LoadingSpinnerScreen from "libraries/components/loading-spinner/loading-spinner.screen";

export const ListProductComponent = () => {
  const {
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
    loading,
  } = ListProductAdapter();

  const tableContent = () => {
    if (loading) {
      return (
        <tr style={{ height: "100%" }}>
          <td colSpan={9}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <LoadingSpinnerScreen className="big" />
            </div>
          </td>
        </tr>
      );
    } else {
      if (listProduct && listProduct.length > 0) {
        return listProduct.map((item: IProduct, index: number) => {
          return (
            <tr key={index} style={{ height: 60 }}>
              <CellTableItemScreen
                isTh={true}
                content={(page - 1) * PRODUCT_PER_PAGE + index + 1}
                hasListOptions={false}
                isError={false}
                hasEditedByPm={false}
                listOptions={[]}
                style={{ width: "5%" }}
              ></CellTableItemScreen>
              <CellTableItemScreen
                content={item?.name}
                style={{ width: "25%" }}
                canEdit={true}
                child={
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                      width: "100%",
                      paddingLeft: 30,
                    }}
                  >
                    <img
                      style={{
                        height: 40,
                        width: 40,
                        borderRadius: 8,
                        objectFit: "contain",
                      }}
                      src={
                        APP_CONFIGS.URL_API + "files/image/" + item.imageDetail
                      }
                    />
                    <p style={{ flex: 1, marginLeft: 8, textAlign: "left" }}>
                      {item.name}
                    </p>
                  </div>
                }
                hasListOptions={false}
                hasEditedByPm={false}
                isError={false}
              ></CellTableItemScreen>
              <CellTableItemScreen
                style={{ width: "10%" }}
                content={item?.code}
                hasListOptions={false}
                isError={false}
                hasEditedByPm={false}
              ></CellTableItemScreen>
              <CellTableItemScreen
                style={{ width: "10%" }}
                content={"Nước giải khát"}
                canEdit={true}
                hasListOptions={false}
                hasEditedByPm={false}
                isError={false} // hasEditedByPm={checkSlotNumberHasEdited}
                // hasListOptions={false}
                // isError={
                //     errorCell.id === item.id &&
                //     errorCell.property === ENUM_PROPERTY.SLOT_NUMBER
                // }
                // isGetting={isGettingListProducts}
              ></CellTableItemScreen>
              <CellTableItemScreen
                hasListOptions={false}
                style={{ width: "10%" }}
                child={
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      className={`active-tag ${item.active ? "active" : ""}`}
                    >
                      <p>{item.active ? "Hoạt động" : "Ngưng hoạt động"}</p>
                    </div>
                  </div>
                }
                content={""}
                isError={false}
                hasEditedByPm={false}
              ></CellTableItemScreen>
              <CellTableItemScreen
                content={item?.description}
                style={{ width: "20%" }}
                hasListOptions={false}
                isError={false}
                hasEditedByPm={false}
              ></CellTableItemScreen>
              <CellTableItemScreen
                content={item?.standardPrice}
                style={{ width: "10%" }}
                contentIsCurrency={true}
                hasListOptions={false}
                isError={false}
                hasEditedByPm={false}
              ></CellTableItemScreen>
              <CellTableItemScreen
                style={{ width: "10%" }}
                child={
                  <div
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <EditProductMapIcon
                      style={{ marginRight: 14 }}
                      onClick={() => openEditProductModal(index)}
                    />
                    <DeleteProductMapIcon
                      onClick={() => deleteProductData(item.id)}
                    ></DeleteProductMapIcon>
                  </div>
                }
                content={""}
                hasListOptions={false}
                hasEditedByPm={false}
                isError={false}
              ></CellTableItemScreen>
            </tr>
          );
        });
      }
    }
  };

  return (
    <div className="list-product-container">
      <div className="list-product-table-wrap">
        <div className="list-product-container__table mt-2">
          <Table striped bordered style={{ height: loading ? "100%" : "" }}>
            <thead>
              <tr className="table__header">
                <th style={{ width: "5%" }}>
                  <span>STT</span>
                </th>
                <th style={{ width: "25%" }}>
                  <span>Sản phẩm</span>
                </th>
                <th style={{ width: "10%" }}>
                  <span>Mã sản phẩm</span>
                </th>
                <th style={{ width: "10%" }}>
                  <span>Nhóm</span>
                </th>
                <th style={{ width: "10%" }}>
                  <span>Trạng thái</span>
                </th>
                <th style={{ width: "20%" }}>
                  <span>Giới thiệu</span>
                </th>
                <th style={{ width: "10%" }}>
                  <span>Giá tiền</span>
                </th>
                <th style={{ width: "10%" }}>
                  <span>Hành động</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableContent()}
              {/* <tr></tr> */}
            </tbody>
          </Table>
        </div>

        <PaginateComponent
          totalPage={totalPage}
          currenPage={page}
          onChange={setPage}
        />
        <ModalPopupComponent
          ref={refEditProductModal}
          title={"Chỉnh sửa sản phẩm"}
          body={
            <EditProductModal
              closeModal={closeEditProductModal}
              listProduct={listProduct}
              index={productIndex}
            />
          }
        />
        <ConfirmModal ref={refConfirmModal} />
      </div>
    </div>
  );
};
