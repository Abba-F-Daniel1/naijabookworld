import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "../pages/Home";
import Books from "../pages/Books";
import BookDetails from "../pages/BookDetails";
import Categories from "../pages/Categories";
import Trending from "../pages/Trending";
import Deals from "../pages/Deals";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import AboutUs from "../pages/AboutUs";
import Confirmation from "../pages/Confirmation";

const pageVariants = {
  initial: { opacity: 0, x: "-100%" },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "100%" },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const AnimatedPage = ({ children }) => {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AnimatedPage>
            <Home />
          </AnimatedPage>
        }
      />
      <Route
        path="/books"
        element={
          <AnimatedPage>
            <Books />
          </AnimatedPage>
        }
      />
      <Route
        path="/books/:id"
        element={
          <AnimatedPage>
            <BookDetails />
          </AnimatedPage>
        }
      />
      <Route
        path="/categories"
        element={
          <AnimatedPage>
            <Categories />
          </AnimatedPage>
        }
      />
      <Route
        path="/trending"
        element={
          <AnimatedPage>
            <Trending />
          </AnimatedPage>
        }
      />
      <Route
        path="/deals"
        element={
          <AnimatedPage>
            <Deals />
          </AnimatedPage>
        }
      />
      <Route
        path="/wishlist"
        element={
          <AnimatedPage>
            <Wishlist />
          </AnimatedPage>
        }
      />
      <Route
        path="/cart"
        element={
          <AnimatedPage>
            <Cart />
          </AnimatedPage>
        }
      />
      <Route
        path="/checkout"
        element={
          <AnimatedPage>
            <Checkout />
          </AnimatedPage>
        }
      />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}

export default AppRoutes;
