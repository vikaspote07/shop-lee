import React from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import EmptyCartPage from "../components/EmptyCart";

const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");

function CheckoutPage() {
  const cartItems = useSelector((state) => state.cart.items);

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch("/create-checkout-session", {
      // Create this API endpoint
      method: "POST",
    });
    const sessionId = await response.json();
    const { error } = await stripe.redirectToCheckout({ sessionId });
    if (error) {
      console.error("Error:", error);
    }
  };

  // if () return <EmptyCartPage/>
  return (
    <div className="container  p-auto p-4 center   mt-80">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
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
          </div>
        ))}
      </div>
      <button
        onClick={handleCheckout}
        className="bg-blue-500 text-white px-6 py-2 rounded"
      >
        Checkout
      </button>
    </div>
  );
}

export default CheckoutPage;
