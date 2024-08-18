import React, { useEffect, useState } from "react";
import { useLocation, Link, Navigate } from "react-router-dom";
import { Check, AlertCircle } from "lucide-react";
import { sendConfirmationMessage } from "../services/messageService";

const Confirmation = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [messageError, setMessageError] = useState(null);
  const location = useLocation();
  const { orderDetails } = location.state || {};

  useEffect(() => {
    if (orderDetails && orderDetails.email) {
      sendConfirmationMessage(orderDetails.email, orderDetails)
        .then(() => setMessageSent(true))
        .catch((error) => setMessageError(error.message));
    }
  }, [orderDetails]);

  if (!orderDetails) {
    return <Navigate to="/cart" replace />;
  }

  return (
    <div className="max-w-2xl md:mx-auto mx-3 m-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
          <Check size={32} />
        </div>
        <h2 className="text-2xl font-bold dark:text-white">Thank You for Your Order!</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Order #{orderDetails.orderId}
        </p>
      </div>
      <div className="border-t border-b border-gray-200 dark:border-gray-700 dark:text-gray-300 py-4 mb-4">
        <h3 className="font-semibold mb-2">Order Summary:</h3>
        <ul>
          {orderDetails.items.map((item, index) => (
            <li key={index} className="flex justify-between mb-2">
              <span>{item.title}</span>
              <span className="dark:text-african-gold">${item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="font-bold mt-2 flex justify-between dark:text-gray-300">
          <span className="dark:text-african-gold">Total:</span>
          <span className="dark:text-african-gold">${orderDetails.total.toFixed(2)}</span>
        </div>
      </div>
      <div className="mb-4 dark:text-gray-300">
        <h3 className="font-semibold mb-2">Shipping Details:</h3>
        <p>{orderDetails.name}</p>
        <p>{orderDetails.address}</p>
        <p>{orderDetails.email}</p>
      </div>
      {messageSent ? (
        <p className="mb-4 text-green-600 dark:text-green-400">
          A confirmation message has been sent to {orderDetails.email}.
        </p>
      ) : messageError ? (
        <p className="mb-4 text-red-600 dark:text-red-400 flex items-center">
          <AlertCircle size={20} className="mr-2" />
          Failed to send confirmation message: {messageError}
        </p>
      ) : (
        <p className="mb-4">Sending confirmation message...</p>
      )}
      <Link
        to="/books"
        className="block w-full text-center bg-african-gold text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors duration-300"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default Confirmation;