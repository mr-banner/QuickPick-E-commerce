import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Collection from "./pages/Collection";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import FooterComp from "./components/FooterComp";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="px-4 sm:px[5vw] md:px-[7vw] lg:px[9vw]">
      <Navbar />
      <SearchBar/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/order" element={<Orders />} />
      </Routes>
      <FooterComp />
    </div>
  );
};

export default App;
