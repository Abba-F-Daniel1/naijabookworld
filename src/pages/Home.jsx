import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useBookstore } from "../context/BookstoreContext";
import BookList from "../features/books/BookList";
import Button from "../components/ui/Button";
import { books } from "../data/books";
import {
  ChevronRight,
  BookOpen,
  Users,
  Globe2,
  ArrowRight,
  QuoteIcon,
  Globe,
} from "lucide-react";
import TestimonialsSection from "../components/Testimonials";

const quotes = [
  "The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education. - Martin Luther King Jr.",
  "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
  "The more that you read, the more things you will know. The more that you learn, the more places you'll go. - Dr. Seuss",
  "Education is not the filling of a pail, but the lighting of a fire. - William Butler Yeats",
];

const Stats = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 py-8 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-lg rounded-2xl">
    {[
      { label: "Books", value: "1000+", icon: BookOpen },
      { label: "Authors", value: "500+", icon: Users },
      { label: "Countries", value: "30+", icon: Globe2 },
      { label: "Readers", value: "50K+", icon: Users },
    ].map(({ label, value, icon: Icon }) => (
      <div key={label} className="text-center">
        <Icon className="mx-auto h-6 w-6 text-african-gold mb-2" />
        <div className="text-2xl font-bold text-gray-300 dark:text-white">
          {value}
        </div>
        <div className="text-sm text-gray-400 dark:text-gray-300">{label}</div>
      </div>
    ))}
  </div>
);

const LearningQuote = () => {
  const [index, setIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);
  };

  return (
    <div 
      className="relative overflow-hidden rounded-3xl shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-african-gold to-yellow-500" />
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
      
      <div className="relative p-8 md:p-12">
        <QuoteIcon className="w-8 h-8 text-white/60 mb-4" />
        
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              className="text-xl md:text-2xl lg:text-3xl text-white font-medium leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {quotes[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.div 
          className="flex justify-between items-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <button 
            onClick={handlePrev}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
          >
            ←
          </button>
          
          <div className="flex gap-2">
            {quotes.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  i === index ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
          
          <button 
            onClick={handleNext}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
          >
            →
          </button>
        </motion.div>
      </div>
    </div>
  );
};

const Home = () => {
  const featuredBooks = books.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gray-900 dark:bg-gray-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
          <img
            src="/books.webp"
            alt="Hero Background"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-32 lg:pb-36">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Discover the Rich Heritage of{" "}
                <span className="text-african-gold">African Literature</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Explore our curated collection of books that celebrate African
                culture, stories, and voices from across the continent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/books">
                  <Button className="w-full sm:w-auto text-lg px-8 py-4 bg-african-gold hover:bg-yellow-600 text-white rounded-full">
                    Explore Books <ArrowRight className="ml-2 inline" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button className="w-full sm:w-auto text-lg px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12"
            >
              <Stats />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <LearningQuote />
        </motion.div>

        {/* Featured Books Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Featured Books
            </h2>
            <Link
              to="/books"
              className="flex items-center text-african-gold hover:text-yellow-600 transition-colors duration-200"
            >
              View All <ChevronRight className="ml-1" />
            </Link>
          </div>
          <BookList books={featuredBooks} />
        </motion.section>

        {/* About Section */}
        <div className="relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L50,100 L0,0 Z" fill="currentColor" className="text-african-gold"/>
          </svg>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative p-8 md:p-12 lg:p-16"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-1 w-20 bg-african-gold rounded"/>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text bg-gradient-to-r from-african-gold to-yellow-600">
              About Naija BookWorld
            </h2>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-900 dark:text-gray-300 mb-8 leading-relaxed"
          >
            We're dedicated to promoting and celebrating African literature,
            connecting readers with diverse voices and stories from across
            the continent. Our carefully curated collection represents the
            best of African storytelling, from classic literature to
            contemporary works.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: BookOpen,
                title: "Curated Collection",
                description: "Handpicked African literature from classic to contemporary"
              },
              {
                icon: Globe,
                title: "Continental Reach",
                description: "Connecting readers across Africa and beyond"
              },
              {
                icon: Users,
                title: "Community Focus",
                description: "Building a network of passionate readers"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group p-6 rounded-xl bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:shadow-lg hover:shadow-african-gold/10 transition-all duration-300"
              >
                <feature.icon className="w-8 h-8 text-african-gold mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <Link
            to="/about"
            className="group inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-african-gold to-yellow-600 text-white font-medium hover:shadow-lg hover:shadow-african-gold/20 transition-all duration-200"
          >
            Discover Our Story
            <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>
    </div>
      </div>
      <TestimonialsSection/>
    </div>
  );
};

export default Home;
