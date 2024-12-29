import { ProductCard } from './components/ProductCard';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Filter } from './components/FilterCategory/Filter';

export function Products() {
  const [products, setProducts] = useState([]);
  const [Loading, setLoading] = useState(false);

  const search = useLocation().search;
  const searchTerm = new URLSearchParams(search).get("q");

  const url = `${process.env.REACT_APP_API_URL}/products?name_like=${searchTerm ? searchTerm : ""}`;

  useEffect(() => {
    setLoading(true)
    async function fetchProducts() {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
      setLoading(false)
    }
    fetchProducts()
  }, [url, searchTerm]);

  return (
    <section>
      <h1 className="text-2xl font_style">All Items ( {products.length} )</h1>
      <Filter />
      {Loading && <p className="text-2xl text-center mt-[10%]">Loading items...</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </section>
  );
}
