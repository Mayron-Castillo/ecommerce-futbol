import React from "react";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, clearCart, cartCount } = useCart();
  const count = cartCount();

  const total = cartItems.reduce(
    (sum, item) => sum + item.precio * item.quantity,
    0
  );

  if (count === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Tu carrito está vacío</h1>
        <p>No hay productos en tu carrito de compras.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 mt-10">
        Tu Carrito ({count} {count === 1 ? "producto" : "productos"})
      </h1>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {cartItems.map((item) => (
          <div
            key={`${item.id}-${item.size}`}
            className="border-b border-gray-200 p-4 flex justify-between items-center"
          >
            <div className="flex items-center">
              <img
                src={item.imagen}
                alt={item.nombre}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="ml-4">
                <h3 className="font-semibold">{item.nombre}</h3>
                <p className="text-gray-600">Talla: {item.size}</p>
                <p className="text-gray-600">Cantidad: {item.quantity}</p>
                <p className="text-blue-600 font-semibold">
                  ${item.precio * item.quantity}
                </p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id, item.size)}
              className="text-red-500 hover:text-red-700"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Total:</h2>
          <span className="text-2xl font-bold text-blue-600">
            ${total.toFixed(2)}
          </span>
        </div>
        <button
          onClick={clearCart}
          className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
        >
          Vaciar Carrito
        </button>
        <button className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
          Proceder al Pago
        </button>
      </div>
    </div>
  );
}

export default Cart;
