import React from "react";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-gray-200">
      <Navbar></Navbar>
      <ProductCard></ProductCard>
      <Footer></Footer>
    </div>
  );
}

export default Home;
