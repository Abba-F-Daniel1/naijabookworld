import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, ShoppingCart, Heart, TrendingUp } from "lucide-react";
import { useBookstore } from "../../context/BookstoreContext";
import { formatCurrency } from "../../utils/helpers";

const BookCard = ({ book }) => {
  const { dispatch } = useBookstore();

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TO_CART", payload: book });
  };

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TO_WISHLIST", payload: book });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      y: -10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  const discountedPrice = book.price * (1 - book.discount);

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl"
    >
      <Link to={`/books/${book.id}`}>
        <div className="relative pb-2/3">
          <img
            src={book.cover}
            alt={book.title}
            className="absolute h-full w-full object-cover transition-transform duration-300 transform hover:scale-105"
          />
          {book.discount > 0 && (
            <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 text-xs font-bold">
              {Math.round(book.discount * 100)}% OFF
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 truncate">
            {book.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            {book.author}
          </p>
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < Math.floor(book.rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
              {book.rating.toFixed(1)}
            </span>
          </div>
          <p className="text-lg font-bold text-african-gold mb-2">
            {formatCurrency(discountedPrice)}
            {book.discount > 0 && (
              <span className="ml-2 text-sm line-through text-gray-500">
                {formatCurrency(book.price)}
              </span>
            )}
          </p>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <TrendingUp size={16} className="mr-1" />
            <span>{book.sales.toLocaleString()} sold</span>
          </div>
        </div>
      </Link>
      <div className="px-4 pb-4 flex justify-between">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 mr-2 bg-african-gold text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors duration-200"
          onClick={handleAddToCart}
        >
          <ShoppingCart size={16} className="inline mr-2" /> Add
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gray-200 text-gray-800 hover:bg-gray-300 p-2 rounded-md transition-colors duration-200"
          onClick={handleAddToWishlist}
        >
          <Heart size={16} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default BookCard;
