import GlobFaqSection from "@/components/GlobFaqSection";

const faqs = [
  {
    question: "What is a Search Engine Optimisation agency?",
    answer:
      "A Search Engine Optimisation agency specializes in improving your website’s visibility in search engines like Google. They offer SEO services such as audits, keyword strategy, content optimisation, technical fixes, and link building.",
  },
  {
    question: "How is SEO different from paid marketing?",
    answer:
      "SEO provides long-term, sustainable traffic by optimizing for organic rankings, whereas paid ads deliver immediate reach at a cost. A great SEO agency combines both but focuses on building lasting authority with SEO services.",
  },
  {
    question: "How long until we see results?",
    answer:
      "Organic SEO typically shows results in 3–6 months. Initial gains may appear sooner in low‑competition niches. Paid campaigns (PPC) deliver faster, but our SEO optimisation agency ensures long-term visibility.",
  },
  {
    question: "How much do your SEO services cost?",
    answer:
      "Costs vary based on your scope: technical improvements, content scale, backlink work, etc. We offer tiered plans and custom packages. As one of the best SEO companies, Nuvoraa provides transparent pricing tied to outcomes.",
  },
  {
    question: "Can you guarantee #1 rankings?",
    answer:
      "No credible SEO agency guarantees top spots - Google’s algorithms are dynamic. But our SEO services focus on proven techniques that drive sustainable ranking gains and measurable ROI.",
  },
  {
    question: "Do you offer local SEO?",
    answer:
      "Yes. Our SEO agency includes local optimisation: GMB setup, local citations, geo-targeted content, and review strategy to boost your visibility in map and localized search results.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "Our Search Engine Optimisation agency works across e-commerce, SaaS, finance, healthcare, professional services you name it. Our SEO services are industry-agnostic and results-driven.",
  },
  {
    question: "How do I choose the best SEO firm?",
    answer:
      "Look for transparency, reporting, technical and content capabilities, ethical link building, and proven results. As a full-service SEO optimisation agency, Nuvoraa ticks all these boxes.",
  },
  {
    question: "Can we integrate SEO with other marketing channels?",
    answer:
      "Absolutely. We integrate SEO services with social, PPC, email, UX, and analytics  ensuring your growth engine is seamless and collaborative.",
  },
  {
    question: "How do you measure the success of an SEO campaign?",
    answer:
      "We focus on what matters  organic traffic, keyword rankings, leads, and conversions. You’ll get clear monthly reports that show how our SEO efforts are helping your business grow.",
  },
];


export default function SeoFaq() {
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
