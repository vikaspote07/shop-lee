import React from "react";
import { Link } from "react-router-dom";

const OrderSuccessPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/3 bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Order Successfully Placed!</h2>
        <p className="mb-4">
          Thank you for your purchase. Your order has been successfully placed.
        </p>
        <Link to="/">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
