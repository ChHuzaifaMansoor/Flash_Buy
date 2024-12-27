import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FlashBuyLogo from "../Assets/Flash_Buy_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const navigate = useNavigate();

  const categories = [
    "Electronics",
    "Fashion",
    "Home Appliances",
    "Books",
    "Toys",
    "Sports",
  ];

  const handleCategoryClick = (category) => {
    console.log(`Navigating to ${category}`);
    // Add navigation or functionality for the category
    setIsCategoriesOpen(false); // Close submenu after clicking a category
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <nav className="bg-black p-4 shadow-lg z-50 relative">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={FlashBuyLogo}
              alt="Logo"
              className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto mr-2"
            />

            <span className="text-yellow-500 text-2xl font-bold">
              Flash Buy
            </span>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-yellow-500 focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                ></path>
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div
            className={`md:flex md:items-center ${
              isOpen ? "block" : "hidden"
            } md:space-x-6 absolute md:static top-0 left-0 w-full md:w-auto h-full md:h-auto bg-black md:bg-transparent p-6 md:p-0 transition-all duration-300 ease-in-out z-50`}
          >
            <div className="flex justify-between items-center md:hidden mb-6">
              <span className="text-yellow-500 text-2xl font-bold">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-yellow-500 focus:outline-none"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <a
              href="#"
              className="text-yellow-500 hover:text-gray-300 block md:inline-block text-lg font-medium py-2 md:py-0"
            >
              Home
            </a>
            <a
              href="#"
              className="text-yellow-500 hover:text-gray-300 block md:inline-block text-lg font-medium py-2 md:py-0"
            >
              About
            </a>
            <div className="relative">
              <button
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="text-yellow-500 hover:text-gray-300 block md:inline-block text-lg font-medium py-2 md:py-0 focus:outline-none"
              >
                Categories
              </button>

              {isCategoriesOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-50">
                  {categories.map((category) => (
                    <div
                      key={category}
                      className="px-4 py-2 text-yellow-500 hover:bg-gray-700 hover:text-gray-300 cursor-pointer"
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <a
              href="#"
              className="text-yellow-500 hover:text-gray-300 block md:inline-block text-lg font-medium py-2 md:py-0"
            >
              Contact
            </a>

            <div className="relative block md:inline-block mt-4 md:mt-0">
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-700 text-yellow-200 py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0 space-y-2 md:space-y-0">
              <button
                onClick={() => navigate("/login")}
                className="bg-yellow-500 text-gray-900 font-semibold rounded-full py-2 px-6 hover:bg-yellow-400 transition duration-300 w-full md:w-auto"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="bg-yellow-500 text-gray-900 font-semibold rounded-full py-2 px-6 hover:bg-yellow-400 transition duration-300 w-full md:w-auto"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
