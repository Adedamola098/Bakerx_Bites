import React, { useState, useEffect } from "react";

const images = [
    "/assets/istockphoto-1370529871-612x612.jpg",
  "/assets/portrait-african-american-baker-with-fresh-bread-bakery-pastry-chef-holding-small-pastry_1157-48104.jpg",  
    "/assets/mid-shot-baker-pouring-flour-dough_23-2148613510.jpg",
];

const headlines = [
  "Freshly Baked Every Morning",
  "Crafted with Love & Butter",
  "Delight in Every Bite"
];

const subtexts = [
  "Start your day with the warmth of our oven.",
  "Our secret ingredient is care. Taste the difference!",
  "Satisfy your sweet cravings with handmade treats."
];

export default function BakeryHeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden font-serif">
      <div
        className="absolute inset-0 bg-cover drop-shadow-md bg-no-repeat bg-center brightness-75 transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold font-serif mb-4 drop-shadow-md">
          {headlines[currentIndex]}
        </h1>
        <p className="text-xl md:text-2xl font-light italic">
          {subtexts[currentIndex]}
        </p>
        <p className="text-xl md:text-2xl font-light italic"> Our Motto : Where Every Bite is Delight!</p>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white opacity-90" : "bg-white opacity-30"
              }`}
            ></span>
          ))}
        </div>

        <div
          className="absolute top-1/2 left-4 py-10 transform -translate-y-1/2 text-white text-3xl cursor-pointer select-none"
          onClick={prevSlide}
        >
          &#8249;
        </div>
        <div
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl cursor-pointer select-none"
          onClick={nextSlide}
        >
          &#8250;
        </div>
      </div>
    </div>
  );
}