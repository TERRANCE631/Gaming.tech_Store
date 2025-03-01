import React from 'react'

export function skeleton() {
    return (
        <section>
            <section className="flex flex-col border-4 md:w-[10.5rem] w-[9.5rem] shadow-md shadow-black truncate rounded-lg hover:-translate-y-0.5 duration-500">
                <div className="relative">
                    <div
                        className={`${sale && "absolute z-10 bg-yellow-700 bg-opacity-[86%] py-2 px-1 m-1 flex items-center rounded-lg uppercase border text-sm"}`}
                    >
                        {sale && <span className="text-white font-bold">{sale_perc}%</span>}
                    </div>
                    <img src="/product/Games/Call-Of-Duty-Modern-Warfare-III-1.jpg" alt="" className="-z-10 rounded-t-lg w-full h-full scale-100 object-cover object-center" />
                </div>
                <section className="px-1 mb-1">
                    <div className="flex items-center justify-between">
                        <p className="text-green-700 font-sans font-semibold text-lg">R 1000</p>
                        <p className="line-through text-rose-500 md:text-base text-sm">R 1200</p>
                        <p className="text-md">4.5<span className="text-yellow-500 text-lg">★</span></p>
                    </div>
                    <p className="truncate text-gray-600 font-light">Call Of Duty Modern Warfare III</p>
                </section>
                <button aria-label="add to cart" className="bg-blue-700 w-full rounded-lg text-white border p-1">Add to cart</button>
            </section>
        </section>
    )
}
