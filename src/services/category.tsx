import { BASE_URL } from "../common/url_sets";

export const fetchCategories = async () => {
  const response = await fetch(`${BASE_URL}/categories`);
  const response_data = await response.json();
  return response_data.data;
};


export const fetchCategoryFilters = async (categoryId: number) => {
  const response = await fetch(`${BASE_URL}/categories/${categoryId}/filters`);
  const response_data = await response.json();
  return response_data.data;
};
