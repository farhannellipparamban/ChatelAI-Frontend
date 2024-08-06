import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-8 py-8">
        <div className="flex flex-wrap bg-blue-50 rounded-3xl p-4 sm:p-8 ">
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl font-serif mb-4 mt-8 sm:mt-24 text-gray-900">
              Stay ahead of the curve with us
            </h1>
            <p className="text-lg sm:text-xl mb-6 sm:mb-10 text-gray-700">
              Schedule a call with us to have all your queries answered <br />{" "}
              right away
            </p>
            <a
              href="https://calendly.com/chatelai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-base sm:text-lg bg-green-400 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-md hover:bg-green-500 transition duration-300"
            >
              Get started
            </a>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 relative h-64 sm:h-full border border-gray-400 rounded-lg overflow-hidden">
            <img
              src="/map.avif"
              alt="World Map"
              className="w-full h-full object-cover mt-10"
            />
            <div className="absolute inset-0">
              <div className="absolute bottom-56 left-2 bg-white rounded px-2.5 py-1 text-sm sm:text-md shadow-md flex items-center">
                <FaMapMarkerAlt className="text-gray-400 mr-1" />
                New York
              </div>
              <div className="absolute bottom-14 left-6 sm:left-14 bg-white rounded px-2.5 py-1 text-sm sm:text-md shadow-md flex items-center">
                <FaMapMarkerAlt className="text-gray-400 mr-1" />
                Brasilia
              </div>
              <div className="absolute bottom-28 left-24 sm:left-44 bg-white rounded px-2.5 py-1 text-sm sm:text-md shadow-md flex items-center">
                <FaMapMarkerAlt className="text-gray-400 mr-1" />
                Paris
              </div>
              <div className="absolute bottom-36 left-44 sm:left-[270px] bg-white rounded px-2.5 py-1 text-sm sm:text-md shadow-md flex items-center">
                <FaMapMarkerAlt className="text-gray-400 mr-1" />
                Athens
              </div>
              <div className="absolute bottom-44 right-6 sm:right-14 bg-white rounded px-2.5 py-1 text-sm sm:text-md shadow-md flex items-center">
                <FaMapMarkerAlt className="text-gray-400 mr-1" />
                Tokyo
              </div>
              <div className="absolute bottom-14 right-14 sm:right-24 bg-white rounded px-2.5 py-1 text-sm sm:text-md shadow-md flex items-center">
                <FaMapMarkerAlt className="text-gray-400 mr-1" />
                Mumbai
              </div>

              <div className="hidden sm:block absolute top-5 sm:top-16 right-8 sm:right-20 bg-white p-2 rounded">
                <div className="flex justify-between items-center mb-2.5">
                  <div className="flex items-center">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gray-200 rounded-full border border-gray-300 mr-0.5" />
                    <div className="w-12 sm:w-16 h-2 sm:h-2.5 bg-gray-300 rounded" />
                  </div>
                  <div className="flex items-center ml-4 sm:ml-7">
                    <div className="w-6 sm:w-9 h-1.5 sm:h-2 bg-gray-300 rounded mr-1" />
                    <div className="w-1 h-1.5 bg-gray-300 rounded" />
                  </div>
                </div>
                <div className="flex justify-between items-center mb-2.5">
                  <div className="flex items-center">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gray-200 rounded-full border border-gray-300 mr-0.5" />
                    <div className="w-12 sm:w-16 h-2 sm:h-2.5 bg-gray-300 rounded" />
                  </div>
                  <div className="flex items-center ml-4 sm:ml-7">
                    <div className="w-6 sm:w-9 h-1.5 sm:h-2 bg-gray-300 rounded mr-1" />
                    <div className="w-1 h-1.5 bg-gray-300 rounded" />
                  </div>
                </div>
                <div className="flex justify-between items-center mb-2.5">
                  <div className="flex items-center">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gray-200 rounded-full border border-gray-300 mr-0.5" />
                    <div className="w-12 sm:w-16 h-2 sm:h-2.5 bg-gray-300 rounded" />
                  </div>
                  <div className="flex items-center ml-4 sm:ml-7">
                    <div className="w-6 sm:w-9 h-1.5 sm:h-2 bg-gray-300 rounded mr-1" />
                    <div className="w-1 h-1.5 bg-gray-300 rounded" />
                  </div>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gray-200 rounded-full border border-gray-300 mr-0.5" />
                    <div className="w-12 sm:w-16 h-2 sm:h-2.5 bg-gray-300 rounded" />
                  </div>
                  <div className="flex items-center ml-4 sm:ml-7">
                    <div className="w-6 sm:w-9 h-1.5 sm:h-2 bg-gray-300 rounded mr-1" />
                    <div className="w-1 h-1.5 bg-gray-300 rounded" />
                  </div>
                </div>
              </div>
              <div className="hidden sm:block absolute top-2 left-8 sm:top-10 left-20 bg-white p-2 rounded">
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center">
                    <div className="w-1.5 sm:w-2.5 h-1.5 sm:h-2.5 bg-gray-200 rounded-full border border-gray-300 mr-0.5" />
                    <div className="w-8 sm:w-12 h-1.5 sm:h-1.5 bg-gray-300 rounded" />
                  </div>
                  <div className="flex items-center ml-4 sm:ml-4">
                    <div className="w-4 sm:w-7 h-1 sm:h-1.5 bg-gray-300 rounded mr-1" />
                    <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gray-300 rounded" />
                  </div>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center">
                    <div className="w-1.5 sm:w-2.5 h-1.5 sm:h-2.5 bg-gray-200 rounded-full border border-gray-300 mr-0.5" />
                    <div className="w-8 sm:w-12 h-1.5 sm:h-1.5 bg-gray-300 rounded" />
                  </div>
                  <div className="flex items-center ml-4 sm:ml-4">
                    <div className="w-4 sm:w-7 h-1 sm:h-1.5 bg-gray-300 rounded mr-1" />
                    <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gray-300 rounded" />
                  </div>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center">
                    <div className="w-1.5 sm:w-2.5 h-1.5 sm:h-2.5 bg-gray-200 rounded-full border border-gray-300 mr-0.5" />
                    <div className="w-8 sm:w-12 h-1.5 sm:h-1.5 bg-gray-300 rounded" />
                  </div>
                  <div className="flex items-center ml-4 sm:ml-4">
                    <div className="w-4 sm:w-7 h-1 sm:h-1.5 bg-gray-300 rounded mr-1" />
                    <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gray-300 rounded" />
                  </div>
                </div>
                <div className="flex justify-between items-center mb-0.5">
                  <div className="flex items-center">
                    <div className="w-1.5 sm:w-2.5 h-1.5 sm:h-2.5 bg-gray-200 rounded-full border border-gray-300 mr-0.5" />
                    <div className="w-8 sm:w-12 h-1.5 sm:h-1.5 bg-gray-300 rounded" />
                  </div>
                  <div className="flex items-center ml-4 sm:ml-4">
                    <div className="w-4 sm:w-7 h-1 sm:h-1.5 bg-gray-300 rounded mr-1" />
                    <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gray-300 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="flex flex-wrap justify-between items-center p-4 bg-gray-100">
        <div className="w-full sm:w-auto flex items-center mb-4 sm:mb-0">
          <div className="bg-red-100 p-2 rounded-lg mr-2">
            <svg
              className="w-6 h-6 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Email</p>
            <a
              href="mailto:contact@example.com"
              className="text-gray-600 hover:text-gray-800"
            >
              contact@chatelai.com
            </a>
          </div>
        </div>
        <div className="w-full sm:w-auto text-center sm:text-right">
          <a
            href="/privacy-policy"
            className="text-gray-600 hover:text-gray-800 block sm:inline-block"
          >
            Privacy & Policy
          </a>
          <p className="text-gray-500 text-sm mt-1 sm:mt-0">
          © 2024 ChatelAI. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
