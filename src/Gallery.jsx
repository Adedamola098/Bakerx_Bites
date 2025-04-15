import React, { useState, useEffect } from 'react';
import { galleryImages } from './Data/Index';

const Gallery = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true); // Trigger fade-in effect on load
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yellow-300 text-center mb-4">Our Gallery</h2>
          <p className="text-lg text-gray-500">
            A look at some of our most delicious and creative creations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-700"
            >
              <img
                src={src}
                alt={`gallery-${index}`}
                className="object-cover w-full h-60 sm:h-72 md:h-80 hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
