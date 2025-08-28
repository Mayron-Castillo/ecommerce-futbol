import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-800 shadow p-4 text-xl fixed w-full text-white">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <h1 className="font-bold">Tienda de Mayron</h1>
        <div className="flex gap-8">
          <a href="#" className="hover:text-blue-500">
            Inicio
          </a>
          <a href="#" className="hover:text-blue-500">
            Carrito
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
