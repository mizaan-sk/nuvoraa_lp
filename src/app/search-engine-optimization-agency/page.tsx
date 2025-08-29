import RingCursor from "@/components/RingCursor";
import SeoTop from "./components/SeoTop";
import SeoWorkflow from "./components/SeoWorkflow";
import SeoFaq from "./components/SeoFaq";
import Footer from "@/components/Footer";
import SeoWhyChoose from "./components/SeoWhyChoose";

const SeoHero: React.FC = () => {
  return (
    <>
      <section
        // id="1"
        className="bg-black text-[#EDE6DA]  overflow-hidden"
      >
        <RingCursor />
        <SeoTop />
        <SeoWorkflow/>
        <SeoFaq/>
        <SeoWhyChoose/>
        <Footer/>
      </section>
    </> 
  );
};

export default SeoHero;
