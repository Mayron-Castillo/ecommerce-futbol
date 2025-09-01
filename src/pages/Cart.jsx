import React from "react";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, clearCart, cartCount, handleCheckout } =
    useCart();
  const count = cartCount();

  const total = cartItems.reduce(
    (sum, item) => sum + item.precio * item.quantity,
    0
  );

  if (count === 0) {
    return (
      <div className="w-full flex flex-col items-center justify-center mt-20">
        <h1 className="text-2xl font-bold mb-6">Tu carrito está vacío</h1>
        <p>No hay productos en tu carrito de compras.</p>
      </div>
    );
  }

  return (
    <div className="w-full md:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto px-4 py-4 md:py-8">
      <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 mt-15 md:mt-10 text-center md:text-left">
        Tu Carrito ({count} {count === 1 ? "producto" : "productos"})
      </h1>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {cartItems.map((item) => (
          <div
            key={`${item.id}-${item.size}`}
            className="border-b border-gray-200 p-3 md:p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
          >
            <div className="flex items-start sm:items-center w-full sm:w-auto">
              <img
                src={item.imagen}
                alt={item.nombre}
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded flex-shrink-0"
              />
              <div className="ml-2 sm:ml-4">
                <h3 className="font-semibold text-sm sm:text-base">
                  {item.nombre}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Talla: {item.size}
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  Cantidad: {item.quantity}
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  Precio:{" "}
                  <span className="text-blue-600 font-semibold">
                    ${item.precio * item.quantity}
                  </span>
                </p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id, item.size)}
              className="text-red-500 hover:text-red-700 cursor-pointer"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg flex flex-col">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Total:</h2>
          <span className="text-2xl font-bold text-blue-600">
            ${total.toFixed(2)}
          </span>
        </div>
        <button
          onClick={handleCheckout}
          className="mt-4 w-10/12 mx-auto bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 cursor-pointer"
        >
          Proceder al Pago
        </button>
        <button
          onClick={clearCart}
          className="mt-4 w-10/12 mx-auto bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 cursor-pointer"
        >
          Vaciar Carrito
        </button>
      </div>
    </div>
  );
}

export default Cart;
