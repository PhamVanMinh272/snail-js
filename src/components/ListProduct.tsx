import { MouseEvent, useEffect, useState } from "react";
import Product from "../class_objects/product";
import { BASE_IMG } from "../common/url_sets";

interface Props {
  products: Product[];
  isLoading: boolean;
  onSelectItem: (item: string) => void;
}

function ListProduct({ isLoading, products, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      {products.length === 0 && !isLoading && <p>Chưa có sản phẩm!</p>}
      {isLoading && (
        <div className="d-flex justify-content-center">
          <div
            className="spinner-border text-secondary"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            {/* <span className="sr-only">Loading...</span> */}
          </div>
        </div>
      )}

      <div className={isLoading === false ? "row" : "row invisible"}>
        {products.map((item) => (
          <div className="col-6 col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 p-1">
            <div
              className={
                selectedIndex === item.id
                  ? "card h-100 d-flex flex-column active"
                  : "card h-100 d-flex flex-column"
              }
              key={item.id}
              onClick={() => {
                setSelectedIndex(item.id);
                onSelectItem(item.name);
              }}
            >
              <img
                src={
                  item.image
                    ? BASE_IMG + item.image[0].name
                    : "https://s3.us-west-2.amazonaws.com/www.snail.com/public/625cf0e0-8557-4d85-8550-514c8c381a41.jpg"
                }
                className="card-img-top"
                alt="Ong Cau Long"
              ></img>
              <div className="card-body d-flex flex-column d-flex flex-column">
                <p className="card-text mt-auto d-inline-block text-truncate">
                  {item.name}
                </p>
              </div>
              <div className="card-footer">
                <small>{item.price.toLocaleString()}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ListProduct;
