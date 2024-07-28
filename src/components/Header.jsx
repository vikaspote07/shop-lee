import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
 const { items } = useSelector((state) => state.cart);
  console.log(items);
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-white  no-underline hover:text-yellow-300 transition duration-300 no-underline"
        >
          E-Commerce
        </Link>

        <div className="hidden md:flex flex-grow justify-center">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search products..."
              className=" text-black w-full py-2 px-4 rounded-full bg-white  bg-opacity-20 text-black placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <FaSearch className="absolute right-3 top-3 text-black" />
          </div>
        </div>

        <nav className="flex items-center space-x-6">
          <Link
            to="/cart"
            className="hover:text-yellow-300 transition duration-300 no-underline"
          >
            <div className="relative">
              <FaShoppingCart size={24} className="text-white" />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {items.length}
              </span>
            </div>
          </Link>
          <Link
            to="/profile"
            className="hover:text-yellow-300 transition duration-300 no-underline"
          >
            <FaUser size={24} className="text-white" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
