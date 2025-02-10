import { useState } from "react";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoSearchOutline, IoMenu, IoCartOutline } from "react-icons/io5";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const handleMenuClick = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-12 p-7 items-center">
        {/* Logo */}
        <div className="col-span-1 pl-1 md:col-span-3 text-xl font-bold md:pl-12">
          Exclusive
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex justify-end pr-5">
          <IoMenu onClick={handleMenuClick} className="text-2xl cursor-pointer" />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 md:hidden">
            <ul className="flex flex-col space-y-4 text-center">
              <li><a href="/" className="hover:text-gray-600 transition-colors">Home</a></li>
              <li><a href="/contact" className="hover:text-gray-600 transition-colors">Contact</a></li>
              <li><a href="/about" className="hover:text-gray-600 transition-colors">About</a></li>
              <li><a href="/signup" className="hover:text-gray-600 transition-colors">Sign Up</a></li>
            </ul>
          </div>
        )}

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:block md:col-span-5">
          <ul className="flex justify-center space-x-6">
            <li><a href="/" className="hover:text-gray-600 transition-colors">Home</a></li>
            <li><a href="/contact" className="hover:text-gray-600 transition-colors">Contact</a></li>
            <li><a href="/about" className="hover:text-gray-600 transition-colors">About</a></li>
            <li><a href="/signup" className="hover:text-gray-600 transition-colors">Sign Up</a></li>
          </ul>
        </nav>

        {/* Search, Wishlist & Cart Icons */}
        <div className="hidden md:flex md:col-span-4 items-center gap-4 pr-5">
          {/* Search Bar */}
          <div className="relative w-48">
            <input
              className="border pl-8 pr-2 py-1 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              type="search"
              placeholder="Enter your search"
            />
            <IoSearchOutline className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
          </div>

          {/* Wishlist & Cart Icons */}
          <CiHeart className="text-3xl cursor-pointer hover:text-gray-600 transition-colors" />
          <IoCartOutline className="text-3xl cursor-pointer hover:text-gray-600 transition-colors" />
        </div>
      </div>

      {/* Divider*/}
      <div className="bg-[#b3b3b3] h-[1px]"></div>
    </>
  );
}

export default Header;
