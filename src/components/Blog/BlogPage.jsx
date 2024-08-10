import React from "react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  return (
    <>
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <p className="text-sm  text-gray-600 uppercase tracking-widest">
              LATEST
            </p>
          </div>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-7 tracking-wide">
              ChatelAI &amp; Resorts
            </h2>
            <p className="text-xl text-gray-700">
              Discover the latest updates in trends and ChatelAI
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-col w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row w-full mb-4 items-start">
          {/* Date Text */}
          <div className="w-full lg:w-auto lg:flex-shrink-0 mb-4 lg:mb-0 lg:mr-[100px] lg:ml-9 lg:sticky lg:top-4">
            <p className="text-black text-md font-medium border-l-4 border-orange-500 py-3 px-3">
              Feb 15, 2024
            </p>
          </div>

          {/* Blog Content */}
          <div className="flex flex-col w-full lg:flex-grow mr-24">
            <div className="relative">
              <img
                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-lg"
                src="/blog.avif"
                alt="ChatelAI blog post cover"
              />
            </div>
            <div className="mt-5">
              <h2 className="text-2xl sm:text-3xl font-serif text-gray-900">
                <Link
                  className="text-gray-900 hover:text-gray-600"
                   to="/blog/overview"
                  aria-label="Read about Language Models & AI: Elevating Hospitality Experiences"
                >
                  Language Models &amp; AI: Elevating Hospitality Experiences
                </Link>
              </h2>
            </div>
            <div className="mt-5">
              <p className="text-base sm:text-lg text-gray-700">
                Discover how LLM integration and AI analysis revolutionize guest
                experiences and operational efficiency, paving the way for
                seamless interactions, personalized service, and elevated
                satisfaction levels.
              </p>
            </div>

            <Link
              className="flex items-center mt-4 mb-8 text-green-500 hover:text-green-600"
               to="/blog/overview"
              aria-label="Read more about improved data security measures"
            >
              <p className="mr-2 mt-2 text-lg sm:text-xl font-semibold">
                Have a read
              </p>
              <div className="w-6 h-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-arrow-right text-orange-500"
                >
                  <path d="M14 5l7 7-7 7M21 12H3" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
