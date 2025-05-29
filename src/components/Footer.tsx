import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-8 sm:px-20 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Legoblock.mn. Бүх эрх хуулиар
          хамгаалагдсан.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
