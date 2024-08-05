import React from "react";

const HomeHero = () => {
  return (
    <main className="bg-white relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 mb-10">
      <div
        className="absolute bg-gradient-to-b from-white via-orange-500 to-rose-800 opacity-40 rounded-full -z-1 backdrop-blur-md"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          height: "40vw",
          width: "30vw",
          maxWidth: "500px",
          maxHeight: "600px",
          filter: "blur(80px)",
        }}
      ></div>
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-serif sm:text-5xl lg:text-6xl font-medium text-black leading-tight mb-6">
            Enhance hospitality with{" "}
            <span className="block mt-3">Personalised AI suite</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Step into a transformative era of AI hospitality excellence{" "}
            <br className="hidden sm:inline" />
            Increase guest satisfaction and operational efficiency with us
          </p>
          <button className="mt-3 bg-green-400 text-white px-6 sm:px-8 py-2 sm:py-4 rounded-lg font-bold font-sans text-lg sm:text-lg hover:bg-green-500 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50">
            Have a chat
          </button>
        </div>

        <div className="container mx-auto px-8 -mt-3 font-sans ">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Curated Guest Dashboard */}
            <div className="bg-gray-100 p-7 border border-gray-200 rounded-lg shadow-md flex-1">
              <h2 className="text-xl font-semibold mb-6">
                Curated Guest Dashboard
              </h2>
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full mr-4">
                  <img
                    className="w-16 h-16 rounded-full"
                    src="/person1.avif"
                    alt="Person 1"
                  />
                </div>
                <div className="bg-gray-300 h-4 w-3/4 rounded-full"></div>
              </div>
              <ul className="space-y-1 my-8">
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
                  <span className="text-lg font-semibold font-sans text-gray-500 ">
                    Personal virtual LLM concierge
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
                  <span className="text-lg font-semibold font-sans text-gray-500 ">
                    Algorithm curated recommendations
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
                  <span className="text-lg font-semibold font-sans text-gray-500 ">
                    AI Planning & Arrangements
                  </span>
                </li>
              </ul>
              <div className="space-y-3 mb-2">
                <div className="bg-gray-300 h-3 w-full rounded-full"></div>
                <div className="bg-gray-300 h-3 w-full rounded-full"></div>
                <div className="bg-gray-300 h-3 w-full rounded-full"></div>
              </div>
            </div>

            {/* Social Automation */}
            <div className="bg-orange-50 p-7 border border-orange-100 shadow-gray-200 rounded-lg shadow-md flex-1">
              <h2 className="text-xl font-semibold mb-4">Social Automation</h2>

              <ul className="space-y-6 p-4">
                {[
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    viewBox="0 0 24 24"
                    color="rgb(255, 203, 143)"
                    style={{
                      userSelect: "none",
                      width: "50px",
                      height: "50px",
                      display: "inline-block",
                      fill: "rgb(255, 203, 143)",
                      flexShrink: 0,
                    }}
                  >
                    <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"></path>
                  </svg>,
                  <svg
                    width="50"
                    height="50"
                    viewBox="1 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="rgb(255, 203, 143)"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle cx="18" cy="6" r="1" fill="currentColor" />
                  </svg>,
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    viewBox="0 0 24 24"
                    color="rgb(255, 203, 143)"
                    style={{
                      userSelect: "none",
                      width: "50px",
                      height: "45px",
                      display: "inline-block",
                      fill: "rgb(255, 203, 143)",
                      flexShrink: 0,
                    }}
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path>
                  </svg>,
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    viewBox="0 0 24 24"
                    color="rgb(255, 203, 143)"
                    style={{
                      userSelect: "none",
                      width: "50px",
                      height: "45px",
                      display: "inline-block",
                      fill: "rgb(255, 203, 143)",
                      flexShrink: 0,
                    }}
                  >
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM7 9h2v2H7zm8 0h2v2h-2zm-4 0h2v2h-2z"></path>
                  </svg>,

                  <li class="flex items-center">
                    <div class="w-6 h-6 bg-orange-100 rounded-full mr-4 flex items-center justify-center border-orange-300 border"></div>
                  </li>,
                ].map((icon, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-8 h-8  rounded-full mr-4 flex items-center justify-center text-orange-500">
                      {icon}
                    </div>

                    <div className="bg-orange-200 h-3 w-3/4 rounded-full "></div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Real-time Guest Analysis */}
            <div className="bg-red-50 p-7 border border-rose-100 shadow-gray-200 rounded-lg shadow-md flex-1">
              <h2 className="text-xl font-semibold mb-6">
                Real time Guest Analysis
              </h2>

              <div className="mb-8 relative">
                {/* Horizontal dashed lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className={`border-b w-[85%] mx-auto ${
                        i === 1
                          ? "border-dashed border-rose-300 "
                          : "border-solid border-red-100"
                      }`}
                    ></div>
                  ))}
                </div>

                {/* Bar chart */}
                <div className="h-36 relative flex justify-evenly items-end">
                  {[95, 77, 65, 52, 90, 85, 72].map((height, i) => (
                    <div
                      key={i}
                      className="w-3 bg-red-300 rounded-t-full"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-end ">
                {/* Circular progress */}
                <div className="bg-rose-50 te px-6 py-3 rounded-lg border border-rose-200 ">
                  <div className="relative w-24 h-24">
                    <div className="absolute inset-0 rounded-full border-8 border-red-200"></div>
                    <svg className="w-24 h-24 rounded-full transform -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="44"
                        fill="transparent"
                        stroke="rgb(248, 113, 113)"
                        strokeWidth="8"
                        strokeDasharray="276.32"
                        strokeDashoffset="138.16"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-black">
                      50%
                    </div>
                  </div>
                </div>

                {/* Person images with bars */}
                <div className="bg-rose-50 te p-3 px-5 mr-9 rounded-lg border border-rose-200">
                  <div className="flex space-x-4 items-end">
                    {["/person3.avif", "/person4.avif", "/person2.avif"].map(
                      (src, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div
                            className="w-2 bg-red-200 rounded-t-full mb-1 relative"
                            style={{ height: "70px" }}
                          >
                            <div
                              className="w-2 bg-red-400 rounded-b-full absolute bottom-0"
                              style={{ height: `${[65, 40, 52][index]}%` }}
                            ></div>
                          </div>
                          <div className="w-6 h-6 rounded-full overflow-hidden bg-rose-300">
                            <img
                              src={src}
                              alt={`Person ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeHero;
