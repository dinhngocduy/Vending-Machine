import ComboBox from "libraries/components/combo-box/ComboBox";
import { PlusIcon } from "libraries/icons/icon";
import Button from "libraries/components/button/Button";
import SearchInput from "pages/machine/components/search-input/search-input";
import { useState } from "react";
import { AddProductComponent } from "./components/add-product/add-product.component";
import { ListProductComponent } from "./components/list-product/list-product.component";
import "./product.scss";

export const ProductScrren = () => {
  const [openAdd, setOpenAdd] = useState<boolean>(false);

  const openAddProduct = () => {
    setOpenAdd(true);
  };

  const closeAddProduct = () => {
    setOpenAdd(false);
  };

  return (
    <div className="product-ctn">
      {openAdd ? (
        <AddProductComponent closeAddScreen={closeAddProduct} />
      ) : (
        <>
          <div className="product-fiterbar">
            <div className="product-filterbar__left">
              <ComboBox
                label="Nhóm sản phẩm"
                listOption={["Tất cả", "Hyperlogy", "Root"]}
              />
              <ComboBox
                label="Trạng thái"
                listOption={["Tất cả", "Hoạt động", "Không hoạt động"]}
              />
              <SearchInput hint="Mã sản phẩm" />
            </div>
            <div className="product-filterbar__center">
              <div className="product-filterbar__search">
                <Button
                  background="none"
                  textColor="#00BAB5"
                  borderColor="#00BAB5"
                >
                  <p>Tìm kiếm</p>
                </Button>
              </div>
              <div className="product-filterbar__right">
                <Button
                  background="#00BAB5"
                  textColor="#FFF"
                  borderColor="none"
                  onClick={openAddProduct}
                >
                  <div
                    // onClick={openAddMachineModal}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <i style={{ height: 24, width: 24 }}>
                      <PlusIcon />
                    </i>
                    <p style={{ marginLeft: "8px" }}>Thêm sản phẩm</p>
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="product-manager-view">
            <ListProductComponent />
          </div>
        </>
      )}
    </div>
  );
};
