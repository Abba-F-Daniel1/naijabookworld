import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useBookstore } from "../context/BookstoreContext";
import BookList from "../features/books/BookList";
import Button from "../components/ui/Button";
import { books } from "../data/books";
import { ChevronRight } from "lucide-react";

const quotes = [
  "The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education. - Martin Luther King Jr.",
  "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
  "The more that you read, the more things you will know. The more that you learn, the more places you'll go. - Dr. Seuss",
  "Education is not the filling of a pail, but the lighting of a fire. - William Butler Yeats",
];

const LearningQuote = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 10000); // Change quote every 10 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="bg-african-gold text-white p-6 rounded-lg shadow-lg mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          className="text-lg italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          "{quotes[index]}"
        </motion.p>
      </AnimatePresence>
    </motion.div>
  );
};

const Home = () => {
  const { state } = useBookstore();
  const featuredBooks = books.slice(0, 4); // Get first 4 books as featured

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl md:mx-auto mx-3 py-6 sm:px-6 lg:px-8"
    >
      <motion.section className="text-center mb-12" variants={itemVariants}>
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to Naija BookWorld
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Discover the rich tapestry of African literature and culture through
          our curated collection of books.
        </p>
        <Link to="/books">
          <Button className="text-lg px-8 py-4">
            Explore Books <ChevronRight size={20} className="ml-2 inline" />
          </Button>
        </Link>
      </motion.section>

      <LearningQuote />

      <motion.section className="mb-12" variants={itemVariants}>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          Featured Books
        </h2>
        <BookList books={featuredBooks} />
        <div className="mt-8 text-center">
          <Link
            to="/books"
            className="font-bold text-african-gold hover:text-yellow-600 transition-colors duration-200"
          >
            View All Books <ChevronRight size={20} className="inline" />
          </Link>
        </div>
      </motion.section>

      <motion.section
        className="mb-12 bg-gray-100 dark:bg-gray-800 rounded-lg p-8"
        variants={itemVariants}
      >
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
          About Us
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Naija BookWorld is dedicated to promoting and celebrating African
          literature. Our mission is to connect readers with the diverse voices
          and stories from across the continent.
        </p>
        <Link
          to="/about"
          className="text-african-gold hover:text-yellow-600 transition-colors duration-200"
        >
          Learn More About Us <ChevronRight size={20} className="inline" />
        </Link>
      </motion.section>
    </motion.div>
  );
};

export default Home;
