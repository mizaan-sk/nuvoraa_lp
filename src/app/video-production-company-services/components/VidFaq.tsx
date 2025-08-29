import GlobFaqSection from "@/components/GlobFaqSection";

const faqs = [
  {
    question: "What video production services do you offer?",
    answer:
      "We provide comprehensive video production services, from brand films and commercials to social media clips and corporate AV.",
  },
  {
    question: "How long does production take?",
    answer:
      "Production typically ranges from 3 to 6 weeks, depending on the project scope and complexity.",
  },
  {
    question: "Are videos optimized for social?",
    answer:
      "Yes. As a modern video production company, we deliver platform-ready videos optimized for engagement on Instagram, LinkedIn, YouTube, and more.",
  },
  {
    question: "Do you work with internal teams or agencies?",
    answer:
      "Absolutely. We collaborate seamlessly with in-house teams, marketing agencies, or operate as your full-service video partner.",
  },
  {
    question: "Can I reuse footage across projects?",
    answer:
      "Of course. We deliver raw footage and edits that can be repurposed maximizing the value of your video production services.",
  },
  {
    question: "Do you handle animation and motion graphics?",
    answer:
      "Yes, our video production services include 2D, 3D animation, and motion graphics.",
  },
  {
    question: "Do you offer ongoing video content support?",
    answer:
      "Yes, we provide regular video production services for brands needing continuous content.",
  },
    {
    question: "Do you offer scriptwriting and storyboarding?",
    answer:
      "Yes, our video production services include complete creative direction and scriptwriting.",
  },
    {
    question: "How much do your video production services cost?",
    answer:
      " We offer customised pricing based on your project’s needs and budget.",
  },
    {
    question: "Do you work with small businesses as well?",
    answer:
      "Absolutely — our video production services cater to startups, SMEs, and large enterprises.",
  },
];


export default function VidFaq() {
  return (
    <GlobFaqSection
      id="3"
      title="Frequently Asked Questions"
      faqs={faqs}
      imageSrc="/images/faqgirl.webp"
      imageAlt="Illustration of girl asking questions"
    />
  );
}
