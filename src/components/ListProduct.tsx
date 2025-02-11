import { MouseEvent, useEffect, useState } from "react";
import Product from "../class_objects/product";
import profilePic from '../assets/vinastar.webp';
import { BASE_IMG } from "../url_sets";

interface Props {
  products: Product[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListProduct({ products, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <p>{heading}</p>
      {products.length === 0 && <p>Loading ...</p>}
      {/* <ul className="list-group">
        {products.map((item) => (
          <li
            className={
              selectedIndex === item.id
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item.id}
            onClick={() => {
              setSelectedIndex(item.id);
              onSelectItem(item.name);
            }}
          >
            {item.name}
          </li>
        ))}
      </ul> */}

      <div className="row row-cols-1 row-cols-md-5 g-4">
      {/* <div className="card-group"> */}
        {products.map((item) => (
          <div className="col">
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
              <img src={item.image ? BASE_IMG+item.image.name : "https://s3.us-west-2.amazonaws.com/www.snail.com/public/625cf0e0-8557-4d85-8550-514c8c381a41.jpg"} className="card-img-top" alt="Ong Cau Long"></img>
              <div className="card-body d-flex flex-column d-flex flex-column">
                <p className="card-text mt-auto">{item.name}</p>
                {/* <p className="card-text">{item.id}</p> */}
                {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
              </div>
              <div className="card-footer">
                {/* <p className="card-text">{item.name}</p> */}
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
