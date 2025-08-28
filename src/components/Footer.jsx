import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="mx-auto px-4 w-11/12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-xl font-bold text-center">Tienda de Mayron</h1>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-400">
              Inicio
            </a>
            <a href="#" className="hover:text-blue-400">
              Contacto
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400 text-sm">
          <p>© 2025 Tienda hecha por Mayron.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
