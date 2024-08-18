import React from "react";
import { motion } from "framer-motion";
import { Book, Users, Globe } from "lucide-react";

const AboutUs = () => {
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
      className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center"
      >
        About Naija BookWorld
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto text-center"
      >
        Naija BookWorld is more than just a bookshop - we're a gateway to the
        rich and diverse world of African literature.
      </motion.p>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
      >
        <motion.div
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <Book size={48} className="text-african-gold mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            Curated Collection
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            We carefully select books that represent the best of African
            literature, from classic works to emerging voices.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <Users size={48} className="text-african-gold mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            Community Engagement
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            We host events, book clubs, and author talks to foster a vibrant
            community of African literature enthusiasts.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <Globe size={48} className="text-african-gold mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            Global Reach
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Our online platform makes African literature accessible to readers
            around the world, promoting cultural exchange.
          </p>
        </motion.div>
      </motion.div>

      <motion.section
        variants={itemVariants}
        className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg"
      >
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
          Our Mission
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          At Naija BookWorld, our mission is to celebrate and promote the rich
          diversity of African literature. We aim to connect readers with
          powerful stories that illuminate the African experience, foster
          cross-cultural understanding, and inspire a love for reading.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          By curating a comprehensive collection of African books, supporting
          African authors, and creating a community of engaged readers, we
          strive to be a leading platform for the discovery and appreciation of
          African literature worldwide.
        </p>
      </motion.section>
    </motion.div>
  );
};

export default AboutUs;
