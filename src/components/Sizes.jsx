import React from "react";

function Sizes({ selectedSize, onSelectSize }) {
  const sizes = ["S", "M", "L", "XL"];

  return (
    <div>
      {/* Se muestran cada una de las 4 tallas con el .map */}
      <ul className="flex gap-4 justify-center">
        {sizes.map((size) => (
          <li
            key={size}
            className={`${
              selectedSize === size
                ? "bg-blue-700 text-white" // Estilo si la talla se selecciona
                : "bg-gray-200 text-black" // Estilo si la talla no se selecciona
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
