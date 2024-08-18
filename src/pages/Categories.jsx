import React, { useState } from "react";
import { motion } from "framer-motion";
import { books } from "../data/books";
import BookList from "../features/books/BookList";
import { ArrowLeft } from "lucide-react";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [...new Set(books.map((book) => book.category))];
  const filteredBooks = selectedCategory
    ? books.filter((book) => book.category === selectedCategory)
    : books;

  return (
    <div className="max-w-7xl mx-3 md:mx-auto py-6 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          {selectedCategory ? selectedCategory : "Book Categories"}
        </h1>
        {selectedCategory ? (
          <div>
            <button
              onClick={() => setSelectedCategory("")}
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-african-gold dark:hover:text-african-gold mb-6 transition-colors duration-200"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back
            </button>
            <BookList books={filteredBooks} />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <div
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                <h2 className="text-xl font-semibold text-african-gold">
                  {category}
                </h2>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Categories;
