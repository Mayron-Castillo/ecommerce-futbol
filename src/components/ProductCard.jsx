import React, { useState } from "react";
import products from "../data/products";

function ProductCard() {
  const sizes = ["S", "M", "L", "XL"];
  const [selectSizes, setSelectSizes] = useState({});

  const handleSelect = (productId, size) => {
    setSelectSizes((prev) => ({
      ...prev,
      [productId]: size,
    }));
  };

  return (
    <div className="mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg"
          >
            <div className="flex justify-center items-center">
              <img
                src={product.imagen}
                alt={product.nombre}
                className="w-[250px] h-[250px] object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {product.nombre}
              </h3>
              <div>
                <ul className="flex gap-4 justify-center">
                  {sizes.map((size) => (
                    <li
                      key={size}
                      className={`${
                        selectSizes[product.id] === size
                          ? "bg-blue-700 text-white"
                          : "bg-gray-200 text-black"
                      } w-8 h-8 flex items-center justify-center rounded-full font-medium cursor-pointer`}
                      onClick={() => handleSelect(product.id, size)}
                    >
                      {size}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-blue-600">
                  ${product.precio}
                </span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
