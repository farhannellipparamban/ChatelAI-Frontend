import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 sm:py-5 lg:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-3xl text-green-400 font-medium tracking-tighter leading-tight">
              ChatelAI
            </h1>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-700 px-3 py-2 rounded-md text-md font-semibold transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-700 px-3 py-2 rounded-md text-md font-semibold transition-colors duration-300"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-700 px-3 py-2 rounded-md text-md font-semibold transition-colors duration-300"
            >
              Blog
            </a>
            <button className="inline-flex items-center px-6 py-2 text-lg font-bold rounded-md text-gray-100 bg-green-400 hover:bg-green-500 transition-colors duration-300">
              Contact Us
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="p-3 text-gray-800 hover:text-gray-950 rounded-full focus:outline-2 focus:ring-1 focus:ring-offset-1 focus:ring-gray-100 transition-colors duration-300 "
            >
              {mobileMenu ? (
                <FontAwesomeIcon
                  icon={faTimes}
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faBars}
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>
      </div>
      {mobileMenu && (
        <div className="md:hidden bg-white">
          <div className="flex justify-center items-center h-full ">
            <div className="px-4 pt-4 pb-6 space-y-4 ">
              <a
                href="#"
                className="text-gray-800 hover:text-gray-600 block px-6 py-3 rounded-md text-center font-medium transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-gray-600 block px-6 py-3 rounded-md text-center font-medium transition-colors duration-300"
              >
                Features
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-gray-600 block px-6 py-3 rounded-md text-center font-medium transition-colors duration-300"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-gray-600 block px-6 py-3 rounded-md text-center font-medium transition-colors duration-300"
              >
                Blog
              </a>
              <div className="w-full">
                <button className="w-full text-lg text-center font-bold py-3 px-6 rounded-md text-gray-100 bg-green-400 hover:bg-green-500 transition-colors duration-300">
                  Have a chat
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
