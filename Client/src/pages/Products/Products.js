import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card';

export function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    async function getProducts() {
        try {
            setLoading(true)
            const res = await fetch(`${process.env.REACT_APP_API_URL}/products`);
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            const data = await res.json();
            setLoading(false);
            setProducts(data);
        } catch (error) {
            setLoading(false);
            alert(error);
        }
    }

    useEffect(() => {
        getProducts()
    }, []);

    return (
        <section>
            <div className="flex flex-wrap justify-center gap-5 items-center">
                {products.map((product, i) => (
                    <Card product={product} key={i} />
                ))}
            </div>
        </section>
    )
}
