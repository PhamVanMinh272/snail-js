
import { useState, useEffect } from "react";
import { fetchBrands } from "../services/brand";
import { Brand } from "../types/brand";

export const useBrands = () => {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchBrands();
      setBrands(fetchedData);
    };
    fetchData();
  }, []);

  return { brands, setBrands };
};
