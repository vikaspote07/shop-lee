import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      <button
        onClick={handleClear}
        className="bg-red-500 text-white px-4 py-2 rounded mb-4"
      >
        Clear Cart
      </button>
      <div>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="border border-gray-300 p-4 mb-4 rounded-lg flex items-center"
          >
            <img
              className="w-24 h-24 object-cover mr-4"
              src={item.image}
              alt={item.name}
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-lg text-gray-700 mb-2">{item.price}</p>
            </div>
            <button
              onClick={() => handleRemove(item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <Link to="/checkout">
        <button className="bg-blue-500 text-white px-6 py-2 rounded">
          Checkout
        </button>
      </Link>
    </div>
  );
}

export default CartPage;
