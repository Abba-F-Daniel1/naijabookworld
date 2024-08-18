import React from 'react'
import { motion } from 'framer-motion'
import BookList from '../features/books/BookList'
import {books}  from '../data/books'

const Trending = () => {
  // For the purpose of example, i'll assume the top 10 books are trending
  const trendingBooks = books
    .sort((a, b) => b.sales - a.sales)
    .slice(0, 10)

  return (
    <div className="max-w-7xl md:mx-auto mx-3 py-6 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Trending Books</h1>
        <BookList books={trendingBooks} />
      </motion.div>
    </div>
  )
}

export default Trending
