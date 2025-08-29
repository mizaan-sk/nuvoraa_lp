import Image from "next/image";

interface MarketingStepProps {
  title: string;
  content: React.ReactNode;
  image: string;
  reverse?: boolean;
  alt: string;
}

export default function MarketingStep({
  alt,
  title,
  content,
  image,
  reverse,
}: MarketingStepProps) {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "" : "md:flex-row-reverse"
      } items-center gap-6 md:gap-12 my-7 md:my-20 relative`}
    >
      <div className="w-full md:w-1/2 relative">
        {/* Black circle positioned dynamically */}
        <div
          className={`hidden md:block absolute -top-10 ${
            reverse ? "left-[-30px]" : "right-[-30px]"
          } w-20 h-20 bg-[#3f4243] rounded-full z-0`}
        />
        {/* Optimized Image with responsive sizes */}
        <Image
          src={image}
          alt={alt}
          width={400}
          height={300}
          quality={75}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
          className="relative z-10 w-full h-auto object-cover rounded-xl filter grayscale sepia-[0.1] contrast-[0.9] brightness-[1.01] transition duration-500 hover:grayscale-0 hover:sepia-[0.08] hover:contrast-[1.02] hover:brightness-[0.99]"
          priority={false} // Set to true only for above-the-fold images
        />
      </div>
      <div className="w-full md:w-1/2 z-10">
        <h3 className="text-[23px]/7 md:text-[31px]/8 font-medium mb-4 uppercase tracking-wide text-black">
          {title}
        </h3>
        <div className="text-[#514E4A] space-y-2">{content}</div>
      </div>
    </div>
  );
}