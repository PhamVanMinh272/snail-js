import { useEffect, useState } from "react";
// import '../css/list_category.css'
import { BASE_URL } from "../url_sets";
import Category from "../class_objects/category";


interface Props {
  handleSelectItem: (item: Category) => void;
}

function ListCategory({handleSelectItem}: Props) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

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
      <ul className="list-group">
        {
          // categories.map((item) => ())
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
