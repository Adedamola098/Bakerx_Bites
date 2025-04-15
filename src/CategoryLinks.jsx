import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const categories = [
  { name: "Cakes", image: "/assets/cupcakes_74190-20.avif" },
  { name: "Cookies", image: "/assets/AllCookies.jpg" },
  { name: "Bread", image: "/assets/Allbread.jpg" },
  {
    name: "Pastries",
    image: "/assets/side-view-mix-cookies-with-walnut-chocolate-chips-cottage-cheese-puff-pastry-vanilla-sugar-powder_141793-5018.jpg",
  },
  { name: "Merchandise", image: "/assets/cup-milk-with-cinnamon-biscuits-flour_114579-6077.jpg" }, // Add the merchandise category
];

const CategoryLinks = () => {
  const [fadeIn, setFadeIn] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-opacity duration-1000 ${fadeIn ? "opacity-100" : "opacity-0"}`}>
      <h6 className="text-5xl text-yellow-300 font-bold text-center mb-10 font-serif drop-shadow">
        OUR PRODUCTS
      </h6>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 lg:px-16">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/product?category=${category.name}`}
            className="group flex flex-col items-center text-center transform transition duration-300 hover:scale-105"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full max-w-md h-[200px] object-cover rounded-2xl shadow-lg group-hover:shadow-yellow-400 transition-shadow duration-300"
            />
            <h3 className="text-3xl text-yellow-300 font-semibold mt-4 group-hover:text-white transition-colors duration-300">
              {category.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryLinks;
