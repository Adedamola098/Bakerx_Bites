import React from "react";
import CategoryLinks from "./CategoryLinks";
import { Heart, Star, Smile, ThumbsUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white py-32 px-6">
      {/* Hero */}
      <section className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl font-extrabold text-yellow-400 mb-6">About Us</h1>
        <p className="text-xl text-gray-600 leading-relaxed font-medium">
          Welcome to our pastry paradise — where every bite tells a story. From
          rich, buttery croissants to decadent cakes, we craft all our delights
          with love, tradition, and the finest ingredients. Whether you're
          celebrating, gifting, or simply craving something sweet, we’re here
          to make your day delicious.
        </p>
      </section>

      {/* Mission */}
      <section className="bg-yellow-50 rounded-xl p-10 shadow-lg max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-yellow-500 mb-4">Our Mission</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our mission is to bring warmth, joy, and a sprinkle of sweetness into
          every home. We believe that food made with care and tradition creates
          the best memories. That’s why we pour passion into every recipe and
          treat every customer like family.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center text-yellow-500 mb-10">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700 text-center">
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <Heart className="w-10 h-10 text-yellow-400 mb-3" />
            <h4 className="font-semibold text-lg mb-2">Made with Love</h4>
            <p>Every item is handcrafted with care and passion.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <Star className="w-10 h-10 text-yellow-400 mb-3" />
            <h4 className="font-semibold text-lg mb-2">Premium Quality</h4>
            <p>Only the finest ingredients go into our baked goods.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <Smile className="w-10 h-10 text-yellow-400 mb-3" />
            <h4 className="font-semibold text-lg mb-2">Customer Happiness</h4>
            <p>We’re here to make your day a little sweeter.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <ThumbsUp className="w-10 h-10 text-yellow-400 mb-3" />
            <h4 className="font-semibold text-lg mb-2">Trusted by Many</h4>
            <p>Thousands of happy customers can’t be wrong!</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">
          Explore Our Categories
        </h2>
        <CategoryLinks />
      </section>
    </div>
  );
};

export default About;
