import React from "react";
import { motion } from "framer-motion";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </motion.div>
  );
};

export default BookList;
