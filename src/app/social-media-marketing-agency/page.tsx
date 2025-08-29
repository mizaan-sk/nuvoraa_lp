import RingCursor from "@/components/RingCursor";
import SocialTop from "./components/SocialTop";
import SmWorkflow from "./components/SmWorkflow";
import SocialWhyChoose from "./components/SocialWhyChoose";
import Footer from "@/components/Footer";
import SmFaqSection from "./components/SmFaqSection";


const SocialMediaHero: React.FC = () => {
  return (
    <>
      <section
        // id="1"
        className="bg-black text-[#EDE6DA]  overflow-hidden"
      >
        <RingCursor />
      <SocialTop/>
      <SmWorkflow/>
      <SmFaqSection/>
      <SocialWhyChoose/>
      <Footer/>
      </section>
    </>
  );
};

export default SocialMediaHero;
