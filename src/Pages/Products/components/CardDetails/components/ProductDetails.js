import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CardDetails } from '../CardDetails';

export function ProductDetails() {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const url = `${process.env.REACT_APP_API_URL}/products/${id}`;

    useEffect(() => {
        async function fetchProductId() {
            const responce = await fetch(url);
            const data = await responce.json();
            setProduct(data);
        }
        fetchProductId()
    }, [url])

    return (
        <div>
            <CardDetails product={product}/>
        </div>
    )
}
