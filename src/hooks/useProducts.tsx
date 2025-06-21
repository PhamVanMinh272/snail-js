import { useState, useEffect } from "react";
import { fetchProducts } from "../services/product";
import {Product, ProductQueryParams} from "../types/product";

interface Props {
  setIsLoadingProduct: (isLoading: boolean) => void;
  categoryId?: number
  brandIds?: number[];
  minPrice?: number;
  maxPrice?: number;
  sortPrice: string;
}

// export const useProducts = ({
//   setIsLoadingProduct,
//   categoryId,
//   brandIds,
//   minPrice,
//   maxPrice,
//   sortPrice,
// }: Props) => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const productQueryParams: ProductQueryParams = {
//     brandIds: brandIds,
//     minPrice: minPrice,
//     maxPrice: maxPrice,
//     categoryId: categoryId,
//     sortPrice: sortPrice,
//   };
//   console.log("productQueryParams", productQueryParams);

//   useEffect(() => {
//     const fetchData = async () => {
//       const fetchedData = await fetchProducts(productQueryParams);
//       setProducts(fetchedData);
//       setIsLoadingProduct(false);
//     };
//     fetchData();
//   }, [productQueryParams]);

//   return { products };
// };

// import { Product, ProductQueryParams } from '../types/productTypes';

export const useProducts = (params: ProductQueryParams) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchProducts(params);
        setProducts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params]);

  return { products, loading, error };
};