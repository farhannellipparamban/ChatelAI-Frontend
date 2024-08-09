import React, { useState } from "react";

const FeatureHero = () => {
  const [activeSection, setActiveSection] = useState("operations");

  const sections = [
    { id: "operations", title: "Operations" },
    { id: "integration", title: "Integration" },
    { id: "guests", title: "Guests" },
    { id: "vision", title: "Vision" },
  ];

  return (
    <>
      <div className="relative bg-pink-50">
        <div className="flex flex-col md:flex-row justify-between items-center p-6 sm:p-8 md:p-12 lg:p-16">
          <div className="w-full md:w-1/3 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-xs sm:text-sm text-gray-600 uppercase mb-3 sm:mb-4 md:mb-6 mt-2 sm:mt-4 md:mt-10 tracking-widest">
              Operational Efficiency
            </h2>
            <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-gray-900 mb-4 sm:mb-6 md:mb-8 tracking-wide">
              Be ahead with our services
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 md:mb-9">
              Utilize our AI suites to anticipate guest needs, streamline
              operations, and elevate your hotel's performance to new heights.
            </p>
            <button className="px-5 sm:px-6 md:px-8 py-2 md:py-3 bg-green-500 text-white text-sm sm:text-base md:text-lg font-medium rounded hover:bg-green-600 transition duration-300">
              Learn More
            </button>
          </div>
          <div className="relative w-full md:w-1/2 mt-6 md:mt-0">
            <img
              src="/Feature.avif"
              alt="Activity Chart"
              className="w-full h-auto rounded-b-lg md:rounded-b-xl lg:rounded-b-2xl"
            />
          </div>
        </div>
        <div className="relative w-full h-full px-4 sm:px-8 md:px-16 py-16 lg:py-20 bg-white overflow-hidden">
          <div
            className="absolute -inset-x-40 h-52 bg-pink-50 -mt-36 sm:-mt-40"
            style={{
              borderBottomLeftRadius: "50% 100%",
              borderBottomRightRadius: "50% 100%",
            }}
          ></div>
        </div>
      </div>

      {/* OperationsSection */}
      <div className="flex flex-col min-h-screen bg-white">
        <div className="flex flex-col md:flex-row">
          <nav className="hidden md:block w-full md:w-1/6 pt-8 md:pt-12 px-6 md:px-[68px]">
            {sections.map((section) => (
              <div
                key={section.id}
                className={`border-l-4 ${
                  activeSection === section.id
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
              >
                <a
                  href={`#${section.id}`}
                  className="block py-3 px-3 text-gray-900"
                  onClick={() => setActiveSection(section.id)}
                >
                  <p>{section.title}</p>
                </a>
              </div>
            ))}
          </nav>

          <main className="w-full md:w-4/5 mt-8 md:mt-12 px-6 md:px-0 md:pr-5">
            <section id="operations" className="mb-14">
              <h2 className="text-2xl md:text-3xl font-serif mb-5 md:mb-6 text-gray-900">
                Optimize your operations
              </h2>
              <p className="mb-6 md:mb-4 text-base md:text-lg text-gray-700">
                At ChatelAI, we understand the importance of truly understanding
                your guests and their needs. That's why our platform goes beyond
                traditional methods to provide in-depth insights into guest
                preferences and behaviors.
              </p>
              <p className="mb-5 md:mb-4 text-base md:text-lg text-gray-700">
                Through our AI-generated visual data summaries, you can easily
                analyze guest trends and sentiment in real-time. Whether it's
                identifying popular amenities or recognizing emerging
                preferences, our platform empowers you to stay ahead of guest
                expectations.
              </p>
              <p className="mb-8 md:mb-8 text-base md:text-lg text-gray-700">
                We're committed to helping you understand and respond to guest
                needs and operational challenges. With our advanced AI
                solutions, you can optimize your operations like never before,
                ensuring unparalleled guest satisfaction and success for your
                resort.
              </p>

              <a
                href="#"
                className="inline-block px-6 py-2 text-base md:text-lg font-semibold text-white bg-green-500 rounded hover:bg-green-600 transition duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Using Now
              </a>
            </section>

            <section id="integrations" className="mb-14">
              <h2 className="text-2xl md:text-3xl font-serif mb-5 md:mb-6 text-gray-900">
                Integrations
              </h2>
              <p className="mb-5 md:mb-4 text-base md:text-lg text-gray-700">
                Integrating LLM with WhatsApp and phone calls transforms the
                guest experience at hotels by providing a seamless and
                personalized concierge service. Through these widely-used
                communication channels, guests can effortlessly connect with
                your resort to fulfill their needs and preferences in real-time.
              </p>
              <p className="mb-5 md:mb-4 text-base md:text-lg text-gray-700">
                Whether it's querying for pool opening hours or requesting extra
                amenities for their room, guests can simply send a message or
                make a call to their virtual concierge, knowing that their
                requests will be handled promptly and efficiently. This level of
                convenience and accessibility adds tremendous value to the hotel
                experience, enhancing guest satisfaction and loyalty.
              </p>
              <p className="mb-3 md:mb-4 text-base md:text-lg text-gray-700">
                By offering this personalized concierge service, hotels can
                differentiate themselves in a competitive market, ensuring that
                each guest's stay is memorable and hassle-free.
              </p>

              <hr className="mt-16 md:mt-12 border-t-1 border-gray-300" />
            </section>

            <section id="guests" className="mb-14">
              <h2 className="text-2xl md:text-3xl font-serif mb-5 md:mb-6 text-gray-900">
                Elevated Guest Experience
              </h2>
              <p className="mb-6 md:mb-5 text-base md:text-lg text-gray-700">
                Our advanced AI algorithms take personalized hospitality to new
                heights, ensuring that every guest feels valued and understood.
                With our platform, guests enjoy a seamless and tailored
                experience from start to finish.
              </p>
              <p className="mb-6 md:mb-6 text-base md:text-lg text-gray-700">
                From personalized recommendations to effortless planning and
                arrangements, we anticipate their needs. We ensure they have
                everything they need at their fingertips, from choosing the
                perfect dining spot to planning their next adventure.
              </p>
              <p className="mb-3 md:mb-4 text-base md:text-lg text-gray-700">
                Through real-time guest analysis, we continuously adapt to
                preferences, ensuring that each interaction exceeds
                expectations. Say goodbye to one-size-fits-all approaches, with
                us every guest receives the VIP treatment they deserve. Elevate
                your resort's reputation as a beacon of luxury and hospitality
                with ChatelAI, where every guest is treated to a truly
                unforgettable stay.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-10">
                <div className="bg-blue-50 p-4 md:p-5 rounded-lg">
                  <img
                    src="/FeatureIntuitive1.avif"
                    alt=""
                    className="mb-3 md:mb-4 pr-2 md:pr-7"
                  />
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    Intuitive Management
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    Effortlessly visualise and prioritize your operations with
                    our user-friendly interface, ensuring a seamless and
                    efficient management experience.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 md:p-5 rounded-lg">
                  <img
                    src="/FeatureIntuitive2.avif"
                    alt=""
                    className="mb-3 md:mb-4 pr-2 md:pr-6"
                  />
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    Real time informatics
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    Stay ahead of the curve with instantaneous data insights for
                    optimal decision-making.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 md:p-5 rounded-lg">
                  <img
                    src="/FeatureIntuitive3.avif"
                    alt=""
                    className="mb-3 md:mb-4 pr-2 md:pr-6"
                  />
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    Instant Performance Analytics
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    Gain valuable insights into your resort's operations in just
                    one click. Be it ad campaigns or guest sentiments.
                  </p>
                </div>
              </div>
              <hr className="mt-16 md:mt-12 border-t-1 border-gray-300" />
            </section>

            <section id="vision" className="mb-16">
              <h2 className="text-2xl md:text-3xl font-serif mb-5 md:mb-6 text-gray-900">
                Vision
              </h2>
              <p className="mb-6 md:mb-4 text-base md:text-lg text-gray-700">
                We are driven by a vision of reshaping the landscape of
                hospitality through innovative AI suites tailored specifically
                for hotels and resorts. We envision a future where technology
                seamlessly blends with human touch, elevating guest experiences
                to unprecedented levels of satisfaction and delight.
              </p>
              <p className="mb-6 md:mb-4 text-base md:text-lg text-gray-700">
                Our mission is to empower our partners with transformative
                solutions that optimize every angle of their operations. By
                harnessing the power of artificial intelligence, we aim not only
                to meet but exceed expectations, fostering enduring guest
                loyalty and driving sustainable growth for our partners.
              </p>
              <p className="mb-3 md:mb-4 text-base md:text-lg text-gray-700">
                In this vision, our AI suites serve as the cornerstone of
                innovation, enabling hotel and resort owners to adapt and thrive
                in an ever-evolving industry landscape, setting new standards of
                excellence along the way.
              </p>
              <hr className="mt-16 md:mt-12 border-t-1 border-gray-300" />
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default FeatureHero;
