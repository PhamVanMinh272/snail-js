import ListProduct from "./ListProduct";
import Category from "../../types/category";
import ProductFilter from "./ProductFilter";
import ProductFilterDropdown from "./ProductFilterDropdown";
import { useBrands } from "../../hooks/useBrands";
import { useProducts } from "../../hooks/useProducts";
import { useCategoryFilters } from "../../hooks/useCategoryFilters";

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
  // call api
  const { products } = useProducts({
    categoryId: category?.id,
    setIsLoadingProduct,
  });

  const { categoryFilters } = useCategoryFilters({
    categoryId: category?.id,
  });

  const { brands, setBrands } = useBrands();

  return (
    <>
      <div className="container my-road-navigator-container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-2">
            <span>{products.length} Sản Phẩm</span>
          </div>
          <div className="col col-12 col-sm-12 col-md-10">
            <a href="/">
              <span>{"Tất cả > "}</span>
            </a>
            <a>
              <span>{category ? category.name : ""}</span>
            </a>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 d-none d-md-block">
            <ProductFilter
              brands={brands}
              filters={categoryFilters}
              isLoading={isLoadingProduct}
            ></ProductFilter>
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-6 d-md-none">
            <ProductFilterDropdown
              brands={brands}
              filters={categoryFilters}
            ></ProductFilterDropdown>
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
        <div className=" row my-product-list-container">
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
