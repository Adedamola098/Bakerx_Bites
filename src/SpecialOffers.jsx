import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from './CartContext';
import { useNavigate } from "react-router-dom";
import { specialOffers } from './Data/Index';

export default function SpecialOffers() {
  const [visibleOffers, setVisibleOffers] = useState(3);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleSeeMore = () => {
    setVisibleOffers(specialOffers.length);
  };

  const handleAddToCart = (item) => {
    const pastryToAdd = { ...item, price: item.newPrice };
    addToCart(pastryToAdd);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white px-6 py-10 md:px-12">
      
      {/* 🎉 Stylized Banner without Image */}
      <div className="relative mb-14 rounded-3xl bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 shadow-2xl overflow-hidden py-16 px-6 md:px-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg animate-pulse">
          🎉 Special Offers 🎉
        </h1>
        <p className="text-lg md:text-xl text-white mt-4 font-medium">
          Sweet deals crafted just for you. Enjoy discounts on your favorites!
        </p>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_rgba(255,255,255,0.5)_1px,_transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
      </div>

      {/* 💬 Subtext */}
      <div className="text-center mb-12">
        <p className="text-lg text-gray-600">
          Delicious deals you don’t want to miss! 🍰
        </p>
      </div>

      {/* 🔥 Offers Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {specialOffers.slice(0, visibleOffers).map((item) => (
          <div
            key={item.id}
            className="relative bg-white rounded-2xl p-4 shadow-md hover:shadow-yellow-300 transition-shadow duration-300 group overflow-hidden"
          >
            <div className="absolute top-4 right-[-24px] rotate-45 bg-yellow-400 text-white text-xs font-bold px-8 py-1 shadow-lg z-10">
              {item.discount}
            </div>

            <img
              src={item.image}
              alt={item.name}
              className="rounded-xl h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <h2 className="mt-4 text-xl font-semibold text-yellow-600">{item.name}</h2>

            <div className="flex items-center gap-3 mt-2">
              <span className="line-through text-gray-400 text-sm">
                ₦{item.oldPrice.toLocaleString()}
              </span>
              <span className="text-yellow-700 font-bold text-lg">
                ₦{item.newPrice.toLocaleString()}
              </span>
            </div>

            <button
              onClick={() => handleAddToCart(item)}
              className="mt-4 w-full flex items-center justify-center gap-2 bg-yellow-400 text-white py-2 rounded-full shadow-lg hover:bg-yellow-500 transition-all font-semibold"
            >
              <ShoppingCart size={18} /> Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* 👀 See More Button */}
      {visibleOffers < specialOffers.length && (
        <div className="text-center mt-12">
          <button
            onClick={handleSeeMore}
            className="bg-yellow-100 text-yellow-700 font-bold px-8 py-2 rounded-full shadow hover:bg-yellow-200 transition-all"
          >
            See More Offers
          </button>
        </div>
      )}
    </div>
  );
}
