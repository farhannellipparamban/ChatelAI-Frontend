import React from "react";

const FeatureHero = () => {
  return (
    <div className="relative bg-pink-50 pb-20 md:pb-2">
      <div className="flex flex-col md:flex-row justify-between items-center p-8 md:p-16">
        <div className="w-full md:w-1/3 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-xs md:text-sm text-gray-600 uppercase mb-4 md:mb-6 mt-4 md:mt-10 tracking-widest">
            Operational Efficiency
          </h2>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6 md:mb-8 tracking-wide">
            Be ahead with our services
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-9">
            Utilize our AI suites to anticipate guest needs, streamline
            operations, and elevate your hotel's performance to new heights.
          </p>
          <button className="px-6 md:px-8 py-2 md:py-3 bg-green-500 text-white text-base md:text-lg font-medium rounded hover:bg-green-600 transition duration-300">
            Learn More
          </button>
        </div>
        <div className="relative w-full md:w-1/2 mt-4 md:mt-6">
          <img
            src="/Feature.avif"
            alt="Activity Chart"
            className="w-full h-auto md:max-w-none lg:max-w-full rounded-b-xl md:rounded-b-2xl lg:rounded-b-3xl"
          />
        </div>
      </div>
      <div
        className="absolute -inset-x-40 -bottom-32 h-52 bg-pink-50 "
        style={{
            borderBottomLeftRadius: "50% 100%",
            borderBottomRightRadius: "50% 100%",
        }}
      ></div>
    </div>
  );
};

export default FeatureHero;
