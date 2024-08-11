import React, { useState } from "react";

const PremiumPlan = () => {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const getProPrice = () => {
    return billingPeriod === "3months" ? 361 : 389;
  };

  return (
    <main className="relative overflow-hidden">
      {/* Top half with pink background */}
      <div className="bg-pink-50 h-1/2 absolute inset-0 top-0 z-0"></div>
      <div
        className="absolute -inset-x-10 bottom-1/2 h-20 border-t border-pink-300 bg-white z-0"
        style={{
          borderTopLeftRadius: "50% 100%",
          borderTopRightRadius: "50% 100%",
        }}
      ></div>
      {/* Content of the page */}
      <div className="relative z-10 container mx-auto px-4 py-28">
        <div className="text-center mb-12">
          <p className="text-xs sm:text-sm md:text-base text-gray-500 uppercase mb-5 tracking-widest">
            TRUSTED BY MANY
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800 mb-8">
            Pricing plans
          </h2>
        </div>

        {/* Billing Period Buttons */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <div className="px-2.5">
              <button
                type="button"
                className={`px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg font-semibold rounded transition-colors duration-300 ${
                  billingPeriod === "monthly"
                    ? "text-white bg-gray-900"
                    : "text-gray-800 bg-pink-50 border border-gray-400"
                }`}
                onClick={() => setBillingPeriod("monthly")}
              >
                Monthly
              </button>
            </div>

            <button
              type="button"
              className={`px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg font-semibold rounded transition-colors duration-300 ${
                billingPeriod === "3months"
                  ? "text-white bg-gray-900"
                  : "text-gray-800 bg-pink-50 border border-gray-400"
              }`}
              onClick={() => setBillingPeriod("3months")}
            >
              3 Months
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-wrap px-4">
          {/* Discover Plan */}
          <div className="w-full md:w-1/3 shadow-sm rounded-l-lg mb-8 border border-gray-300 relative z-20">
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="p-6 sm:p-8">
                <h3 className="text-md sm:text-md font-semibold text-gray-800 mb-2.5">
                  Discover
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl sm:text-5xl font-semibold text-gray-900">
                    Free
                  </span>
                  <span className="ml-2 text-sm sm:text-lg text-gray-500 font-semibold">
                    / 5 days
                  </span>
                </div>
                <p className="text-gray-600 text-sm sm:text-base mb-8">
                  Experience ChatelAI to the fullest with features curated to
                  your resort
                </p>
                <ul className="space-y-4 text-sm sm:text-base relative pb-11">
                  {[
                    "Premium Plan Included",
                    "Enjoy Complimentary Access",
                    "Live Customer Care",
                    "No Commitment Period",
                    "Custom Trained LLM Model",
                    "Guest Personal LLM Concierge",
                  ].map((feature, index) => (
                    <li
                      key={index}
                      className="relative flex items-center -mt-3"
                    >
                      <div className="relative flex items-center space-x-1 space-y-5">
                        <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8">
                          <div className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-gray-300 rounded-full flex items-center justify-center mt-5">
                            <svg
                              className="w-3 sm:w-4 h-3 sm:h-4 text-red-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                        <span className="text-gray-800">{feature}</span>
                      </div>
                      <div className="absolute -bottom-4 w-full border-t  border-gray-300"></div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* PRO Plan */}
          <div className="w-full md:w-1/3 mb-8 shadow-sm border border-gray-300 relative z-20">
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="p-6 sm:p-8">
                <h3 className="text-md sm:text-md font-semibold text-gray-800 mb-2.5">
                  PRO
                </h3>
                <div className="flex items-baseline mb-4">
                  <span
                    className={`text-4xl sm:text-5xl font-bold text-gray-900 transition-transform duration-300 ${
                      billingPeriod === "3months" ? "scale-110" : "scale-100"
                    }`}
                  >
                    ${getProPrice()}
                  </span>
                  <span className="ml-2 text-sm sm:text-lg text-gray-500 font-semibold">
                    /month
                  </span>
                </div>
                <p className="text-gray-600 text-sm sm:text-base mb-8">
                  Automate social media, analyze engagement, boost your online
                  presence
                </p>
                <ul className="space-y-4 text-sm sm:text-base pb-1">
                  {[
                    "Dedicated Resort Trained LLM Model",
                    "Social Media Automation",
                    "Guest Queries Analysis",
                    "Whatsapp LLM Responder",
                    "Real Time Sentiment Analysis Insights",
                    "Connect up to 3 Messaging Platforms",
                  ].map((feature, index) => (
                    <li
                      key={index}
                      className="relative flex items-center -mt-3"
                    >
                      {/* Container for tick mark and underline */}
                      <div className="relative flex items-center space-x-1 space-y-5">
                        <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8">
                          <div className="relative flex items-center justify-center w-full h-full">
                            <div className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-gray-300 rounded-full flex items-center justify-center mt-5">
                              <svg
                                className="w-3 sm:w-4 h-3 sm:h-4 text-red-400 relative"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <span className="text-gray-800">{feature}</span>
                      </div>
                      {/* Underline */}
                      <div className="absolute -bottom-4 w-full border-t  border-gray-300"></div>
                    </li>
                  ))}
                  <li className="relative flex items-center space-x-1 space-y-4">
                    <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 ">
                      <div className="relative flex items-center justify-center w-full h-full">
                        <div className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-gray-300 rounded-full flex items-center justify-center mt-4">
                          <svg
                            className="w-4 sm:w-5 h-2.5 sm:h-3.5 text-gray-300 relative"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <span className="text-gray-400 ">Premium Plan</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* PREMIUM Plan */}
          <div className="w-full md:w-1/3 mb-8 shadow-sm border rounded-r-lg border-gray-300 relative z-20">
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="p-6 sm:p-8 mt-8">
                <h3 className="text-md sm:text-md font-semibold text-gray-800 mb-2.5">
                  PREMIUM
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl sm:text-5xl font-semibold text-gray-900">
                    Custom
                  </span>
                  <span className="ml-2 text-sm sm:text-lg text-gray-500 font-semibold">
                    request
                  </span>
                </div>
                <p className="text-gray-600 text-sm sm:text-lg mb-8">
                  Request any bespoke feature and we'll custom build them for
                  you
                </p>
                <ul className="space-y-4 text-sm sm:text-base relative pb-60">
                  {[
                    "Pro Plan",
                    "Request bespoke features",
                    "Custom AI solutions",
                  ].map((feature, index) => (
                    <li
                      key={index}
                      className="relative flex items-center -mt-3"
                    >
                      <div className="relative flex items-center space-x-1 space-y-5 ">
                        <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8">
                          <div className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-gray-300 rounded-full flex items-center justify-center mt-5">
                            <svg
                              className="w-3 sm:w-4 h-3 sm:h-4 text-red-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                        <span className="text-gray-800">{feature}</span>
                      </div>
                      <div className="absolute -bottom-4 w-full border-t  border-gray-300"></div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PremiumPlan;
