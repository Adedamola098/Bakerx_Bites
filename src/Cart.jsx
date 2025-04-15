import React, { useState } from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, clearItem, clearCart } = useCart();
  const [showPayment, setShowPayment] = useState(false);
  const [cardType, setCardType] = useState("Visa");

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );


  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    alert("Payment processed successfully!");
    clearCart();
    setShowPayment(false);
  };

  return (
    <div className="min-h-screen bg-yellow-50  py-40 font-sans">
      <h2 className="text-4xl font-bold text-center text-yellow-500 mb-8">
        Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600">
          <p className="mb-4">Your cart is currently empty.</p>
          <Link
            to="/product"
            className="inline-block text-yellow-600 hover:text-yellow-700 underline"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="max-w-4xl mx-auto grid gap-6 mb-10">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-xl object-cover border"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700">
                      {item.name}
                    </h4>
                    <p className="text-gray-500">${item.price.toFixed(2)}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                </div>

                <div className="text-right space-y-2">
                  <p className="text-lg font-bold text-yellow-500">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <div className="flex gap-2 justify-end">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-yellow-200 hover:bg-yellow-400 text-white px-3 py-1 rounded shadow"
                    >
                      -
                    </button>
                    <button
                      onClick={() => clearItem(item.id)}
                      className="bg-yellow-400 hover:bg-yellow-700 text-white px-3 py-1 rounded shadow"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              Total:{" "}
              <span className="text-yellow-500">${total.toFixed(2)}</span>
            </h3>
            <div className="flex gap-4">
              <button
                onClick={clearCart}
                className="bg-yellow-300 hover:bg-yellow-600 text-white px-4 py-2 rounded-xl shadow"
              >
                Clear Cart
              </button>
              <button
                onClick={() => setShowPayment(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-xl shadow"
              >
                Pay Now
              </button>
            </div>
          </div>
        </>
      )}

      {/* Payment Modal */}
      {showPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[90%] sm:w-[500px] shadow-2xl relative animate-fade-in">
            <button
              onClick={() => setShowPayment(false)}
              className="absolute top-3 right-3 text-white bg-yellow-400 hover:bg-yellow-500 p-2 rounded-full shadow"
            >
              X
            </button>
            <h3 className="text-xl font-semibold mb-4 text-yellow-500 text-center">
              Select Payment Method
            </h3>
            <form onSubmit={handlePaymentSubmit} className="space-y-4">
              <select
                value={cardType}
                onChange={(e) => setCardType(e.target.value)}
                className="w-full p-3 border border-yellow-200 rounded-lg focus:outline-yellow-400"
              >
                <option value="Visa">Visa</option>
                <option value="Verve">Verve</option>
              </select>

              <input
                type="text"
                placeholder="Card Number"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-yellow-400"
              />
              <input
                type="text"
                placeholder="Cardholder Name"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-yellow-400"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="MM/YY"
                  required
                  className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-yellow-400"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  required
                  className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-yellow-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg shadow"
              >
                Confirm Payment
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
