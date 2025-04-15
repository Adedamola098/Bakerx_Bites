import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-yellow-400 text-white px-6 py-12 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* Logo & Tagline */}
        <div>
          <div className="text-2xl font-bold mb-2">🍞 BAKERY</div>
          <p className="text-sm">Handcrafted & Premium Quality Baked Goods</p>
        </div>

        {/* Working Hours */}
        <div>
          <h4 className="font-semibold mb-2">WORKING HOURS</h4>
          <p className="text-sm">Mon - Fri: 08:00am – 08:30pm</p>
          <p className="text-sm">Saturday: 10:00am – 4:30pm</p>
          <p className="text-sm">Sunday: 10:00am – 4:30pm</p>
        </div>

        {/* Happy Hours */}
        <div>
          <h4 className="font-semibold mb-2">HAPPY HOURS</h4>
          <p className="text-sm">Join us for Happy Hour!</p>
          <p className="text-sm">Discounted baked goods every day.</p>
          <p className="text-sm">8:00pm - 5:00pm</p>
        </div>

        {/* Quick Links (with Site Map) */}
        <div>
          <h4 className="font-semibold mb-2">Site map</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-yellow-400">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-400">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
            </li>
            <li>
              <Link to="/sitemap" className="hover:text-yellow-400 font-semibold">Site Map</Link>
            </li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h4 className="font-semibold mb-2">SUBSCRIBE</h4>
          <p className="text-sm mb-2">Get the latest updates and offers.</p>
          <div className="flex items-center bg-white rounded overflow-hidden">
            <input
              type="email"
              placeholder="Your email address"
              className="px-3 py-2 w-full text-gray-700 outline-none"
            />
            <button className="bg-yellow-400 px-4 py-2 text-black font-bold">
              ➤
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-600 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-gray-300">© 2025 Bakerz. All rights reserved.</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <FaFacebookF className="hover:text-yellow-400 cursor-pointer" />
          <FaTwitter className="hover:text-yellow-400 cursor-pointer" />
          <FaInstagram className="hover:text-yellow-400 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
