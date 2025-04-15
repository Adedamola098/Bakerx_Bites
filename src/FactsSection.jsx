import React, { useEffect, useState } from 'react';

const FactsSection = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []); // Trigger fade-in effect on load

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-14 px-4 w-full transition-opacity duration-1000 ${
        fadeIn ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {[
        {
          title: 'Fresh Ingredients',
          description:
            'All of our products are made with the finest quality ingredients and guaranteed fresh.',
        },
        {
          title: 'Baked with love',
          description:
            'We are passionate about baking. Each of our handmade items are carefully baked with love.',
        },
        {
          title: 'On Time Delivery',
          description:
            'We are very punctual and promise to deliver fresh made products to every customer on time.',
        },
      ].map((fact, index) => (
        <div
          key={index}
          className="bg-white text-center px-6 py-8 w-full max-w-sm mx-auto h-auto shadow-lg rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-300"
        >
          <h1 className="text-xl md:text-2xl font-semibold drop-shadow-sm text-yellow-300 mb-4">
            {fact.title}
          </h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            {fact.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FactsSection;
