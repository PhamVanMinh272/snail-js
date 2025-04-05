import { useEffect, useState } from "react";
import Category from "../../types/category";

interface Props {
  handleSelectItem: (item: Category) => void;
  categories: Category[];
}

function ListCategory({ handleSelectItem, categories }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      {/* <ul className="list-group my-category-list">
        {categories.map((item) => (
          <li
            key={item.id}
            className={
              selectedIndex == item.id
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(item.id);
              handleSelectItem(item);
            }}
          >
            {item.name}
          </li>
        ))}
      </ul> */}
      <div className="row">
        {/* <div className="col col-6 col-sm-3 col-md-3 col-lg-2"></div> */}
        {categories.map((item) => (
          <div
            className="col col-auto my-category-item"
            onClick={() => {
              setSelectedIndex(item.id);
              handleSelectItem(item);
            }}
          >
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default ListCategory;
