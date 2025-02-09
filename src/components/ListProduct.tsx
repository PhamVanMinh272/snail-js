import { MouseEvent, useEffect, useState } from "react";
import Product from "../class_objects/product";
import profilePic from '../assets/vinastar.webp';

interface Props {
  products: Product[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListProduct({ products, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
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
                  ? "card active"
                  : "card"
              }
              key={item.id}
              onClick={() => {
                setSelectedIndex(item.id);
                onSelectItem(item.name);
              }}
            >
              <img src={profilePic} className="card-img-top" alt="Ong Cau Long"></img>
              <div className="card-body">
                <p className="card-title">{item.name}</p>
                {/* <p className="card-text">{item.id}</p> */}
                {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
              </div>
              <div className="card-footer">
                  <small className="text-muted">{item.id}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ListProduct;
