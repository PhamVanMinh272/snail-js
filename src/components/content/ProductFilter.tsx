import { useEffect, useState } from "react";
import { Brand } from "../../types/brand";
import { CategoryFilter } from "../../types/category";
import { BASE_URL } from "../../common/url_sets";
import { ProductQueryParams } from '../../types/product';


interface Props {
  filters: CategoryFilter[];
  isLoading: boolean;
  handleSortPrice: (sortPrice: string) => void;
  handleFilterChange: (updatedParams: ProductQueryParams) => void;

}

function ProductFilter({ filters, isLoading, handleSortPrice, handleFilterChange }: Props) {
  // const updateMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   handleFilterChange({ minPrice: parseFloat(e.target.value) });
  // };

  // const updateSortPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   handleFilterChange({ sortPrice: e.target.value });
  // };
  const [localFilters, setLocalFilters] = useState<ProductQueryParams>({
    brandIds: [],
  });

  // const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setLocalFilters({
  //     ...localFilters,
  //     minPrice: parseFloat(e.target.value) || undefined,
  //   });
  // };

  // const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setLocalFilters({
  //     ...localFilters,
  //     categoryId: e.target.value || undefined,
  //   });
  // };
  const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    const brandId = parseInt(e.target.value, 10);
    setLocalFilters({
      ...localFilters,
      brandIds: [parseInt(e.target.value, 10)],
    });
  }

  const applyFilters = () => {
    handleFilterChange(localFilters);
  };



  return (
    <>
      <div className={isLoading === false ? "row mb-3" : "row invisible"}>
        <div className="col-10">
          <div className="row">
            {filters.map((item) => (
              <div className="col-2 p-0 pe-1" key={item.id}>
                <select
                  className="form-select product-filter-select"
                  aria-label={item.name}
                >
                  <option key={item.name}>{item.name}</option>
                  {item.values.map((value) => (
                    <option key={value.id} value={value.id}>
                      {value.name}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            <div className="col-2 p-0 pe-1">
              <button
                className="btn my-btn"
                type="button"
                onClick={() => {applyFilters}}
              >
                Tìm
              </button>
            </div>
          </div>
        </div>

        <div className="col-2 p-1">
          <div className="dropdown">
            <span>Sắp xếp: </span>
            <i
              className="bi bi-filter-left"
              id="dropdownSortBtn"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></i>
            <ul
              className="dropdown-menu my-dropdown-ul"
              aria-labelledby="dropdownSortBtn"
            >
              <li key="increase-price" onClick={() => handleFilterChange({sortPrice: "asc"})}>
                <a className="dropdown-item" href="#">
                  Giá tăng dần
                </a>
              </li>
              <li key="decrease-price" onClick={() => handleFilterChange({sortPrice: "desc"})}>
                <a className="dropdown-item" href="#">
                  Giá giảm dần
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductFilter;
// import React, { useState } from 'react';
// import { ProductQueryParams } from '../types/productTypes';

// interface ProductFilterProps {
//   setQueryParams: (updatedParams: ProductQueryParams) => void;
// }

// const ProductFilter: React.FC<ProductFilterProps> = ({ setQueryParams }) => {
//   const [localFilters, setLocalFilters] = useState<ProductQueryParams>({
//     minPrice: undefined,
//     categoryId: undefined,
//   });

//   const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setLocalFilters({
//       ...localFilters,
//       minPrice: parseFloat(e.target.value) || undefined,
//     });
//   };

//   const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setLocalFilters({
//       ...localFilters,
//       categoryId: e.target.value || undefined,
//     });
//   };

//   const applyFilters = () => {
//     setQueryParams(localFilters);
//   };

//   return (
//     <div>
//       <div>
//         <label>
//           Min Price:
//           <input
//             type="number"
//             value={localFilters.minPrice || ''}
//             onChange={handleMinPriceChange}
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Category:
//           <input
//             type="text"
//             value={localFilters.categoryId || ''}
//             onChange={handleCategoryChange}
//           />
//         </label>
//       </div>
//       <button onClick={applyFilters}>Apply Filters</button>
//     </div>
//   );
// };

// export default ProductFilter;