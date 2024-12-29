import { useEffect, useState } from "react";

export function useFecthCategory(apiPath) {
        const [Loading, setLoading] = useState(false);

        const [ categories, setCategories ] = useState([]);
        const url = `${process.env.REACT_APP_API_URL}${apiPath}`;
    
        useEffect(() => {
            setLoading(true)
            async function fetchProducts() {
                const response = await fetch(url);
                const data = await response.json();
                setCategories(data);
                setLoading(false);
            }
            fetchProducts()
        }, [url]);
    
  return { categories, Loading }
}
