import React from "react";
import { Star, User } from "lucide-react";

const ReviewList = ({ reviews }) => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
        Customer Reviews
      </h3>
      {reviews.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">
          No reviews yet. Be the first to review this book!
        </p>
      ) : (
        reviews.map((review, index) => (
          <div
            key={index}
            className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-2">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-full p-2 mr-3">
                <User size={20} className="text-gray-600 dark:text-gray-400" />
              </div>
              <div>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {review.username}
                </span>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < review.rating
                          ? "text-yellow-400"
                          : "text-gray-300 dark:text-gray-600"
                      }
                      fill={i < review.rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              {review.comment}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewList;
