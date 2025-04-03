import { BASE_URL } from "../common/url_sets";

export const fetchBrands= async () => {
  const response = await fetch(`${BASE_URL}/products/brands`);
  const response_data = await response.json();
  return response_data.data;
};