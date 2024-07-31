import React from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import EmptyCartPage from "../components/EmptyCart";
import { Link } from "react-router-dom";
import "../style/style.css";

const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");

function CheckoutPage() {
  const cartItems = useSelector((state) => state.cart.items);

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch("/create-checkout-session", {
      method: "POST",
    });
    const { sessionId } = await response.json();
    const { error } = await stripe.redirectToCheckout({ sessionId });
    if (error) {
      console.error("Error:", error);
    }
  };

  if (cartItems.length === 0) {
    return <EmptyCartPage />;
  }

  // Calculate total amount
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <main>
      <div id="cartMainContainer">
        <h1 id="totalItemHeading">Your Cart Items: ({cartItems.length})</h1>
        <h3 id="totalItem">Total Items: {cartItems.length}</h3>
        <div id="cartContainer">
          <div id="boxContainer">
            {cartItems.map((item) => (
              <div key={item.id} id="box">
                <img id="box-image" src={item.image} alt={item.title} />
                <h3>
                  {item.title} × {item.quantity}
                </h3>
                <h4>Amount: Rs {item.price * item.quantity}</h4>
              </div>
            ))}
          </div>
          <div id="totalContainer">
            <div id="total">
              <h2>Total Amount</h2>
              <h4>Amount: Rs {totalAmount}</h4>
              <div id="button">
                <button onClick={handleCheckout}>
                  <Link to="/payment">Place Order</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CheckoutPage;
