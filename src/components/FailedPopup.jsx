import React from 'react';
import { Link } from 'react-router-dom';
import { FaFrown } from 'react-icons/fa';
import "../../src/index.css"

export default function FailedPopup({ visible, togglePopup }) {
  return (
    visible && (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="bg-black opacity-70 absolute top-0 left-0 w-full h-full"></div>
        <div className="relative bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center animate-fade-in">
          <div className="relative">
            <FaFrown className="text-6xl text-yellow-500 mb-6 mx-auto animate-pulse" />
            <div className="absolute top-0 left-0 w-full h-full animate-shake"></div>
          </div>
          <h2 className="text-2xl font-bold mb-4">Oops! Something Went Wrong</h2>
          <p className="text-gray-700 mb-6">
            We're sorry, but it looks like you weren't able to pass the airdrop requirements this time.
            Don't worry, keep an eye out for future opportunities and make sure to double-check the requirements before applying.
            We appreciate your interest and hope to see you participate in our future airdrops!
          </p>
          <div className="flex space-x-4">
            <button
              onClick={togglePopup}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-1/2 transition-colors duration-300 animate-slide-in-left"
            >
              Close
            </button>
            <Link to="/personalize" className="w-1/2">
              <button
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-full transition-colors duration-300 animate-slide-in-right"
              >
                Try Again
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  );
}