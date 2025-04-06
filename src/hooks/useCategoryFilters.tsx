import { useState, useEffect } from "react";
import { fetchCategoryFilters } from "../services/category";
import { CategoryFilter } from "../types/category";

interface Props {
  categoryId?: number;
}

export const useCategoryFilters = ({ categoryId }: Props) => {
  const [categoryFilters, setCategoryFilters] = useState<CategoryFilter[]>([]);
  console.log("UseCategoryFilters", categoryId);

  useEffect(() => {
    const fetchData = async () => {
    console.log("fetchCategoryFilters", categoryId);
      const fetchedData = await fetchCategoryFilters(categoryId || 1);
      setCategoryFilters(fetchedData);
    //   setIsLoadingProduct(false);
    };
    fetchData();
  }, [categoryId]);

  return { categoryFilters };
};
