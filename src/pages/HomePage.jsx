import React from "react";
import Navbar from "../components/common/Navbar";
import HomeHero from "../components/Home/HomeHero";
import HomeOffer from "../components/Home/HomeOffer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HomeHero />
      <HomeOffer />
    </>
  );
};

export default HomePage;
