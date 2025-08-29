import React from "react";
import WebTop from "./components/WebTop";
import WebWorkflow from "./components/WebWorkFlow";
import WebWhyChoose from "./components/WebWhyChoose";
import WebFaq from "./components/WebFaq";
import Footer from "@/components/Footer";

const Page: React.FC = () => {
  return (
    <section className="bg-black text-[#EDE6DA] overflow-hidden">
      <WebTop />
      <WebWorkflow />
      <WebFaq />
      <WebWhyChoose />
      <Footer />
    </section>
  );
};

export default Page;
