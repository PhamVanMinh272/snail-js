import { BASE_URL } from "../common/url_sets";

export const fetchProducts= async (categoryId?: number) => {
    let response;
    if (categoryId) {
      response = await fetch(
        `${BASE_URL}/products?categoryId=${categoryId}`
      );
    } else {
      response = await fetch(`${BASE_URL}/products`);
    }
  
  const response_data = await response.json();
  return response_data.data;
};
