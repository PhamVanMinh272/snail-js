import { useEffect, useState } from "react";
import { BASE_URL } from "../common/url_sets";
import Category from "../class_objects/category";


interface Props {
  handleSelectItem: (item: Category) => void;
}

function CategoryDropdown({handleSelectItem}: Props) {
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
      <div className="dropdown mb-3">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownCategoriesBtn" data-bs-toggle="dropdown" aria-expanded="false">
          Loại sản phẩm
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownCategoriesBtn">
          {
            categories.map((item) => (
              <li className="dropdown-item category-dropdown-item"
                onClick={() => {
                handleSelectItem(item);
              }}>
                <a>{item.name}</a>
              </li>
            )
          )
        }
        </ul>
      </div>
    </>
  )
}

export default CategoryDropdown;
