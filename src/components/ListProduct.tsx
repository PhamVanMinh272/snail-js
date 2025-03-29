import { MouseEvent, useEffect, useState } from "react";
import Product from "../class_objects/product";
import profilePic from "../assets/vinastar.webp";
import { BASE_IMG } from "../common/url_sets";
import ProductFilter from "./ProductFilter";
import ProductFilterDropdown from "./ProductFilterDropdown";

interface Props {
  visible: boolean;
  products: Product[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListProduct({ visible, products, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <p>{heading}</p>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 d-none d-md-block">
            <ProductFilter></ProductFilter>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-md-none">
            <ProductFilterDropdown></ProductFilterDropdown>
          </div>
        </div>
        {products.length === 0 && visible && <p>Chưa có sản phẩm!</p>}
        {visible === false && <p>Loading ...</p>}

        <div className={visible ? "row" : "row invisible"}>
          {/* <div className="card-group"> */}
          {products.map((item) => (
            <div className="col-6 col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-4">
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
      </div>
    </>
  );
}

export default ListProduct;
