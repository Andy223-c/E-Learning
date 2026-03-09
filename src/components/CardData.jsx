import React from 'react'

function CardData({ image, category, title, instructor, rating, price }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />

        {/* Category */}
        <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold text-gray-800">
          {title}
        </h3>

        <p className="text-sm text-gray-500">
          Instructor: {instructor}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <span className="text-yellow-500 font-medium">
            ⭐ {rating}
          </span>

          <span className="text-indigo-600 font-bold">
            ${price}
          </span>
        </div>

        {/* Button */}
        <button className="w-full mt-2 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
          Enroll Now
        </button>
      </div>

    </div>
  );
}


export default CardData
