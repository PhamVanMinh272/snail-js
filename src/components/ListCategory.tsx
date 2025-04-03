import { useEffect, useState } from "react";
import Category from "../class_objects/category";


interface Props {
  handleSelectItem: (item: Category) => void;
  categories: Category[];
}

function ListCategory({handleSelectItem, categories}: Props) {
  
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <ul className="list-group">
        {
          categories.map((item) => (
            <li className={
              selectedIndex == item.id?
              "list-group-item active" :
              "list-group-item"
            } onClick={() => {
              setSelectedIndex(item.id);
              handleSelectItem(item);
            }}>
              {item.name}
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default ListCategory;
