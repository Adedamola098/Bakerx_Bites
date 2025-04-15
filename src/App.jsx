import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Hero from "./Hero";
import Product from "./Product";
import Login from "./Login";
import About from "./About";
import SignUp from "./SignUp";
import Contact from "./Contact";
import SpecialOffers from "./SpecialOffers";
import Cart from './Cart';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/special-offers" element={<SpecialOffers />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
  );
};

export default App;
