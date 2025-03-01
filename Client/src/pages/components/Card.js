import React from 'react'

export function Card({ product }) {
    const {
        name,
        brand,
        category,
        price,
        sale,
        sale_perc,
        description,
        imageFileName } = product;

    const salePrice = price * sale_perc / 100;

    return (
        <section>
            <section
                className="flex flex-col border-4 md:w-[10.5rem] w-[9.5rem] hover:border-blue-200 shadow-md shadow-black hover:shadow-lg hover:shadow-blue-700 truncate rounded-lg hover:-translate-y-0.5 duration-500"
            >
                <div className="relative">
                    <div
                        className={`${sale && "absolute z-10 bg-yellow-700 bg-opacity-[86%] py-2 px-1 m-1 flex items-center rounded-lg uppercase border text-sm"}`}
                    >
                        {sale && <span className="text-white font-bold">{sale_perc}%</span>}
                    </div>
                    <img src={`http://localhost:9000/uploads/${imageFileName}`} alt="" className="-z-10 rounded-t-lg w-full h-full scale-100 object-cover object-center" />
                </div>
                <section className="px-1 mb-1">
                    <div className="flex items-center justify-between">
                        {sale ?
                            <p className="text-green-700 font-sans font-semibold text-lg">
                                R {price - salePrice}
                            </p>
                            :
                            <p className="text-green-700 font-sans font-semibold text-lg">
                                R {price}
                            </p>
                        }
                        {sale &&
                            <p className="line-through text-rose-500 md:text-base text-sm">
                                R {price}
                            </p>
                        }
                        <p className="text-md">4.5<span className="text-yellow-500 text-lg">★</span></p>
                    </div>
                    <p className="truncate text-gray-600 font-light">{name}</p>
                </section>
                <button aria-label="add to cart" className="bg-blue-700 w-full rounded-lg text-white border p-1">Add to cart</button>
            </section>
        </section>
    )
}
