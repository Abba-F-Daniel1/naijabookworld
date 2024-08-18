import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} Naija BookWorld. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;