import { BASE_URL } from "../common/url_sets";

export const fetchProducts = async (
  categoryId?: number,
  sortPrice?: string
) => {
  let response;
  let url = `${BASE_URL}/products`;

  if (categoryId) {
    url += `?categoryId=${categoryId}`;
  }

  if (sortPrice) {
    url += categoryId ? `&sortPrice=${sortPrice}` : `?sortPrice=${sortPrice}`;
  }

  response = await fetch(url);

  const response_data = await response.json();
  return response_data.data;
};
