import { useEffect, useState } from "react";
import Product from "../class_objects/product";
import ListProduct from "./ListProduct";
import { BASE_URL } from "../url_sets";
import Category from "../class_objects/category";

interface Props {
  category?: Category;
}

function MainContent({ category }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleComponent, setvisableComponent] = useState(false);

  // call api
  useEffect(() => {
    console.log(category);
    const fetchProducts = async () => {
      let response;
      if (category) {
        response = await fetch(
          `${BASE_URL}/products?categoryId=${category.id}`
        );
      } else {
        response = await fetch(`${BASE_URL}/products`);
      }

      const response_data = await response.json();
      const fetched_products = response_data.data as Product[];
      setProducts(fetched_products);
      setvisableComponent(true);
    };

    fetchProducts();
  }, [category]);
  return (
    <>
      <ListProduct
        visible={visibleComponent}
        products={products}
        heading={category ? category.name : "Tất cả"}
        onSelectItem={() => {}}
      />
    </>
  );
}

export default MainContent;
