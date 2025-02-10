import { useEffect, useState } from "react";
import '../css/list_category.css'
import BASE_URL from "../url_sets";

interface Category {
  id: number,
  name: string,
  parent: number
}

function ListCategory() {
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
      <ul className="list-group">
        {
          // categories.map((item) => ())
          categories.map((item) => (
            <li className="list-group-item">
              {item.name}
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default ListCategory;
