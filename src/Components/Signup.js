import React from "react";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
  return (
   <>
   <link rel="stylesheet" href="tailwind.css" />
    <script src="https://cdn.tailwindcss.com"></script>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
      integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <div className="bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 flex items-center justify-center h-screen">
      <div className="max-w-[960px] bg-[#00000050] grid grid-cols-1 sm:grid-cols-2 gap-10 p-6 rounded-2xl">
        {/* Left Section with Image */}
        <div className="relative">
          <img
            src="https://wallpapers.com/images/hd/neon-aesthetic-background-963gkherxcsupubv.jpg"
            alt="Abstract Yellow Background"
            className="rounded-lg shadow-lg"
          />
        </div>
        {/* Right Section with Form */}
        <div className="grid gap-5">
          <h1 className="text-5xl font-bold text-yellow-400">Sign Up</h1>
          <p className="text-yellow-200">
            Create your account to access amazing features!
          </p>
          <form className="space-y-6">
            <div className="relative">
              <div className="absolute top-1 left-1 bg-yellow-400 rounded-full p-2 flex items-center justify-center text-gray-800">
                <i className="fa-solid fa-user"></i>
              </div>
              <input
                className="w-full sm:w-80 bg-gray-800 text-yellow-200 py-2 px-12 rounded-full focus:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:drop-shadow-lg"
                type="text"
                placeholder="Full Name"
                aria-label="Full Name"
              />
            </div>
            <div className="relative">
              <div className="absolute top-1 left-1 bg-yellow-400 rounded-full p-2 flex items-center justify-center text-gray-800">
                <i className="fa-solid fa-envelope-open"></i>
              </div>
              <input
                className="w-full sm:w-80 bg-gray-800 text-yellow-200 py-2 px-12 rounded-full focus:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:drop-shadow-lg"
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
              />
            </div>
            <div className="relative">
              <div className="absolute top-1 left-1 bg-yellow-400 rounded-full p-2 flex items-center justify-center text-gray-800">
                <i className="fa-solid fa-lock"></i>
              </div>
              <input
                className="w-full sm:w-80 bg-gray-800 text-yellow-200 py-2 px-12 rounded-full focus:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:drop-shadow-lg"
                type="password"
                placeholder="Password"
                aria-label="Password"
              />
            </div>
            <div className="relative">
              <div className="absolute top-1 left-1 bg-yellow-400 rounded-full p-2 flex items-center justify-center text-gray-800">
                <i className="fa-solid fa-lock"></i>
              </div>
              <input
                className="w-full sm:w-80 bg-gray-800 text-yellow-200 py-2 px-12 rounded-full focus:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:drop-shadow-lg"
                type="password"
                placeholder="Confirm Password"
                aria-label="Confirm Password"
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-400 w-full sm:w-80 text-gray-800 font-semibold rounded-full py-2 hover:bg-yellow-300 transition duration-300"
            >
              Sign Up
            </button>
          </form>
          <div className="text-yellow-200 border-t border-yellow-400 pt-4 text-sm">
              <p>
                Already have an account?{" "}
                <span
                  className="text-yellow-400 font-semibold cursor-pointer"
                  onClick={() => navigate('/login')}
                >
                  Login
                </span>
              </p>
            </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default Signup;
