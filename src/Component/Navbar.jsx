import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "../CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visitorCount, setVisitorCount] = useState(0);
  const [dateTime, setDateTime] = useState("");
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Simulate visitor count
  useEffect(() => {
    const storedCount = localStorage.getItem("visitorCount");
    const newCount = storedCount ? parseInt(storedCount) + 1 : 1;
    localStorage.setItem("visitorCount", newCount);
    setVisitorCount(newCount);
  }, []);

  // Live date/time
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setDateTime(`${formatted} | Lagos, Nigeria`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      {/* Marquee */}
      <div className="bg-yellow-500 text-white text-sm py-2 overflow-hidden relative h-8">
        <div className="absolute whitespace-nowrap animate-marquee">
          <span className="mx-4">{dateTime}</span>
        </div>
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
            .animate-marquee {
              display: flex;
              animation: marquee 10s linear infinite;
            }
          `}
        </style>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-yellow-600">
          <img
            src="src/assets/0c0c61a5-f15b-4191-ae4a-11d5fb262726-removebg-preview.png"
            alt="Logo"
            className="w-[70px] h-[50px]"
          />
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-8 items-center">
          <Link to="/" className="hover:text-yellow-500 transition">Home</Link>
          <Link to="/product" className="hover:text-yellow-500 transition">Pastries</Link>
          <Link to="/about" className="hover:text-yellow-500 transition">About</Link>
          <Link to="/contact" className="hover:text-yellow-500 transition">Contact</Link>
        </div>

        {/* Right Side: Cart, Login & Visitor */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-7 h-7 text-gray-700" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
          <Link to="/login" className="px-4 py-2 border border-yellow-500 text-yellow-500 rounded-md hover:bg-yellow-500 hover:text-white transition">
            Login
          </Link>
          <div className="text-sm text-gray-600">Visitors: {visitorCount}</div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Link to="/" className="block py-3 px-6 border-b hover:text-yellow-500" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/product" className="block py-3 px-6 border-b hover:text-yellow-500" onClick={() => setIsOpen(false)}>Products</Link>
        <Link to="/about" className="block py-3 px-6 border-b hover:text-yellow-500" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/contact" className="block py-3 px-6 border-b hover:text-yellow-500" onClick={() => setIsOpen(false)}>Contact</Link>
        <Link to="/cart" className="block py-3 px-6 border-b hover:text-yellow-500 relative" onClick={() => setIsOpen(false)}>
          Cart
          {totalItems > 0 && (
            <span className="ml-2 inline-flex justify-center items-center w-5 h-5 text-xs font-bold text-white bg-yellow-400 rounded-full">
              {totalItems}
            </span>
          )}
        </Link>

        <div className="flex flex-col space-y-3 p-4">
          <Link to="/login" className="px-4 py-2 border border-yellow-500 text-yellow-500 text-center rounded-md hover:bg-yellow-500 hover:text-white transition">
            Login
          </Link>
          <div className="text-center text-gray-600 text-sm">Visitors: {visitorCount}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
