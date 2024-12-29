import { Link } from "react-router-dom"
import { useCart } from "../../context"

export const CartCard = ({ product }) => {
  const { removeFromCart } = useCart();

  return (
    <div className="flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 ">
      <div className="flex">
        <Link to={`/products/${product.id}`}>
          <img className="w-32 h-[6rem] rounded object-cover" src={product.image || '/Assets/loadingImage.jpg'} onError={(e) => {
            e.target.src = '/Assets/loadingImage.jpg';
          }} alt={product.brand} />
        </Link>
        <div className="">
          <Link to={`/products/${product.id}`}>
            <p className="text-lg ml-2">{product.name}</p>
          </Link>

          <button onClick={() => removeFromCart(product)} className="text-base ml-2 my-5 text-red-400">Remove From Cart</button>
        </div>
      </div>
      <div className="text-lg m-2">
        <span className="text-green-500 font-bold">ZAR {product.price}</span>
      </div>
    </div>
  )
}
