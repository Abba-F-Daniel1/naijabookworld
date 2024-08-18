import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useBookstore } from "../../context/BookstoreContext";
import { Menu, X, ShoppingCart, Heart, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const { state, dispatch } = useBookstore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => dispatch({ type: "TOGGLE_DARK_MODE" });

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold text-african-gold dark:text-african-gold"
        >
          Naija BookWorld
        </Link>

        <nav className="hidden md:flex space-x-6">
          <NavLink to="/books" currentPath={location.pathname}>
            Books
          </NavLink>
          <NavLink to="/categories" currentPath={location.pathname}>
            Categories
          </NavLink>
          <NavLink to="/trending" currentPath={location.pathname}>
            Trending
          </NavLink>
          <NavLink to="/deals" currentPath={location.pathname}>
            Deals
          </NavLink>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:text-african-gold dark:hover:bg-african-gold dark:text-gray-400"
          >
            {state.darkMode ? (
              <Sun className="w-6 h-6" />
            ) : (
              <Moon className="w-6 h-6" />
            )}
          </button>

          <Link
            to="/wishlist"
            className="relative p-2 rounded-full hover:text-african-gold dark:hover:bg-african-gold dark:text-gray-400"
          >
            <Heart className="w-6 h-6" />
            {state.wishlist.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {state.wishlist.length}
              </span>
            )}
          </Link>

          <Link
            to="/cart"
            className="relative p-2 rounded-full hover:text-african-gold dark:hover:bg-african-gold dark:text-gray-400"
          >
            <ShoppingCart className="w-6 h-6" />
            {state.cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {state.cart.length}
              </span>
            )}
          </Link>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-full hover:text-african-gold dark:hover:bg-african-gold dark:text-gray-400"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white dark:bg-gray-800 py-4"
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <NavLink
              to="/books"
              currentPath={location.pathname}
              onClick={toggleMenu}
            >
              Books
            </NavLink>
            <NavLink
              to="/categories"
              currentPath={location.pathname}
              onClick={toggleMenu}
            >
              Categories
            </NavLink>
            <NavLink
              to="/trending"
              currentPath={location.pathname}
              onClick={toggleMenu}
            >
              Trending
            </NavLink>
            <NavLink
              to="/deals"
              currentPath={location.pathname}
              onClick={toggleMenu}
            >
              Deals
            </NavLink>
          </div>
        </motion.div>
      )}
    </header>
  );
};

const NavLink = ({ to, children, currentPath, onClick }) => (
  <Link
    to={to}
    className={`text-gray-700 dark:text-gray-300 hover:text-african-gold dark:hover:text-african-gold transition-all duration-200 ${
      currentPath === to
        ? "font-bold text-african-gold dark:text-african-gold border-b-2 border-african-gold dark:border-african-gold"
        : ""
    }`}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Header;
