import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useBookstore } from "../context/BookstoreContext";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { CreditCard, User, MapPin, Mail } from "lucide-react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

const Checkout = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useBookstore();
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    name: "",
    address: "",
    email: "",
  });

  const total = state.cart.reduce((sum, item) => sum + item.price, 0);

  const handleInputChange = (e) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, I would send this to a payment gateway
    console.log("Processing payment:", paymentInfo);

    // Create order details
    const orderDetails = {
      orderId: uuidv4(),
      items: state.cart.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
      })),
      total: total,
      name: paymentInfo.name,
      address: paymentInfo.address,
      email: paymentInfo.email,
      date: new Date().toISOString(),
    };

    // Simulate payment processing
    setTimeout(() => {
      toast.success("Payment processed successfully!");
      dispatch({ type: "CLEAR_CART" });

      // Navigate to the confirmation page with order details
      navigate("/confirmation", { state: { orderDetails } });
    }, 1500);
  };

  return (
    <div className="max-w-4xl md:mx-auto mx-3 py-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Checkout
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 dark:text-gray-300">
              Order Summary
            </h2>
            {state.cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-2"
              >
                <span className="dark:text-gray-300">{item.title}</span>
                <span className="dark:text-african-gold">
                  ${item.price.toFixed(2)}
                </span>
              </div>
            ))}
            <div className="border-t pt-2 mt-4">
              <div className="flex justify-between items-center font-bold dark:text-african-gold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 dark:text-gray-300">
              Payment Information
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={paymentInfo.cardNumber}
                  onChange={handleInputChange}
                  required
                  icon={<CreditCard size={20} />}
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <Input
                  type="text"
                  name="expiryDate"
                  placeholder="MM/YY"
                  value={paymentInfo.expiryDate}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={paymentInfo.cvv}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Cardholder Name"
                  value={paymentInfo.name}
                  onChange={handleInputChange}
                  required
                  icon={<User size={20} />}
                />
              </div>
              <div className="mb-4">
                <Input
                  type="text"
                  name="address"
                  placeholder="Billing Address"
                  value={paymentInfo.address}
                  onChange={handleInputChange}
                  required
                  icon={<MapPin size={20} />}
                />
              </div>
              <div className="mb-4">
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={paymentInfo.email}
                  onChange={handleInputChange}
                  required
                  icon={<Mail size={20} />}
                />
              </div>
              <Button type="submit" className="w-full">
                Process Payment
              </Button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Checkout;
