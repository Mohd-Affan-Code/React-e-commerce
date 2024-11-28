import React from "react";
import { FaPlus } from "react-icons/fa6";

const CollecCard = ({ imgSrc }) => {
  return (
    <div className="flex justify-center">
      <div className="relative max-w-[270px] bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {/* Add Button */}
        <button
          className="bg-blue-500 text-white p-2 rounded-full absolute top-3 right-3 hover:bg-blue-600 focus:outline-none"
          title="Add to Collection"
        >
          <FaPlus size={14} />
        </button>

        {/* Image Section */}
        <div className="w-full h-[200px] overflow-hidden">
          <img
            src={imgSrc}
            alt="Product"
            className="relative top-10 w-[80%] h-[90%] m-auto object-cover "
          />
        </div>

        {/* Details Section */}
        <div className="p-4 text-center">
          <span className="block text-lg font-semibold text-gray-800">
            Ring
          </span>
          <span className="block text-xl text-blue-500 font-bold mt-2">
            $999.99
          </span>
        </div>
      </div>
    </div>
  );
};

export default CollecCard;
