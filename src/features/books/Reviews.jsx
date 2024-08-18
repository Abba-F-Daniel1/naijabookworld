import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews from localStorage
    const storedReviews =
      JSON.parse(localStorage.getItem(`bookReviews_${id}`)) || [];
    setReviews(storedReviews);
  }, [id]);

  const handleSubmitReview = (newReview) => {
    const updatedReview = {
      ...newReview,
      username: "CurrentUser",
      timestamp: new Date().toISOString(),
    };
    const updatedReviews = [...reviews, updatedReview];
    setReviews(updatedReviews);

    // Save to localStorage
    localStorage.setItem(`bookReviews_${id}`, JSON.stringify(updatedReviews));
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg">
      <ReviewList reviews={reviews} />
      <ReviewForm onSubmit={handleSubmitReview} />
    </div>
  );
};

export default Reviews;
