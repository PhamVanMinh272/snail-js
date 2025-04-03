import { useState, useEffect } from "react";
import { fetchProducts } from "../services/product";
import Product from "../types/product";

interface Props {
  categoryId?: number;
  setIsLoadingProduct: (isLoading: boolean) => void;
}

export const useProducts = ({ categoryId, setIsLoadingProduct}: Props) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchProducts(categoryId);
      setProducts(fetchedData);
      setIsLoadingProduct(false);
    };
    fetchData();
  }, [categoryId]);

  return { products };
};
