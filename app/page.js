"use client";
import { useEffect } from "react";

import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Testimonials from "@/components/Testimonials";
import OpeningHours from "@/components/OpeningHours";


const Home = () => {
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };

    loadLocomotiveScroll();
  }, []);
  return (
    <div className="h-full overflow-x-hidden">
      <Hero />
      <Explore />
      <About />      
      <Menu />
      <OpeningHours />
      <Testimonials />
      {/* <div className="h-[4000px]"></div> */}
    </div>
  );
};

export default Home;
