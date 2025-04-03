import { BASE_URL } from "../common/url_sets";

export const fetchCategories = async () => {
  const response = await fetch(`${BASE_URL}/categories`);
  const response_data = await response.json();
  return response_data.data;
};
