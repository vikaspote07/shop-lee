// src/pages/NotFoundPage.js
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-blue-500 mb-4">404</h1>
      <p className="text-2xl text-gray-700 mb-8">Oops! Page not found.</p>
      <Link
        to="/"
        className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
