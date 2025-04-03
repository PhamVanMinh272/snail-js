import { useState, useEffect } from "react";
import { fetchCategories } from "../services/category";
import Category from "../class_objects/category";

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoadingProduct, setIsLoadingProduct] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchCategories();
      setCategories(fetchedData);
      setIsLoadingProduct(false);
    };
    fetchData();
  }, []);

  return { categories, isLoadingProduct, setIsLoadingProduct };
};
