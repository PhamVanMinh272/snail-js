import { useEffect, useState } from "react";
import { BASE_URL } from "../common/url_sets";
import Category from "../class_objects/category";

interface Props {
  handleSelectItem: (item: Category) => void;
}

function CategoryDropdown({ handleSelectItem }: Props) {
  const [categories, setCategories] = useState<Category[]>([]);

  // call api
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(`${BASE_URL}/categories`);
      const response_data = await response.json();
      const fetched_data = response_data.data as Category[];
      console.log(fetched_data);
      setCategories(fetched_data);
    };

    fetchCategories();
  }, []);

  return (
    <>
      <div className="dropdown">
        <div
          className="d-flex flex-column"
          id="dropdownCategoriesBtn"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div className="m-auto">
            <i className="bi bi-list-ul"></i>
          </div>
          <div className="m-auto">
            <p className="m-0">Danh Mục</p>
          </div>
        </div>

        <ul className="dropdown-menu" aria-labelledby="dropdownCategoriesBtn">
          {categories.map((item) => (
            <li
              className="dropdown-item category-dropdown-item"
              onClick={() => {
                handleSelectItem(item);
              }}
            >
              <a>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default CategoryDropdown;
