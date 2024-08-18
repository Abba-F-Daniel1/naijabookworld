import React from "react";
import { motion } from "framer-motion";
import { useBookstore } from "../context/BookstoreContext";
import WishlistItem from "../features/wishlist/WishlistItem";

const Wishlist = () => {
  const { state } = useBookstore();

  return (
    <div className="max-w-4xl md:mx-auto mx-3 py-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Your Wishlist
        </h1>
        {state.wishlist.length === 0 ? (
          <p className="dark:text-gray-300">Your wishlist is empty.</p>
        ) : (
          state.wishlist.map((book) => (
            <WishlistItem key={book.id} book={book} />
          ))
        )}
      </motion.div>
    </div>
  );
};

export default Wishlist;
