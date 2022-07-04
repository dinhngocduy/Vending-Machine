import "./top-product.scss";

export const TopProductComponent = () => {
  const item = () => {
    return (
      <>
        <div className="item-product-ctn">
          <img
            alt=""
            src="https://app.smartvendingmachines.net/files/image/e0a475864ef7630391216d8c370bdc71.png"
            className="item-product-image"
          />
          <span className="item-product-name" style={{ flex: 2 }}>
            Cocacola
          </span>
          <div className="item-product-cell" style={{ flex: 1 }}>
            <span className="item-product-label">Giá bán</span>
            <span className="item-product-value">10.000đ</span>
          </div>
          <div className="item-product-cell" style={{ flex: 2 }}>
            <span className="item-product-label">Số lượng bán được</span>
            <span className="item-product-value">500</span>
          </div>
          <div className="item-product-cell" style={{ flex: 2 }}>
            <span className="item-product-label">Tổng doanh thu</span>
            <span className="item-product-value">5.000.000đ</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="top-product-ctn">
        <div className="top-product-header">
          <span className="container-title">Top mặt hàng bán chạy</span>
        </div>
        <div className="top-product-body">
          {item()}
          {item()}
          {item()}
          {item()}
          {item()}
          {item()}
          {item()}
        </div>
      </div>
    </>
  );
};
