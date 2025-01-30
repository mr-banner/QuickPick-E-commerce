import React, { useState } from "react";
import { assets } from "../assets/assets";
import Login from "./Login";

function Signup() {
  const [notNewUser, setNotNewUser] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility

  const togglePasswordVisibility = () => {
    setShowPassword(true);
    setTimeout(() => {
      setShowPassword(false);
    }, 4000);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(true);
    setTimeout(() => {
      setShowConfirmPassword(false);
    }, 4000);
  };

  return notNewUser ? (
    <Login />
  ) : (
    <div className="sm:h-screen absolute sm:relative top-[13%] right-1 sm:top-0 sm:right-0 w-full flex justify-center items-center bg-[#fffefe] dark:bg-gray-900">
      <div className="border-2 border-gray-300 dark:border-gray-950 flex flex-col md:flex-row h-3/4 w-3/4 items-center bg-[#f9f8f7] dark:bg-slate-800 shadow-md rounded-lg">
        

        <div className="w-full md:w-1/2 h-full p-8  text-center sm:flex hidden flex-col items-center justify-center bg-[#fee8db] dark:bg-gray-950">
          <img
            className="h-24  mb-4 relative bottom-16 dark:hidden"
            src={assets.logo}
            alt="Quickpick Logo"
          />
          <img
            className="h-24  mb-4 relative bottom-16 hidden dark:block"
            src={assets.dark_icon}
            alt="Quickpick Logo"
          />
          <h3 className="font-bold text-xl mb-2 relative bottom-14">
            "Sign up and explore the latest trends!"
          </h3>
          <p className="text-gray-700 dark:text-gray-300 relative bottom-12">
            Your fashion journey starts here! Unlock curated collections and
            discover the best in style. Dive into a world of the latest trends,
            timeless pieces, and exclusive designs tailored just for you.
            Whether you're updating your wardrobe or looking for something
            unique, Quickpick has everything you need to express your personal
            style.
          </p>
        </div>



        <div className="w-full md:w-1/2 p-8 ">
          <h2 className="text-center font-bold text-3xl ">Sign up</h2>
          <p className="text-center font-bold text-sm mb-6">
            Create your account
          </p>
          <form className="flex flex-col space-y-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-3 top-1 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-700 dark:text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Username"
                className="border border-gray-300 rounded-lg p-2 pl-10 mt-1 focus:outline-none focus:ring-2 focus:ring-[#b37f5a] w-full dark:border-gray-600 dark:text-white dark:bg-black dark:focus:ring-[#388aee]"
              />
            </div>

            <div className="relative">
              <span className="absolute inset-y-0 left-3 top-1 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-600 dark:text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25V16.5C21 17.3284 20.3284 18 19.5 18H4.5C3.67157 18 3 17.3284 3 16.5V8.25C3 7.42157 3.67157 6.75 4.5 6.75H19.5C20.3284 6.75 21 7.42157 21 8.25ZM19.5 6.75L12 12L4.5 6.75"
                  />
                </svg>
              </span>
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-lg p-2 pl-10 mt-1 focus:outline-none focus:ring-2 focus:ring-[#b37f5a] w-full dark:border-gray-600 dark:text-white dark:bg-black dark:focus:ring-[#388aee]"
              />
            </div>

            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-6 text-gray-700 dark:text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 10V7a4 4 0 00-8 0v3m0 0H7a3 3 0 00-3 3v7a3 3 0 003 3h10a3 3 0 003-3v-7a3 3 0 00-3-3h-2m-4 3v4m0 0h4m-4 0h-4"
                  />
                </svg>
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="border border-gray-300 rounded-lg p-2 pl-10 mt-1 focus:outline-none focus:ring-2 focus:ring-[#b37f5a] w-full dark:border-gray-600 dark:text-white dark:bg-black dark:focus:ring-[#388aee]"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 top-1 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-6 text-gray-800 dark:text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 5C7 5 3 8 3 12s4 7 9 7 9-3 9-7-4-7-9-7zm0 2a5 5 0 110 10 5 5 0 010-10z"
                  />
                </svg>
              </button>
            </div>

            <div className="relative">
              <span className="absolute inset-y-0 left-3 bottom-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-6 text-gray-700 dark:text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 10V7a4 4 0 00-8 0v3m0 0H7a3 3 0 00-3 3v7a3 3 0 003 3h10a3 3 0 003-3v-7a3 3 0 00-3-3h-2m-4 3v4m0 0h4m-4 0h-4"
                  />
                </svg>
              </span>
              <input
                type={showConfirmPassword ? "text" : "password"} // Toggle between password and text for confirm password
                placeholder="Confirm Password"
                className="border mb-3 border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#b37f5a] w-full pl-10 dark:border-gray-600 dark:text-white dark:bg-black dark:focus:ring-[#388aee]" // Added pl-10 to make room for the lock icon
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute inset-y-0 right-3 flex bottom-1 items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-6 text-gray-800 dark:text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 5C7 5 3 8 3 12s4 7 9 7 9-3 9-7-4-7-9-7zm0 2a5 5 0 110 10 5 5 0 010-10z"
                  />
                </svg>
              </button>
            </div>

            <button className="bg-[#b37f5a] text-white rounded-lg py-2 hover:bg-[#6F4E37] dark:bg-[#388aee] dark:hover:bg-[#21518c]">
              Sign Up
            </button>
          </form>
          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <a
              className="text-indigo-500 font-medium hover:underline cursor-pointer"
              onClick={() => setNotNewUser(true)}
            >
              Login Now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
