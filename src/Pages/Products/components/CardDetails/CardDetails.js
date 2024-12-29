import { Link } from "react-router-dom"
import pencil from "../../../../Assets/Icons/pencil.png";

import { MightAlsoLike } from "../CardDetails/components/MightAlsoLike";
import { ProductTable } from "./components/ProductTable";
import { useEffect, useState } from "react";
import { EmptyPopup } from "../../../Reviews/PopUp";

import card from "../../../../Assets/Icons/card.png";
import paypal from "../../../../Assets/Icons/paypal.png";
import visa from "../../../../Assets/Icons/visa.png";

import { useCart } from "../../context";

export function CardDetails({ product }) {
  const [HidePopUp, setHidePopUp] = useState(false);
  const { cartList, removeFromCart, addToCart } = useCart();

  const [inCart, setInCart] = useState(false);

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
      <p className="-mb-10">
        <span className="text-gray-700">{product.name} </span>
        | <span className="text-gray-700"> {product.category} </span>
        | <span className="text-green-700"> #{product.id} </span>
      </p>

      <section className="grid grid-cols-1 md:grid-cols-[4fr_1fr] mt-12">

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="shadow-md reletive">
            {product.best_seller && <p className="px-2 bg-orange-500 bg-opacity-90 text-white text-lg rounded-t">Best Seller</p>}
            <img className="w-[30rem] h-[25rem] object-cover" src={product.image || '/Assets/loadingImage.jpg'}
              onError={(e) => {
                e.target.src = '/Assets/loadingImage.jpg';
              }} alt={product.name} />
          </div>

          <div className=" shadow-md p-2">

            <div className="border-b-2 mb-5 pb-2">
              <p className="text-gray-700">{product.brand}</p>
              <p className="text-3xl">{product.description}</p>
              <p className="text-gray-500 py-2 text-2xl font-bold">{product.name}</p>
            </div>

            <div className="mb-5 pb-2">
              <p className="text-lg text-red-600"><span className="text-gray-500 font-bold">Availability: </span>{product.in_stork ? "In Stork" : "Out of Stork"}</p>
              <p className="text-red-600 py-1 md:mr-[25.6rem] font-bold">{product.sale && "On Sale"}</p>
              <p className="text-green-500 text-2xl font-bold">ZAR {product.price}</p>
            </div>

            <div className="my-4">
              <p className="py-2">item <span className="text-gray-500">#{product.id}</span></p>

              <p className="flex gap-1 items-center ml-1">
                {product.rating}<div className="text-yellow-500 text-xl">★</div>
              </p>

              <Link to="">
                <p onClick={() => setHidePopUp(!HidePopUp)} className="flex items-center underline text-gray-600">
                  <img className="w-[1.1rem] h-[1.1rem] mr-2" src={pencil} alt="pencel" />Write a review
                </p>
              </Link>
            </div>

          </div>

        </div>
        <aside className="grid grid-cols-1 md:block bg-gray-100 p-2 shadow-md">
          <h2 className="text-2xl font-bold mb-4 hidden md:block">ZAR {product.price}</h2>
          <p className="text-purple-900 text-lg">Oder now and get it around Friday, December 20</p>

          <p className="text-gray-500 py-2"><span className="text-green-500 font-semibold">99%</span> of respondents would recommend this to a friend</p>

          <div className="">
            <p className="text-center -mb-5 mt-10 underline text-purple-700">Payment Methods</p>
            <div className="flex justify-center gap-2 p-4 items-center">
              <img className="w-12" src={card} alt="" />
              <img className="w-12" src={paypal} alt="" />
              <img className="w-12" src={visa} alt="" />
            </div>
          </div>

          <div className="md:mt-[] flex justify-center items-center">
            {!inCart && <button onClick={() => addToCart(product)} type="button" className={`bg-purple-900 py-3 cursor-pointer text-white px-[4.5rem] ${product.in_stork ? "" : "cursor-not-allowed"} `} disabled={product.in_stork ? "" : "disabled"} >Add To Cart</button>}
            {inCart && <button onClick={() => removeFromCart(product)} type="button" className={`bg-red-900 py-3 cursor-pointer text-white px-[4.2rem]`}>Remove Item</button>}
          </div>
        </aside>

      </section>
      < ProductTable product={product} />
      {HidePopUp && <EmptyPopup setHidePopUp={setHidePopUp} />}
      < MightAlsoLike />
    </div>
  )
}
