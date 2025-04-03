import { useEffect, useState } from "react";
import { Brand } from "../class_objects/brand";
import { BASE_URL } from "../common/url_sets";

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
              <option>Thương Hiệu</option>
              {brands.map((item) => (
                <option value={item.id}>{item.name}</option>
              ))}
            </select>
          </div>
          <div className="col-2 p-1">
            <select
              className="form-select product-filter-select"
              aria-label="Price"
              defaultValue=""
            >
              <option>Giá</option>
              <option>Dưới 500.000</option>
              <option>Từ 500.000 đến 1.000.000</option>
              <option>Từ 1.000.000 đến 1.500.000</option>
              <option>Trên 1.500.000</option>
            </select>
          </div>
          <div className="col-2 p-1">
            <select
              className="form-select product-filter-select"
              aria-label="Color"
              defaultValue=""
            >
              <option>Màu Sắc</option>
              <option>XanhXanh</option>
              <option>Đỏ</option>
              <option>Tím</option>
              <option>Vàng</option>
              <option>Hồng</option>
              <option>Nâu</option>
              <option>Đen</option>
              <option>Trắng</option>
              <option>Khác</option>
            </select>
          </div>
          <div className="col-2 p-1">
            <select
              className="form-select product-filter-select"
              aria-label="Size"
              defaultValue="Size"
            >
              <option>Size</option>
              <option>35</option>
              <option>36</option>
              <option>37</option>
              <option>38</option>
              <option>39</option>
              <option>40</option>
              <option>41</option>
              <option>42</option>
              <option>43</option>
              <option>44</option>
              <option>45</option>
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
              <ul className="dropdown-menu my-dropdown-ul" aria-labelledby="dropdownSortBtn">
                <li>
                  <a className="dropdown-item" href="#">
                    Giá tăng dần
                  </a>
                </li>
                <li>
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
