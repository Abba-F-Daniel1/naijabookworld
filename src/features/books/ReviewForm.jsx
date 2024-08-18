import React, { useState } from "react";
import { Star } from "lucide-react";
import Button from "../../components/ui/Button";

const ReviewForm = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ rating, comment });
    setRating(0);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Write a Review</h3>
      <div className="flex mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={24}
            className={`cursor-pointer transition-colors duration-200 ${
              star <= rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
            }`}
            onClick={() => setRating(star)}
            fill={star <= rating ? "currentColor" : "none"}
          />
        ))}
      </div>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg mb-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-african-gold focus:border-transparent"
        rows="4"
        placeholder="Write your review here..."
        required
      />
      <Button type="submit" className="w-full">Submit Review</Button>
    </form>
  );
};

export default ReviewForm;