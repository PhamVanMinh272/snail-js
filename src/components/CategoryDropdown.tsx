import { useEffect, useState } from "react";
import Category from "../class_objects/category";

interface Props {
  handleSelectItem: (item: Category) => void;
  categories: Category[];
}

function CategoryDropdown({ handleSelectItem, categories }: Props) {

  return (
    <>
      <div className="d-flex flex-column">
        <div className="m-auto">
          <button className="category-collapse-btn m-0" data-bs-toggle="collapse"
            data-bs-target="#collapseCategory"><i className="bi bi-list-ul"></i> Danh Mục</button>
        </div>
      </div>
      <ul className="list-group collapse mb-3" id="collapseCategory">
        {categories.map((item) => (
          <li
            className="list-group-item"
            onClick={() => {
              handleSelectItem(item);
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default CategoryDropdown;
