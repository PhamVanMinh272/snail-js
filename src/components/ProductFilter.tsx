import { useEffect, useState } from "react";
import { Brand } from "../class_objects/brand";
import { BASE_URL } from "../url_sets";

function ProductFilter() {
	const [brands, setBrands] = useState<Brand[]>([]);

	useEffect(() => {
		const fetchBrands = async () => {
			let response;
      response = await fetch(`${BASE_URL}/products/brands`);
      const responseData = await response.json();
      const fetchedData = responseData.data as Brand[];
      setBrands(fetchedData);
		}
		fetchBrands();
	}, [])

  return (
    <>
      <form>
        <div className="row">
          <div className="col">
					<select className="form-select" aria-label="Brand">
						<option selected>Thương Hiệu</option>
						{
							brands.map((item) => (
								<option value={item.id}>
									{item.name}
								</option>
							))
						}
					</select>
          </div>
          <div className="col">
						<select className="form-select" aria-label="Price">
							<option selected>Giá</option>
							<option>Dưới 500.000</option>
							<option>Từ 500.000 đến 1.000.000</option>
							<option>Từ 1.000.000 đến 1.500.000</option>
							<option>Trên 1.500.000</option>
						</select>
          </div>
          <div className="col">
					<select className="form-select" aria-label="Color">
							<option selected>Màu Sắc</option>
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
          <div className="col">
					<select className="form-select" aria-label="Size">
							<option selected>Size</option>
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
        </div>
      </form>
			<div></div>
    </>
  );
}

export default ProductFilter;
