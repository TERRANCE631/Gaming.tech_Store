import React from "react";

export function ProductTable({ product }) {
  return (
    <div className="overflow-x-auto my-10">
      <h1 className="text-2xl font-bold py-5">Product details</h1>
      <table className="table-auto border-collapse w-full">
        <tbody>
          <tr>
            <td className="border px-4 py-2 font-semibold">Product</td>
            <td className="border px-4 py-2">{product.name}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Brand</td>
            <td className="border px-4 py-2 text-purple-900 font-semibold">{product.brand}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Rating</td>
            <td className="border px-4 py-2">{product.rating} Stars</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-red-600 font-semibold">In Stock</td>
            <td className="border px-4 py-2">
              {product.in_stork ? "Yes" : "No"}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold text-red-600">Sale</td>
            <td className="border px-4 py-2">
              {product.sale ? "Yes" : "No"}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Category</td>
            <td className="border px-4 py-2">{product.category}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Description</td>
            <td className="border px-4 py-2">{product.long_description}</td>
          </tr>
        </tbody>

      </table>
    </div>
  );
};


