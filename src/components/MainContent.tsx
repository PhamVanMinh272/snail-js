import { useEffect, useState } from "react";
import Product from "../class_objects/product";
import ListProduct from "./ListProduct";
import { BASE_URL } from "../common/url_sets";
import Category from "../class_objects/category";
import ProductFilter from "./ProductFilter";
import ProductFilterDropdown from "./ProductFilterDropdown";
import { Brand } from "../class_objects/brand";

interface Props {
  category?: Category;
  isLoadingProduct: boolean;
  setIsLoadingProduct: (isLoading: boolean) => void;
}

function MainContent({
  category,
  isLoadingProduct,
  setIsLoadingProduct,
}: Props) {
  const [products, setProducts] = useState<Product[]>([]);

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
      setIsLoadingProduct(false);
    };

    fetchProducts();
  }, [category]);

  const [brands, setBrands] = useState<Brand[]>([]);
  
  useEffect(() => {
    const fetchBrands = async () => {
      let response;
      response = await fetch(`${BASE_URL}/products/brands`);
      const responseData = await response.json();
      const fetchedData = responseData.data as Brand[];
      setBrands(fetchedData);
    };
    fetchBrands();
  }, []);
  
  return (
    <>
      <p>{category ? category.name : "Tất cả"}</p>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 d-none d-md-block">
            <ProductFilter brands={brands}></ProductFilter>
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-6 d-md-none">
            <ProductFilterDropdown brands={brands}></ProductFilterDropdown>
          </div>
          <div className="col-6 d-md-none">
            <span>Sắp xếp: </span>
            <i
              className="bi bi-filter-left"
              id="dropdownCategoriesBtn"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></i>
          </div>
        </div>
        <div>
          <ListProduct
            isLoading={isLoadingProduct}
            products={products}
            onSelectItem={() => {}}
          />
        </div>
      </div>
    </>
  );
}

export default MainContent;
