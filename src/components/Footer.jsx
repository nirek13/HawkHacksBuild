// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="flex flex-col md:flex-row justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-6">
            <li><a href="/" className="hover:underline transition-colors duration-300">Home</a></li>
            <li><a href="/about" className="hover:underline transition-colors duration-300">About</a></li>
            <li><a href="/contact" className="hover:underline transition-colors duration-300">Contact</a></li>
            <li><a href="/privacy" className="hover:underline transition-colors duration-300">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="flex-1 text-center">
          <p>&copy; 2024 Brainmatter. All rights reserved.</p>
        </div>
        <div className="flex-1 text-center md:text-right">
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex justify-center md:justify-end space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-500 transition-colors duration-300"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400 transition-colors duration-300"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-pink-500 transition-colors duration-300"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-700 transition-colors duration-300"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
