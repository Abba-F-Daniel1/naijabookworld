import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useBookstore } from "../context/BookstoreContext";
import Button from "../components/ui/Button";
import { Star, ShoppingCart, Heart, ArrowLeft } from "lucide-react";
import { books } from "../data/books";
import { formatCurrency } from "../utils/helpers";
import Reviews from "../features/books/Reviews";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useBookstore();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      setLoading(true);
      // Simulating an API call
      setTimeout(() => {
        const foundBook = books.find((b) => b.id === parseInt(id));
        setBook(foundBook);
        setLoading(false);
      }, 500);
    };

    fetchBook();
  }, [id]);

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: book });
  };

  const handleAddToWishlist = () => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: book });
  };

  const isInCart = state.cart.some((item) => item.id === book?.id);
  const isInWishlist = state.wishlist.some((item) => item.id === book?.id);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-african-gold"></div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Book not found
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Sorry, we couldn't find the book you're looking for.
        </p>
        <Button onClick={() => navigate("/books")}>Back to Books</Button>
      </div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl md:mx-auto mx-3 py-6 sm:px-6 lg:px-8"
      >
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 dark:text-gray-300 hover:text-african-gold dark:hover:text-african-gold mb-6 transition-colors duration-200"
        >
          <ArrowLeft size={20} className="mr-2" /> Back
        </button>
        <div className="flex flex-col md:flex-row gap-8 px-8 py-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <motion.div
            className="md:w-1/3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src={book.cover || "https://res.cloudinary.com/doetven6z/image/upload/v1723942239/no-image-placeholder_s57nye.webp"}
              alt={book.title}
              className="w-full rounded-lg shadow-md"
            />
          </motion.div>
          <motion.div
            className="md:w-2/3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {book.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              by {book.author}
            </p>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={
                    i < Math.floor(book.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
              <span className="ml-2 text-gray-600 dark:text-gray-300">
                {book.rating.toFixed(1)}
              </span>
            </div>
            <p className="text-2xl font-bold text-african-gold mb-6">
              {formatCurrency(book.price)}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {book.description}
            </p>
            <div className="flex gap-4">
              <Button
                onClick={handleAddToCart}
                className={`flex-1 ${
                  isInCart ? "bg-green-500 hover:bg-green-600" : ""
                }`}
                disabled={isInCart}
              >
                <ShoppingCart size={20} className="mx-auto" />
                {isInCart ? "In Cart" : "Add to Cart"}
              </Button>
              <Button
                onClick={handleAddToWishlist}
                className={`bg-gray-200 text-gray-800 hover:bg-gray-300 ${
                  isInWishlist ? "bg-red-100 text-red-500" : ""
                }`}
                disabled={isInWishlist}
              >
                <Heart
                  size={20}
                  className={isInWishlist ? "fill-current" : ""}
                />
              </Button>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Reviews />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BookDetails;
