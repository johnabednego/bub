import React from "react";
import Explore from "../../components/Home/Explore/Explore";
import Hero from "../../components/Home/HeroSection/Hero";
import Why from "../../components/Home/WhyChooseUs/Why";
import OurPlanner from "../../components/Home/OurPlanner/OurPlanner";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <>
      <Hero />
      <Explore/>
       <Why/> 
        <OurPlanner/>
       <Footer/>   
    </>
  );
};

export default Home;
