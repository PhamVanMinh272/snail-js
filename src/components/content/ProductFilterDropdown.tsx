
import { Brand } from "../../types/brand";

interface Props {
  brands: Brand[];
}

function ProductFilterDropdown({ brands }: Props) {
  return (
    <>
      <div className="dropdown mb-3">
        <span>Bộ lọc: </span>
        <i
          className="bi bi-funnel dropdown-toggle"
          id="dropdownCategoriesBtn"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></i>
        <ul className="dropdown-menu" aria-labelledby="dropdownCategoriesBtn">
          <li className="dropdown-item category-dropdown-item">
            <form>
              <div className="row row-cols-1 g-1">
                <div className="col">
                  <select
                    className="form-select product-filter-select"
                    aria-label="Brand"
                  >
                    <option key='brand'>Thương Hiệu</option>
                    {brands.map((item) => (
                      <option key={item.name} value={item.id}>{item.name}</option>
                    ))}
                  </select>
                </div>
                <div className="col">
                  <select
                    className="form-select product-filter-select"
                    aria-label="Price"
                  >
                    <option key='price'>Giá</option>
                    {/* <option>Dưới 500.000</option>
                    <option>Từ 500.000 đến 1.000.000</option>
                    <option>Từ 1.000.000 đến 1.500.000</option>
                    <option>Trên 1.500.000</option> */}
                  </select>
                </div>
                <div className="col">
                  <select
                    className="form-select product-filter-select"
                    aria-label="Color"
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
                <div className="col">
                  <select
                    className="form-select product-filter-select"
                    aria-label="Size"
                  >
                    <option key='size'>Size</option>
                    {/* <option>35</option>
                    <option>36</option>
                    <option>37</option>
                    <option>38</option>
                    <option>39</option>
                    <option>40</option>
                    <option>41</option>
                    <option>42</option>
                    <option>43</option>
                    <option>44</option>
                    <option>45</option> */}
                  </select>
                </div>
              </div>
            </form>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ProductFilterDropdown;
