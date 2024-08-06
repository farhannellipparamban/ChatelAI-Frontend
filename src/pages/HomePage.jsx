import React from "react";
import Navbar from "../components/common/Navbar";
import HomeHero from "../components/Home/HomeHero";
import HomeOffer from "../components/Home/HomeOffer";
import HomeIntegrations from "../components/Home/HomeIntegrations";
import Footer from "../components/common/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HomeHero />
      <HomeOffer />
      <HomeIntegrations />
      <Footer />
    </>
  );
};

export default HomePage;
