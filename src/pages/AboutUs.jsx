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
      <div className="flex items-center justify-center gap-2 mb-8">
        <div className="h-1 w-20 bg-african-gold rounded"/>
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-african-gold to-yellow-600"
        >
          Our Story
        </motion.h1>
        <div className="h-1 w-20 bg-african-gold rounded"/>
      </div>

      <motion.p
        variants={itemVariants}
        className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto text-center leading-relaxed"
      >
        Naija BookWorld is more than just a bookshop - we're a gateway to the
        rich and diverse world of African literature.
      </motion.p>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
      >
        {[
          {
            icon: Book,
            title: "Curated Collection",
            description: "We carefully select books that represent the best of African literature, from classic works to emerging voices."
          },
          {
            icon: Users,
            title: "Community Engagement",
            description: "We host events, book clubs, and author talks to foster a vibrant community of African literature enthusiasts."
          },
          {
            icon: Globe,
            title: "Global Reach",
            description: "Our online platform makes African literature accessible to readers around the world, promoting cultural exchange."
          }
        ].map((feature, index) => (
          <motion.div
            key={feature.title}
            variants={itemVariants}
            className="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-african-gold/10 transition-all duration-300"
          >
            <feature.icon size={48} className="text-african-gold mb-6" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {feature.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.section
        variants={itemVariants}
        className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 md:p-12 rounded-2xl shadow-lg"
      >
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          Our Mission
        </h2>
        <div className="space-y-6 text-lg">
          <p className="text-gray-600 dark:text-gray-300">
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
        </div>
      </motion.section>
    </motion.div>
  );
};

export default AboutUs
