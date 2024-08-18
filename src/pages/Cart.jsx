import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useBookstore } from "../context/BookstoreContext";
import CartItem from "../features/cart/CartItem";
import Button from "../components/ui/Button";

const Cart = () => {
  const { state } = useBookstore();

  const total = state.cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-4xl md:mx-auto mx-3 py-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Your Cart
        </h1>
        {state.cart.length === 0 ? (
          <p className="dark:text-gray-300">Your cart is empty.</p>
        ) : (
          <>
            {state.cart.map((book) => (
              <CartItem key={book.id} book={book} />
            ))}
            <div className="mt-6">
              <p className="text-xl font-semibold text-african-gold">
                Total: ${total.toFixed(2)}
              </p>
              <Link to="/checkout">
                <Button className="mt-4">Proceed to Checkout</Button>
              </Link>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Cart;
