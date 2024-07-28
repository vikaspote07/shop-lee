// src/pages/EmptyCartPage.js
import React from "react";
import { Link } from "react-router-dom";

const EmptyCartPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        Your Cart is Empty
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        It looks like you haven't added any items to your cart yet.
      </p>
      <img
        src="https://via.placeholder.com/300x200.png?text=Empty+Cart" // Placeholder image, replace with your own
        alt="Empty Cart"
        className="w-1/2 max-w-md mb-8"
      />
      <Link
        to="/"
        className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default EmptyCartPage;
