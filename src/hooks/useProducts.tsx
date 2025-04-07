import { useState, useEffect } from "react";
import { fetchProducts } from "../services/product";
import Product from "../types/product";

interface Props {
  categoryId?: number;
  setIsLoadingProduct: (isLoading: boolean) => void;
  sortPrice: string;
}

export const useProducts = ({
  categoryId,
  setIsLoadingProduct,
  sortPrice,
}: Props) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchProducts(categoryId, sortPrice);
      setProducts(fetchedData);
      setIsLoadingProduct(false);
    };
    fetchData();
  }, [categoryId, sortPrice]);

  return { products };
};
