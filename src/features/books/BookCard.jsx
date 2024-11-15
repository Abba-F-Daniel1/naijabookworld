import React from "react";
import { Link } from "react-router-dom";
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

  const discountedPrice = book.price * (1 - book.discount);

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
      <Link to={`/books/${book.id}`} className="block">
        {/* Image Container with Gradient Overlay */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={book.cover}
            alt={book.title}
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Discount Badge */}
          {book.discount > 0 && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              -{Math.round(book.discount * 100)}%
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-4">
          {/* Title and Author */}
          <div className="mb-3">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight line-clamp-1">
              {book.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              {book.author}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={`${
                    i < Math.floor(book.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  } fill-current`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
              ({book.rating.toFixed(1)})
            </span>
          </div>

          {/* Price Section */}
          <div className="flex justify-between items-center mb-3">
            <div>
              <span className="text-xl font-bold text-african-gold">
                {formatCurrency(discountedPrice)}
              </span>
              {book.discount > 0 && (
                <span className="ml-2 text-sm line-through text-gray-500">
                  {formatCurrency(book.price)}
                </span>
              )}
            </div>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <TrendingUp size={14} className="mr-1" />
              <span>{book.sales.toLocaleString()}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mt-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-african-gold hover:bg-yellow-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <ShoppingCart size={16} />
              <span>Add to Cart</span>
            </button>
            <button
              onClick={handleAddToWishlist}
              className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200"
            >
              <Heart size={16} />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
