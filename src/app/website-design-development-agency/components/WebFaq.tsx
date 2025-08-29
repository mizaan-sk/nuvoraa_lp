import GlobFaqSection from "@/components/GlobFaqSection";

const faqs = [
  {
    question: "What should I expect from a website development company?",
    answer:
      " A website development company handles design, coding, SEO setup, launch, and post-launch support -  all tailored to your brand and goals.",
  },
  {
    question: "Do you also offer web designing company services?",
    answer:
      "Yes, as a full-service web designing company, we design everything from branding and user interfaces to interactive experiences",
  },
  {
    question: " How long does a typical web development project take?",
    answer:
      "Depending on complexity, small sites can launch in 4–6 weeks, while custom builds may take 10–12 weeks. As a reliable website development agency, we stick to timelines.",
  },
  {
    question: "Are your websites SEO-friendly?",
    answer:
      " Absolutely. Every site we build is optimized for speed, performance, schema markup, responsive design, and basic SEO.",
  },
  {
    question: "Can you integrate third-party tools and custom APIs?",
    answer:
      "Yes, our agency for website development specializes in integrations like CRMs, analytics tools, payment gateways, and custom web applications.",
  },
  {
    question: "Do you support post-launch maintenance?",
    answer:
      "We offer hosting, updates, backups, audits, and ongoing optimizations , all included in our website development services.",
  },
  {
    question: "What makes you a top website development agency?",
    answer:
      "Our combination of bespoke design, technical excellence, transparent process, post-launch support, and ROI focus positions us among the top website development agencies.",
  },
];


export default function WebFaq() {
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
