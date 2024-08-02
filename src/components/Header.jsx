import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaSearch, FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";
import useDebounce from "../hooks/useDebounce";
import { fetchProducts } from "../api";

const Header = () => {
  const { items } = useSelector((state) => state.cart);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const fetchFilteredProducts = async () => {
        await fetchProducts(debouncedSearchTerm);
      };
      fetchFilteredProducts();
    }
  }, [debouncedSearchTerm]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-800 to-indigo-700 text-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl  font-bold tracking-tight text-white no-underline hover:text-yellow-300 transition duration-300"
          >
            ecomm
          </Link>

          <div className="hidden md:flex flex-grow justify-center mx-4">
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-2 px-4 rounded-full bg-white text-black bg-opacity-20 text-black placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
              />
              <FaSearch className="absolute right-3 top-3 text-gray-300" />
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/cart"
              className="hover:text-yellow-300 transition duration-300 no-underline"
            >
              <div className="relative">
                <FaShoppingCart size={24} className="text-white" />
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center text-blue-900">
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

          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <FaBars size={24} />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-2 px-4 rounded-full bg-white bg-opacity-20 text-black placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                />
                <FaSearch className="absolute right-3 top-3 text-gray-300" />
              </div>
              <Link
                to="/cart"
                className="flex items-center space-x-2 text-white hover:text-yellow-300 transition duration-300 no-underline"
              >
                <FaShoppingCart size={20} />
                <span>Cart ({items.length})</span>
              </Link>
              <Link
                to="/profile"
                className="flex items-center space-x-2 text-white hover:text-yellow-300 transition duration-300 no-underline"
              >
                <FaUser size={20} />
                <span>Profile</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
