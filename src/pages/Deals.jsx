import React from "react";
import { motion } from "framer-motion";
import BookList from "../features/books/BookList";
import { books } from "../data/books";

const Deals = () => {
  // For the purpose of example, i'll assume books with a discount are on deal
  const dealsBooks = books.filter((book) => book.discount > 0);

  return (
    <div className="max-w-7xl mx-3 md:mx-auto py-6 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Book Deals
        </h1>
        <BookList books={dealsBooks} />
      </motion.div>
    </div>
  );
};

export default Deals;
