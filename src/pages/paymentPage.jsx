import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
     
      navigate("/order-success");
    
      toast.success("Order successfully placed!");
    }, 1000); 
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/3 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Payment</h2>
        <p className="mb-4">Processing your payment...</p>

        <Link to ="/order-succes">
          {" "}
          <button
            onClick={handlePayment}
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          >
            Confirm Payment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentPage;
