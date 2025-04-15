import React, { useState, useEffect } from "react";

const Section = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [dateTime, setDateTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    setVisitorCount((prevCount) => prevCount + 1);
    const interval = setInterval(() => {
      setDateTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-cover bg-center" >
      <header className="flex justify-between items-center p-4  text-white">
        <span className="text-sm text-black">Visitors: {visitorCount}</span>
      </header>
      <div className="flex items-center justify-center py-16">
        <div className="bg-amber-400 bg-opacity-80 p-10 rounded-2xl text-center text-white max-w-2xl">
          <h1 className="text-4xl font-serif font-bold mb-4">Welcome to Bakerz - Where Every Bite is Delight!</h1>
          <h2 className="text-2xl font-bold mb-4">Our Motto: Where Smiles Are Served Daily.</h2>
          <p className="mb-6 text-lg">
            At Bakerz, we believe in crafting the finest baked goods with love and passion. From 
            fresh artisan bread to decadent cakes, every creation is made with the highest quality 
            ingredients to bring joy to your taste buds. Experience the magic of baking, one slice 
            at a time.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-700">GET STARTED</button>
            <button className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black">ORDER ONLINE</button>
          </div>
        </div>
      </div>
      <footer className="absolute bottom-0 w-full  text-black text-center py-2 text-sm">
        <marquee>{dateTime} - Bakerz Location:</marquee>
      </footer>
    </div>
  );
};

export default Section;
