import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import SigemPreview from "../components/SigemPreview";
import PriceList from "../components/PriceList";

function Home() {
  return (
    <>
      <Hero />
      <PriceList />
      <SigemPreview />
      <Services />
    </>
  );
}

export default Home;
