import React from "react";

const HomeIntegrations = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8 sm:py-16 mt-10 sm:mt-28">
        <p className="text-center text-xs sm:text-sm uppercase tracking-wider text-gray-500 mb-3 sm:mb-5">
          STAY CONNECTED
        </p>
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-serif mb-10 sm:mb-20 text-gray-900">
          Seamless integrations
        </h1>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-8 md:space-x-16 lg:space-x-32 xl:space-x-64">
          <div className="w-full sm:w-1/2 md:w-2/5 lg:w-1/3 xl:w-1/4">
            <img
              src="/phone1.avif"
              alt="WhatsApp Interface"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="w-full sm:w-1/2 md:w-2/5 lg:w-1/3 xl:w-1/4">
            <img
              src="/phone2.avif"
              alt="Phone Call Interface"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="text-center mt-28 sm:mt-12">
          <button className="bg-gray-900 text-white font-semibold text-base sm:text-lg py-3 px-6 sm:py-3.5 sm:px-8 rounded hover:bg-gray-800 transition duration-300 mb-16 sm:mb-28">
            Learn More
          </button>
        </div>
      </div>

      <div className="relative w-full max-w-full px-4 sm:px-8 md:px-16 py-60 bg-pink-50 overflow-hidden -mt-16 mb-6">
        <div
          className="absolute -inset-x-40 top-0 h-44 bg-white"
          style={{
            borderBottomLeftRadius: "50% 100%",
            borderBottomRightRadius: "50% 100%",
          }}
        ></div>
        <div
          className="absolute -inset-x-40 bottom-0 h-32 bg-white"
          style={{
            borderTopLeftRadius: "50% 100%",
            borderTopRightRadius: "50% 100%",
          }}
        ></div>
        <div className="relative z-10">
          <div className="text-center mb-16 mt-7">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-6">
              ChatelAI FOR YOU
            </p>
            <h3 className="text-4xl sm:text-5xl font-serif mb-4 text-gray-800">
              A platform to help you innovate
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-green-200 rounded-lg p-8">
            <h4 className="text-4xl font-serif mb-3 text-gray-800">AI ready</h4>
            <p className="text-md text-gray-600 mb-10">
              We empower you with AI to transform your resort into something
              truly extraordinary
            </p>
            <div className="grid grid-cols-5 gap-2">
              {[...Array(25)].map((_, index) => (
                <div key={index} className="w-full flex items-center space-y-2">
                  <div className="w-full h-4 bg-green-400 rounded-full -mb-2" />
                  {index % 2 === 0 && (
                    <div className="w-12 h-6 bg-green-400 rounded-full ml-2" />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-sky-200 p-8 rounded-lg">
            <h4 className="text-4xl font-serif mb-3 text-gray-800">
              Social Integrations
            </h4>
            <p className="text-gray-600 mb-14 text-md">
              We work with a variety of social platforms to cater to all your
              customers inquiries
            </p>
            <div className=" -mt-3.5 ">
              <div className="mb-16">
                <div className="flex flex-col  flex-shrink-0 mx-auto justify-center items-center ">
                  <p className=" text-[15px] font-medium leading-[430%] px-1 rounded-lg border border-gray-300 tracking-[-0.02px] text-[#00da91] bg-white">
                    ChatelAI
                  </p>
                </div>
              </div>
              <div className="flex gap-[61px]">
                <div className="justify-start items-start mt-3 bg-orange-100 p-1 border border-white rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    focusable="false"
                    className="w-14 h-14 inline-block fill-current text-[#59bef8] flex-shrink-0"
                  >
                    <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>
                  </svg>
                </div>
                <div className="justify-center items-center mt-3 bg-orange-100  px-1 border border-orange-100 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    focusable="false"
                    className="w-14 h-16 inline-block fill-current text-[#15b022] flex-shrink-0"
                  >
                    <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></path>
                  </svg>
                </div>
                <div className="justify-end items-end mt-4 bg-rose-100 p-1 border border-rose-100 rounded-lg ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    focusable="false"
                    className="w-14 h-14 inline-block fill-current text-[#fd52e9] flex-shrink-0"
                  >
                    <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-purple-100 p-8 rounded-xl">
            <h4 className="text-4xl font-serif mb-3 text-gray-800">
              Multi regional
            </h4>
            <p className="text-gray-600 mb-14 text-md">
              We are well diverse and work with resorts all around the globe
            </p>
            <div className="mt-4">
              <img
                src="/MapCard.png"
                alt="World Map"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeIntegrations;
