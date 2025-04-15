import React, { useState, useEffect } from "react";
import { Eye } from "lucide-react"; 
import { useLocation } from "react-router-dom";
import pastries from "./Data/Index";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";



const Product = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFromUrl = queryParams.get("category") || "all";

  const notify = () => toast("Wow so easy!");

  
const { addToCart } = useCart();
const navigate = useNavigate();

const handleAddToCart = (pastry) => {
  addToCart(pastry);
  
};



  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(categoryFromUrl);
  const [maxPrice, setMaxPrice] = useState(20);
  const [selectedPastry, setSelectedPastry] = useState(null);

  useEffect(() => {
    const queryCategory = queryParams.get("category");
    if (queryCategory) {
      setCategory(queryCategory);
    }
  }, [location.search]);

  const filteredPastries = pastries.filter((pastry) => {
    const matchesSearch = pastry.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "all" || pastry.category === category;
    const matchesPrice = pastry.price <= maxPrice;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const HandleChanges = () => {
    alert("Added to cart");
  };

  const handleCloseModal = () => {
    setSelectedPastry(null);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center py-32 p-6 bg-gray-100">
      <h6 className="text-4xl text-yellow-300 font-bold font-serif drop-shadow-sm mb-10">Our Pastries</h6>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-10 focus:ring-yellow-300 justify-center">
        <input
          type="text"
          placeholder="Search pastries..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 shadow-md w-60"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded-lg focus:ring-yellow-300 shadow-md w-48"
        >
          <option value="all">All Categories</option>
          <option value="Cakes">Cakes</option>
          <option value="Cookies">Cookies</option>
          <option value="Bread">Bread</option>
          <option value="Pastries">Pastries</option>
          <option value="Merchandise">Merchandise</option>
        </select>

        <div className="flex items-center gap-2">
          <label className="text-gray-600 font-semibold">
            Price: Up to ${maxPrice}
          </label>
          <input
            type="range"
            min="0"
            max="20"
            step="1"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="accent-yellow-300"
          />
        </div>
      </div>

      {/* Products Grid */}
      {filteredPastries.length === 0 ? (
        <p className="text-gray-600">No pastries found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredPastries.map((pastry) => (
            <div
              key={pastry.id}
              className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-2xl transition duration-300 w-[370px]"
            >
{/* Image with overlay icons */}
<div className="relative w-full h-[250px] mb-4 group overflow-hidden rounded-xl">
  <img
    src={pastry.image}
    alt={pastry.name}
    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
  />
  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
    <button
      className="bg-white p-3 rounded-full shadow-md hover:bg-yellow-300 transition transform hover:scale-110"
      onClick={() => setSelectedPastry(pastry)}
    >
      <Eye className="w-6 h-6 text-gray-800" />
    </button>
  </div>
</div>


              {/* Product Info */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">{pastry.name}</h3>
                <p className="text-gray-600 font-medium mb-2">${pastry.price.toFixed(2)}</p>
                <p className="text-sm text-gray-500 mb-4">{pastry.description}</p>
              </div>

             <button
  className="bg-yellow-300 text-white font-medium py-2 rounded-xl hover:bg-yellow-400 transition w-full"
  onClick={() => handleAddToCart(pastry)}
>
  Add to cart
</button>
  <ToastContainer />

            </div>
          ))}
        </div>
      )}

      {/* Modal for detailed info */}
      {selectedPastry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[90%] sm:w-[80%] md:w-[70%] shadow-lg relative flex">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-white bg-yellow-300 hover:bg-text-400 h-[60px] p-3 rounded-md text-2xl"
            >
              X
            </button>
            <div className="flex w-full gap-8">
              <div className="w-1/2">
                <img
                  src={selectedPastry.image}
                  alt={selectedPastry.name}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <div className="w-1/2 p-4">
                <h3 className="text-2xl font-semibold mb-4">{selectedPastry.name}</h3>
                <p className="text-lg text-gray-700 font-medium mb-2">${selectedPastry.price.toFixed(2)}</p>
                <p className="text-gray-600 mb-4">{selectedPastry.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
