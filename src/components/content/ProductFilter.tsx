import { useEffect, useState } from "react";
import { Brand } from "../../types/brand";
import { BASE_URL } from "../../common/url_sets";

interface Props {
  brands: Brand[];
}

function ProductFilter({ brands }: Props) {
  return (
    <>
      <form>
        <div className="row justify-content-around mb-3">
          <div className="col-2 p-1">
            <select
              className="form-select product-filter-select"
              aria-label="Brand"
              defaultValue=""
            >
              <option key='brand'>Thương Hiệu</option>
              {brands.map((item) => (
                <option key={item.name} value={item.id}>{item.name}</option>
              ))}
            </select>
          </div>
          <div className="col-2 p-1">
            <select
              className="form-select product-filter-select"
              aria-label="Price"
              defaultValue=""
            >
              <option key='price'>Giá</option>
              {/* <option>Dưới 500.000</option>
              <option>Từ 500.000 đến 1.000.000</option>
              <option>Từ 1.000.000 đến 1.500.000</option>
              <option>Trên 1.500.000</option> */}
            </select>
          </div>
          <div className="col-2 p-1">
            <select
              className="form-select product-filter-select"
              aria-label="Color"
              defaultValue=""
            >
              <option key='color'>Màu Sắc</option>
              {/* <option>XanhXanh</option>
              <option>Đỏ</option>
              <option>Tím</option>
              <option>Vàng</option>
              <option>Hồng</option>
              <option>Nâu</option>
              <option>Đen</option>
              <option>Trắng</option>
              <option>Khác</option> */}
            </select>
          </div>
          <div className="col-2 p-1">
            <select
              className="form-select product-filter-select"
              aria-label="Size"
              defaultValue="Size"
            >
              <option>Size</option>
              <option key='35'>35</option>
              <option key='36'>36</option>
              <option key='37'>37</option>
              <option key='38'>38</option>
              <option key='39'>39</option>
              <option key='40'>40</option>
              <option key='41'>41</option>
              <option key='42'>42</option>
              <option key='43'>43</option>
              <option key='44'>44</option>
              <option key='45'>45</option>
            </select>
          </div>
          <div className="col-2 p-1"></div>
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
                <li key="increase-price">
                  <a className="dropdown-item" href="#">
                    Giá tăng dần
                  </a>
                </li>
                <li key="decrease-price">
                  <a className="dropdown-item" href="#">
                    Giá giảm dần
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </form>
      <div></div>
    </>
  );
}

export default ProductFilter;
