import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BookList from "../features/books/BookList";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";
import { books } from "../data/books.js";
import { Search, Filter, X } from "lucide-react";

const Books = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
  const [sortBy, setSortBy] = useState("title");
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = [...new Set(books.map((book) => book.category))];

  useEffect(() => {
    const filtered = books
      .filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((book) =>
        selectedCategory ? book.category === selectedCategory : true
      )
      .filter((book) =>
        selectedRating ? book.rating >= parseInt(selectedRating) : true
      )
      .filter(
        (book) => book.price >= priceRange.min && book.price <= priceRange.max
      )
      .sort((a, b) => {
        if (sortBy === "title") return a.title.localeCompare(b.title);
        if (sortBy === "author") return a.author.localeCompare(b.author);
        if (sortBy === "price") return a.price - b.price;
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "sales") return b.sales - a.sales;
        return 0;
      });

    setFilteredBooks(filtered);
  }, [searchTerm, selectedCategory, selectedRating, priceRange, sortBy]);

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

  return (
    <div className="max-w-7xl  md:mx-auto mx-3 py-6 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Explore African Literature
        </h1>
        <div className="mb-6 flex flex-wrap items-center gap-4">
          <div className="flex-grow">
            <Input
              type="text"
              placeholder="Search books or authors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
              icon={<Search size={20} />}
            />
          </div>
          <Button onClick={toggleFilter} className="flex items-center gap-2">
            <Filter size={20} />
            {isFilterOpen ? "Hide Filters" : "Show Filters"}
          </Button>
        </div>

        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  options={[
                    { value: "", label: "All Categories" },
                    ...categories.map((category) => ({
                      value: category,
                      label: category,
                    })),
                  ]}
                  label="Category"
                />
                <Select
                  value={selectedRating}
                  onChange={(e) => setSelectedRating(e.target.value)}
                  options={[
                    { value: "", label: "All Ratings" },
                    { value: "5", label: "5 Stars & Up" },
                    { value: "4", label: "4 Stars & Up" },
                    { value: "3", label: "3 Stars & Up" },
                  ]}
                  label="Rating"
                />
                <Select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  options={[
                    { value: "title", label: "Sort by Title" },
                    { value: "author", label: "Sort by Author" },
                    { value: "price", label: "Sort by Price" },
                    { value: "rating", label: "Sort by Rating" },
                    { value: "sales", label: "Sort by Popularity" },
                  ]}
                  label="Sort By"
                />
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Price Range
                  </label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      placeholder="Min"
                      value={priceRange.min}
                      onChange={(e) =>
                        setPriceRange({
                          ...priceRange,
                          min: parseInt(e.target.value),
                        })
                      }
                      className="w-full"
                    />
                    <span>-</span>
                    <Input
                      type="number"
                      placeholder="Max"
                      value={priceRange.max}
                      onChange={(e) =>
                        setPriceRange({
                          ...priceRange,
                          max: parseInt(e.target.value),
                        })
                      }
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <BookList books={filteredBooks} />
      </motion.div>
    </div>
  );
};

export default Books;
