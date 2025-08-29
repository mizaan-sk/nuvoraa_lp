import Footer from "@/components/Footer";
import RingCursor from "@/components/RingCursor";
import React from "react";
import VidTop from "./components/VidTop";
import VidWorkflow from "./components/VidWorkFlow";
import VidFaq from "./components/VidFaq";
import VidWhyChoose from "./components/VidWhyChoose";

const VideoProductionHero: React.FC = () => {
  return (
    <>
      <section
        className="bg-black text-[#EDE6DA] overflow-hidden"
      >
        <RingCursor />
        <VidTop/>
        <VidWorkflow/>
        <VidFaq/>
        <VidWhyChoose/>
        <Footer/>
      </section>
    </>
  );
};

export default VideoProductionHero;
