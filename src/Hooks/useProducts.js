// hooks/useProducts.js
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function useProducts() {
  const [products, setProducts] = useState([]);

  const search = useLocation().search;
  const searchTerm = new URLSearchParams(search).get("q");
  const url = `${process.env.REACT_APP_API_URL}/products?name_like=${searchTerm || ""}`;

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, [url, searchTerm]);

  return { products, searchTerm };
}
