import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { books } from "../data/books";
import BookList from "../features/books/BookList";
import { 
  ArrowLeft, 
  BookOpen, 
  History, 
  Heart, 
  Sparkles, 
  Music, 
  Skull, 
  GraduationCap,
  Gem,
  Scroll,
  Swords,
  Theater,
  BookMarked,
  Baby,
  Glasses
} from "lucide-react";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = useMemo(() => [...new Set(books.map((book) => book.category))], []);
  const filteredBooks = selectedCategory
    ? books.filter((book) => book.category === selectedCategory)
    : books;

  // Map categories to icons
  const categoryIcons = {
    "Classic Literature": BookMarked,
    "Historical Fiction": History,
    "Contemporary Fiction": BookOpen,
    "Science Fiction": Sparkles,
    "Fantasy": Gem,
    "Adventure": Swords,
    "Political Fiction": Scroll,
    "Political Satire": Theater,
    "Satire": Theater,
    "Romance": Heart,
    "Poetry": Music,
    "Thriller": Skull,
    "Coming-of-Age": GraduationCap,
    "Young Adult": GraduationCap,
    "Memoir": Glasses,
    "Technology": Sparkles,
    "Magical Realism": Sparkles,
    "Epistolary Fiction": Scroll
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const getCategoryCount = (category) => {
    return books.filter((book) => book.category === category).length;
  };

  return (
    <div className="max-w-7xl mx-3 md:mx-auto py-6 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
          variants={itemVariants}
        >
          {selectedCategory ? selectedCategory : "Explore Categories"}
        </motion.h1>

        {selectedCategory ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setSelectedCategory("")}
              className="group flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-african-gold dark:hover:text-african-gold mb-8 transition-colors duration-200"
            >
              <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
              <span>Back to Categories</span>
            </button>
            <BookList books={filteredBooks} />
          </motion.div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {categories.map((category) => {
              const Icon = categoryIcons[category] || BookOpen;
              const bookCount = getCategoryCount(category);
              
              return (
                <motion.div
                  key={category}
                  variants={itemVariants}
                  onHoverStart={() => setHoveredCategory(category)}
                  onHoverEnd={() => setHoveredCategory(null)}
                  onClick={() => setSelectedCategory(category)}
                  className="relative group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-african-gold/10 dark:bg-african-gold/20 rounded-2xl transform transition-transform group-hover:scale-105 -z-10" />
                  <div className="relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br from-african-gold/20 to-transparent rounded-full" />
                    <div className="absolute -left-8 -bottom-8 w-24 h-24 bg-gradient-to-tr from-african-gold/10 to-transparent rounded-full" />
                    
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-african-gold/10 dark:bg-african-gold/20 rounded-xl">
                        <Icon size={24} className="text-african-gold" />
                      </div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {bookCount} {bookCount === 1 ? 'Book' : 'Books'}
                      </span>
                    </div>

                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {category}
                    </h2>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        View Collection
                      </span>
                      <motion.div
                        animate={{
                          x: hoveredCategory === category ? 5 : 0
                        }}
                        className="w-6 h-6 flex items-center justify-center text-african-gold"
                      >
                        →
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Categories;