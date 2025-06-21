import { BASE_URL } from "../common/url_sets";
import { ProductQueryParams } from "../types/product";

export const fetchProducts = async (productQueryParams: ProductQueryParams) => {
  // let url = `${BASE_URL}/products`;
  const queryString = new URLSearchParams();

  if (productQueryParams.brandIds)
    for (const brandId of productQueryParams.brandIds) {
      queryString.append("brandId", brandId.toString());
    }
  if (productQueryParams.minPrice)
    queryString.append("minPrice", productQueryParams.minPrice.toString());
  if (productQueryParams.maxPrice)
    queryString.append("maxPrice", productQueryParams.maxPrice.toString());
  if (productQueryParams.sortPrice)
    queryString.append("sortPrice", productQueryParams.sortPrice);
  if (productQueryParams.categoryId)
    queryString.append("categoryId", productQueryParams.categoryId.toString());

  const response = await fetch(
    `${BASE_URL}/products?${queryString.toString()}`
  );
  const response_data = await response.json();
  return response_data.data;
};
