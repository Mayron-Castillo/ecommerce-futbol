import React from "react";
import products from "../data/products";
function ProductCard() {
  console.log(products);
  return (
    <div>
      <ul className="bg-gray-300">
        {products.map((prod) => (
          <li key={prod.id}>
            <img src={prod.imagen} alt={prod.name} className="w-[250px]" />
            <h1>{prod.nombre}</h1>
            <p>{prod.precio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductCard;
