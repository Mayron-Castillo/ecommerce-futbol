import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  //Estado para guardar las camisetas en el carrito con el Local Storage
  //Se inicializa con las camisetas guardadas o con una array vacio
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // useEffect para guardar los cambios del carrito en el local Storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Función para agregar las camisetas al carrito
  const addToCart = (product, size) => {
    // Busca si ya está en el carrito
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === product.id && item.size === size
      );
      // Si ya está le añade la cantidad en 1
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Si no está, lo añade como producto nuevo
      return [...prevItems, { ...product, size, quantity: 1 }];
    });
  };

  // Función para eliminar las camisetas del carrito
  const removeFromCart = (productId, size) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => !(item.id === productId && item.size === size))
    );
  };

  // Función para mostrar mensaje de que se compraron y con clearCart para vaciar carrito
  const handleCheckout = () => {
    alert(`¡Compra realizada con éxito!`);
    clearCart();
  };
  // Función para vaciar el carrito
  const clearCart = () => {
    setCartItems([]);
  };

  // Función para contar la cantidad de items que hay en el carrito
  const cartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        cartCount,
        handleCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
