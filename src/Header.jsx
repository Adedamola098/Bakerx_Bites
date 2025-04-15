import React from "react";

const Header = () => {
    return (
      <div className="relative ">
        <header className="flex justify-between text-white  items-center p-4 bg-amber-400 ">
          <img src="src\assets\0c0c61a5-f15b-4191-ae4a-11d5fb262726.jpg" alt="Bakerz Logo" className="h-12" />
          <span className="text-sm">Visitors: 0</span>
        </header>
        <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: "url('/path-to-banner.jpg')" }}>
          <div className="w-full h-full bg-opacity-50 flex justify-center items-center">
            <h1 className="text-4xl animate-bounce font-bold text-white">Delicious Cakes, Pastries, Cookies & More!</h1>
          </div>
        </div>
      </div>
    );
  };

  export default Header;