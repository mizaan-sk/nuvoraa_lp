import RingCursor from "@/components/RingCursor";
import React from "react";
import PerforTop from "./components/PerforTop";
import PmWorkflow from "./components/PmWorkflow";
import FaqSection from "./components/FaqSection";
import RunAds from "./components/RunAds";
import WhyChoose from "./components/WhyChoose";
import Footer from "@/components/Footer";

const PerformanceMarketingHero: React.FC = () => {
  return (
    <>
      <section
        // id="1"
        className="bg-black text-[#EDE6DA]  overflow-hidden"
      >
        <RingCursor />
         <PerforTop/>
         <PmWorkflow/>
         <FaqSection/>
         <RunAds/>
         <WhyChoose/>
         <Footer/>
      </section>
    </>
  );
};

export default PerformanceMarketingHero;
