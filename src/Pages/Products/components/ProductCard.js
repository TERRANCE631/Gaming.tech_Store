import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context";

export function ProductCard({ product }) {
    const [inCart, setInCart] = useState(false);
    const { cartList, addToCart, removeFromCart } = useCart();

    useEffect(() => {
        const productInCart = cartList.find(item => item.id === product.id);

        if (productInCart) {
            setInCart(true);
        } else {
            setInCart(false);
        }
    }, [cartList, product.id]);

    return (
        <div>
            <div className="bg-white shadow-md overflow-hidden flex flex-col w-full h-full">
                <Link to={`/products/${product.id}`} className="reletive">
                    {product.best_seller && <p className="text-lg px-2 bg-orange-500 bg-opacity-90 text-white rounded-t">Best Seller</p>}
                    <img src={product.image || '/Assets/loadingImage.jpg'} onError={(e) => {
                        e.target.src = '/Assets/loadingImage.jpg';
                    }} alt={product.brand} className="w-full h-48 object-cover" />
                </Link>

                <div className="p-4 flex-grow">

                    <Link to={`/products/${product.id}`}><h3 className="text-lg font-semibold mb-2">{product.name}</h3></Link>
                    <h3 className="text-lg text-green-500 font-semibold mb-2">R {product.price}</h3>

                    <p className="text-gray-600">{product.brand}</p>

                    <p className="flex gap-1 items-center ml-1">
                        {product.rating}<div className="text-yellow-500 text-xl">★</div>
                    </p>
                    <p className="text-lg font-bold text-red-500">{product.in_stork ? "" : "Out of Stork"}</p>

                </div>

                <div className="p-4">

                    {!inCart && <button onClick={() => addToCart(product)} className={` ${product.in_stork ? "" : "cursor-not-allowed"} w-full border border-slate-900 py-2 px-4 rounded hover:bg-purple-900 hover:text-white mt-4`} disabled={product.in_stork ? "" : "disabled"} >Add To Cart</button>}
                    {inCart && <button onClick={() => removeFromCart(product)} className={`w-full border border-slate-900 py-2 px-4 rounded bg-red-700 text-white mt-4`}>Remove</button>}

                </div>
            </div>
        </div>
    )
}
