import React, { useState } from "react";

function Sizes({ productId }) {
  const sizes = ["S", "M", "L", "XL"];
  const [selectSizes, setSelectSizes] = useState({});

  const handleSelect = (productId, size) => {
    setSelectSizes((prev) => ({
      ...prev,
      [productId]: size,
    }));
  };
  return (
    <div>
      <ul className="flex gap-4 justify-center">
        {sizes.map((size) => (
          <li
            key={size}
            className={`${
              selectSizes[productId] === size
                ? "bg-blue-700 text-white"
                : "bg-gray-200 text-black"
            } w-8 h-8 flex items-center justify-center rounded-full font-medium cursor-pointer`}
            onClick={() => handleSelect(productId, size)}
          >
            {size}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sizes;
