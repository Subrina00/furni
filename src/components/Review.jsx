import React from "react";
import { FaStar } from "react-icons/fa";

function Review({ name, image, rating, text }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition">
      <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover mb-3"/>
      <h3 className="font-semibold text-gray-800 text-lg">{name}</h3>

      <div className="flex justify-center text-yellow-400 my-2">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"} />
        ))}
      </div>

      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
}

export default Review;
