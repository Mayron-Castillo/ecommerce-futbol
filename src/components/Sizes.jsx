import React from "react";

function Sizes({ selectedSize, onSelectSize }) {
  const sizes = ["S", "M", "L", "XL"];

  return (
    <div>
      <ul className="flex gap-4 justify-center">
        {sizes.map((size) => (
          <li
            key={size}
            className={`${
              selectedSize === size
                ? "bg-blue-700 text-white"
                : "bg-gray-200 text-black"
            } w-8 h-8 flex items-center justify-center rounded-full font-medium cursor-pointer`}
            onClick={() => onSelectSize(size)}
          >
            {size}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sizes;
