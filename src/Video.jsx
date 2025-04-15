import React from 'react';

const Video = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-8">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/assets/portrait-african-american-baker-with-fresh-bread-bakery-pastry-chef-holding-small-pastry_1157-48104.jpg"
            alt="Breads and Pastries"
            className="rounded-lg shadow-lg w-full max-w-md h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="bg-white shadow-xl p-8 rounded-lg flex flex-col justify-center h-full">
          <h2 className="text-yellow-400 text-3xl font-semibold mb-4 text-center lg:text-left">
            A Legacy of Freshness & Flavor
          </h2>

          <p className="text-gray-600 mb-4">
            Welcome to one of the oldest and most beloved bakeries in the US. From freshly baked bread to
            custom cakes and sweet treats — everything is made with love, tradition, and top-quality ingredients.
          </p>

          <p className="text-gray-600 mb-4">
            Since the early 1900s, we’ve been sharing joy through every loaf, pastry, and cookie — using family recipes
            passed down through generations.
          </p>

          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Warm, welcoming service that exceeds expectations</li>
            <li>A wide variety of baked goods ready daily</li>
            <li>Custom cakes for birthdays, weddings & more</li>
            <li>Delicious takeaway breakfast options every morning</li>
          </ul>

          <p className="text-gray-600">
            <strong className="text-gray-800">Opening Hours:</strong> <br />
            Monday – Friday: 8:00 AM – 7:00 PM <br />
            Saturday: 8:30 AM – 3:00 PM <br />
            *Closed on bank holidays
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
