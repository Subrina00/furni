import React from "react";
import Button from "./Button";
import { FiShoppingCart } from "react-icons/fi";

function Product({ image, name, price }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-72 p-4 flex flex-col items-center transition hover:shadow-lg">
      <img src={image} alt={name}
        className="w-60 h-48 object-cover rounded-md mb-4 hover:scale-120 transition duration-300"/>

      <h2 className="text-lg font-semibold text-gray-800 my-2">{name}</h2>
      

      <div className="flex justify-center items-center gap-10 mt-auto">
        <p className="text-gray-600 mt-1 mb-3">BDT {price}</p>
            <button className="p-4 hover:bg-gray-200 rounded-[2px] cursor-pointer duration-300 transition">
                <div className="flex items-center justify-center gap-4">
                    <FiShoppingCart className="text-black" />
                </div>
            </button>
        <button className="px-3 py-1 bg-gray-600 text-white rounded-[3px] hover:bg-gray-700 cursor-pointer duration-300 transition">Detail</button>
      </div>
    </div>
  );
}

export default Product;
