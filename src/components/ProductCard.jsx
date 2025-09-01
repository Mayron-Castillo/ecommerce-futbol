import React, { useState } from "react";
import products from "../data/products";
import Sizes from "./Sizes";
import { useCart } from "../context/CartContext";

function ProductCard() {
  const { addToCart } = useCart();
  const [selectedSizes, setSelectedSizes] = useState({});

  // Se encarga de seleccionar la talla del producto
  const handleSizeSelect = (productId, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [productId]: size,
    }));
  };

  // Se encarga de agregar el producto al carrito
  const handleAddToCart = (product) => {
    // talla seleccionada del producto especifico
    const selectedSize = selectedSizes[product.id];
    if (!selectedSize) {
      alert("Por favor selecciona una talla");
      return;
    }
    // Se llama a la función addToCart del carrito
    addToCart(product, selectedSize);
    // Se limpia la talla de la camiseta seleccionada, las otras no, solo la del id especifico
    setSelectedSizes((prev) => ({
      ...prev,
      [product.id]: "",
    }));
    alert(
      `${product.nombre} talla ${selectedSize} ha sido agregada al carrito`
    );
  };

  // Se muestran por pantalla las camisetas
  return (
    <div className="w-11/12 mx-auto px-4 py-8">
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
              <div className="my-2">
                {/* Se llama y se muestran las tallas para cada uno de los productos */}
                <Sizes
                  selectedSize={selectedSizes[product.id]}
                  onSelectSize={(size) => handleSizeSelect(product.id, size)}
                ></Sizes>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-blue-600">
                  ${product.precio}
                </span>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
                  onClick={() => handleAddToCart(product)}
                >
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
