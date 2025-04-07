import { useEffect, useState } from "react";
import { Brand } from "../../types/brand";
import { CategoryFilter } from "../../types/category";
import { BASE_URL } from "../../common/url_sets";

interface Props {
  filters: CategoryFilter[];
  isLoading: boolean;
  handleSortPrice: (sortPrice: string) => void;
}

function ProductFilter({ filters, isLoading, handleSortPrice }: Props) {
  return (
    <>
      <div className={isLoading === false ? "row mb-3" : "row invisible"}>
        <div className="col-10">
          <form>
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
            </div>
          </form>
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
              <li key="increase-price" onClick={() => handleSortPrice("asc")}>
                <a className="dropdown-item" href="#">
                  Giá tăng dần
                </a>
              </li>
              <li key="decrease-price" onClick={() => handleSortPrice("desc")}>
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
