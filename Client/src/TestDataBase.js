import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function TestDataBase() {
    const [calc, setCalc] = useState("")
    const [price, setPrice] = useState("");
    const [salePerc, setSalePerc] = useState("");
    const [sale, setSale] = useState(false);

    Number(calc)
    Number(price)
    Number(salePerc)

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target)
        const product = Object.fromEntries(formData.entries());

        if (!product.name || !product.brand || !product.category || !product.price || !product.description
            || !product.image.name) {

            alert("Please fill all the fields")
            return
        }

        try {
            const res = await fetch("http://localhost:9000/products", {
                method: "POST",
                body: formData
            })

            const data = await res.json()
            if(data){
                setTimeout(() => toast.success("Product created successfully"), 1000)
            }

        } catch (e) {
            console.log(e)
        }
    }

    function calcF() {
        const saleMath = price * salePerc / 100
        setCalc(price - saleMath)
    }

    return (
        <div className="w-full">
            <section className="md:w-[50%] m-auto flex flex-col justify-center">
                <div className="">
                    <h2 className="text-center text-gray-700 font-bold text-2xl">Create Page</h2>
                    <form onSubmit={handleSubmit}>

                        <div className="flex flex-col">

                            <input
                                className='block my-4 py-2.5 px-2 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer w-full'
                                type="text"
                                name="name"
                                placeholder="Name"
                            />
                            <input
                                className='block mb-4 py-2.5 px-2 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer w-full'
                                type="text"
                                name="brand"
                                placeholder="Brand"
                            />
                        </div>

                        <div className="w-full">
                            <label className="mb-4">Category</label>
                            <div className="w-full">
                                <select className='border-none mb-4 p-2 cursor-pointer outline-none bg-gray-200 rounded-lg w-full ' name="category" id="">
                                    <option value="Other">Other</option>
                                    <option value="Computers">Computers</option>
                                    <option value="Accessories">Accessories</option>
                                    <option value="Printers">Games</option>
                                </select>
                            </div>
                        </div>

                        <section>
                            <div className="mb-4">
                                <label>Original Price</label>
                                <div className="w-full">
                                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full border rounded-lg outline-none px-4" name="price" step="0.01" min="1" />
                                </div>
                            </div>

                            <div className="w-full flex gap-20 items-center my-2">
                                <div>
                                    <input onClick={() => setSale((prev) => !prev)} area-label="sale" className="border mx-1 scale-[120%] cursor-pointer" type="checkbox" name="sale" />
                                    <label htmlFor="sale">Sale</label>
                                </div>
                            </div>

                            {sale &&
                                <section>
                                    <div className={`${salePerc > 0 ? "flex items-center gap-1" : "flex mb-4 items-center gap-1"}`}>
                                        <label className="" htmlFor="sale_perc">Percentage: </label>
                                        <input value={salePerc} onChange={(e) => setSalePerc(e.target.value)} type="number" name="sale_perc" className="border md:w-[20%] w-[50%] rounded-lg outline-none px-1" />
                                        <span className="text-red-500 font-bold"> %</span>
                                        {salePerc > 0 &&
                                            <span onClick={calcF}>
                                                <div
                                                    role="button"
                                                    className="bg-gradient-to-tr from-blue-700 to-green-500 py-px px-1 text-white rounded-lg"
                                                >
                                                    Calculate
                                                </div>
                                            </span>}
                                    </div>

                                    {salePerc > 0 && calc > 0 &&
                                        <div className="text-md mb-4 bg-gradient-to-r from-gray-500 to-gray-700 text-gray-100 rounded-lg md:w-[50%] px-4 my-1">
                                            <span>New sale price is </span>
                                            <span className="text-white font-semibold">R {calc}</span>
                                        </div>
                                    }

                                </section>}
                            {!sale &&
                                <p className="bg-slate-300 p-2 text-sm mb-4">
                                    <span
                                        className="text-gray-600 underline"
                                    >
                                        Put sale on your product and calculate the new price
                                    </span>
                                </p>
                            }
                        </section>

                        <div className="w-full mb-4">
                            <label>Description</label>
                            <div className="w-full">
                                <textarea className='border w-full rounded-lg bg-slate-200 px-2 outline-none' defaultValue={""} name="description" rows="4" id=""></textarea>
                            </div>
                        </div>

                        <div className="w-full">
                            <label>Image</label>
                            <div>
                                <input className='border-none text-gray-600 bg-gray-300 w-full' type="file" name="image" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-[0fr_0fr] grid-cols-1 md:gap-8 gap-4 my-6 w-full">
                            <div className="w-full">
                                <button className="bg-blue-600 w-full md:py-2 md:px-20 p-1 rounded-lg" type="submit" aria-label="Submit">Submit</button>
                            </div>
                            <div className="">
                                <div className="bg-rose-600 w-full md:py-2 md:px-20 p-1 text-center rounded-lg" role="button" aria-label="Cancel">Cancel</div>
                            </div>
                        </div>

                    </form>
                </div>
            </section>
        </div>
    )
}
