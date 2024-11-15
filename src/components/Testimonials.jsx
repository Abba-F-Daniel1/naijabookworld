import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Chioma Adebayo",
    role: "Book Enthusiast",
    image: "/chioma.jpg",
    rating: 5,
    text: "Naija BookWorld has transformed my reading experience. Their collection of African literature is unmatched, and the community they've built around reading is incredible.",
  },
  {
    id: 2,
    name: "Oluwaseun Johnson",
    role: "Literature Professor",
    image: "/johnson.webp",
    rating: 5,
    text: "As an educator, I'm impressed by the breadth and quality of books available. It's become my go-to resource for both classic and contemporary African literature.",
  },
  {
    id: 3,
    name: "Aminata Diallo",
    role: "Book Club Organizer",
    image: "/dialla.webp",
    rating: 5,
    text: "The curated collections and reading recommendations have added so much value to our book club discussions. The platform is a treasure trove of African storytelling.",
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full rotate-12 opacity-5">
          <Quote size={400} className="text-african-gold" />
        </div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full -rotate-12 opacity-5">
          <Quote size={400} className="text-african-gold" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="h-1 w-12 bg-african-gold rounded"/>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Reader Stories
            </h2>
            <div className="h-1 w-12 bg-african-gold rounded"/>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 text-lg"
          >
            Hear what our community has to say about their journey with Naija BookWorld
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12"
            >
              <div className="flex flex-col items-center text-center">
                <Quote className="w-12 h-12 text-african-gold mb-6 opacity-50" />
                
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-african-gold text-african-gold" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 dark:text-gray-200 text-lg md:text-xl mb-8 leading-relaxed">
                  `{testimonials[currentIndex].text}`
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-african-gold"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
            <button
              onClick={handlePrevious}
              className="pointer-events-auto transform -translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-african-gold dark:hover:text-african-gold transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="pointer-events-auto transform translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-african-gold dark:hover:text-african-gold transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-african-gold'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-african-gold/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;