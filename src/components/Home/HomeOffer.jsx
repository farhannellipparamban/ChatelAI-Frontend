import React, { useState } from "react";

const HomeOffer = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 0,
      title: "Hotel Management",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="w-7 h-7 text-blue-600"
        >
          <path d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40ZM48,56H208a8,8,0,0,1,8,8v80H40V64A8,8,0,0,1,48,56ZM208,184H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z" />
        </svg>
      ),
      image: "/dashboard.avif",
      heading: "Understand your operations  and guest preferences",
      description:
        "Harness the power of our platform to seamlessly integrate AI for swift analysis and visualization. Unlock quick insights and streamline inquiries",
      points: [
        "AI-generated visual data summaries",
        "Operational analysis query LLM Model",
        "Know your guests sentiment and needs",
        "One stop for all your operational statistics",
      ],
    },
    {
      id: 1,
      title: "Social Automation",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="w-7 h-7 text-blue-600"
        >
          <path d="M168,112a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,112Zm-8,24H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm72-12A100.11,100.11,0,0,1,132,224H47.67A15.69,15.69,0,0,1,32,208.33V124a100,100,0,0,1,200,0Zm-16,0a84,84,0,0,0-168,0v84h84A84.09,84.09,0,0,0,216,124Z" />
        </svg>
      ),
      image: "/phoneChat.avif",
      heading: "Automate your social media",
      description:
        "With LLM generated automated responses and engaging chats across platforms like WhatsApp, your brand stays connected effortlessly",
      points: [
        "Choose from various social platforms",
        "Insights visualization on guests queries",
        "Choice to provide additional context to AI",
        "LLM attends to user inquiries with instant responses",
      ],
    },
    {
      id: 2,
      title: "AI Marketing Automation",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="w-7 h-7 -ml-10 text-blue-600"
        >
          <path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.65,71.65,0,0,0,27.64,56.3A32,32,0,0,1,96,186v6h64v-6a32.15,32.15,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Zm-16.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z" />
        </svg>
      ),
      image: "/statistics.avif",
      heading: "AI generated marketing strategy",
      description:
        "Transform your marketing strategy with AI generations. LLMs craft automated marketing materials tailored to your hotel's promotions & guests' tastes",
      points: [
        "Scalable personalized marketing",
        "Integrated campaign management",
        "LLM crafts latest hotel promotional materials",
        "AI tailors unique deals and content for each guest",
      ],
    },
    {
      id: 3,
      title: "Guest Experience",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="w-7 h-7 text-blue-600"
        >
          <path d="M253.66,133.66l-24,24a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L216,132.69V128A88,88,0,0,0,56.49,76.67a8,8,0,0,1-13-9.34A104,104,0,0,1,232,128v4.69l10.34-10.35a8,8,0,0,1,11.32,11.32Zm-41.18,55A104,104,0,0,1,24,128v-4.69L13.66,133.66A8,8,0,0,1,2.34,122.34l24-24a8,8,0,0,1,11.32,0l24,24a8,8,0,0,1-11.32,11.32L40,123.31V128a87.62,87.62,0,0,0,22.24,58.41A79.66,79.66,0,0,1,98.3,157.66a48,48,0,1,1,59.4,0,79.59,79.59,0,0,1,36.08,28.78,89.68,89.68,0,0,0,5.71-7.22,8,8,0,0,1,13,9.34A104.48,104.48,0,0,1,212.48,188.66ZM128,144a32,32,0,1,0,32,32A32.06,32.06,0,0,0,128,144Z" />
        </svg>
      ),
      image: "/GustProfile.avif",
      heading: "Provide an exclusive personalized experience",
      description:
        "From tailored food options to leisure activities, our AI agent curates everything for your guest. Learning from their habits, it provides personalized recommendations that resonate with their likings",
      points: [
        "Personal virtual LLM Concierge",
        "Access hotel amenities in one place",
        "Algorithm curated recommendations",
        "Assistance with arrangements and planning",
      ],
    },
  ];

  return (
    <div className=" min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
            What We Offer
          </p>
          <h2 className="mt-6 text-4xl font-serif text-gray-900 sm:text-5xl lg:text-5xl">
            Simply a fresh perspective
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 p-6 mb-20 ">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`flex items-center px-4 py-6 m-4 relative text-center ${
                activeFeature === feature.id
                  ? "border-green-500 border-b text-white"
                  : "bg-white  "
              }`}
              onClick={() => setActiveFeature(feature.id)}
            >
              <div className="flex justify-center mr-3">{feature.icon}</div>

              <h3 className="text-xl font-semibold text-gray-400">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg  overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 md:w-1/2">
              <img
                className="h-full w-full  p-8"
                src={features[activeFeature].image}
                alt={features[activeFeature].title}
              />
            </div>
            <div className="p-8 md:w-1/2 -ml-5">
              <h1 className="text-4xl font-serif text-gray-900 mb-7 -mt-8 ">
                {features[activeFeature].heading}
              </h1>
              <p className="text-gray-700 mb-6 text-xl">
                {features[activeFeature].description}
              </p>
              <ul className="space-y-3">
                {features[activeFeature].points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-950 bg-gray-200 rounded-full"
                  >
                    <div className="w-5 h-5 rounded-full overflow-hidden bg-black ml-3">
                      <svg
                        className="h-3 w-3 text-white "
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        viewBox="0 0 15 18"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-lg p-2">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOffer;
