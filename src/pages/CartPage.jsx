import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../style/productDetails.css";

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    toast.success("Item removed from cart");
  };

  const handleClear = () => {
    dispatch(clearCart());
    toast.success("Cart cleared");
  };

  // Calculate the total amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <main className="cart-page">
      <div className="cart-main-container">
        <h1 className="cart-heading">Your Cart Items: ({totalItems})</h1>
        <h3 className="total-items">Total Items: {totalItems}</h3>
        <div className="cart-container">
          <div className="cart-items-container">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    className="cart-item-image"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="cart-item-details">
                    <h3>{`${item.name} × ${item.quantity}`}</h3>
                    <h4>Amount: Rs {item.price * item.quantity}</h4>
                    <button
                      className="remove-button"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>
          <div className="total-summary">
            <h2>Total Amount</h2>
            <h4>Amount: Rs {totalAmount}</h4>
            {/* <button className="clear-button" onClick={handleClear}>
              Clear Cart
            </button> */}
            <Link to="/checkout" className="place-order-link">
              <button className="place-order-button">check out</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CartPage;
