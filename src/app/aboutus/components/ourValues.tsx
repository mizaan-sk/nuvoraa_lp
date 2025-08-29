import React from 'react';

export default function OurValues() {
  return (
    <section id='1' className="bg-black text-white w-full min-h-screen px-6 py-8 md:py-16 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full space-y-10 md:space-y-24">
        {/* TRUST + TRANSPARENCY */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-8">
          <div className="w-full md:w-1/4">
            <p className="text-[#E0D9CD] text-sm font-light">(Our Values)</p>
          </div>
          
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl lg:text-4xl uppercase text-white leading-tight">
              TRUST <span className="text-[#B15C41]">+</span><br />
              TRANSPARENCY
            </h3>
          </div>
          
          <div className="w-full md:w-1/4">
            <p className="text-sm text-gray-300 leading-relaxed">
              Honest communication and ethical 
              practices that build lasting confidence.
            </p>
          </div>
        </div>

        {/* INTEGRITY + COMMITMENT */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-8">
          <div className="w-full md:w-1/4 invisible">
            <p className="text-white text-sm font-light">(Our Values)</p>
          </div>
          
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl lg:text-4xl uppercase text-white leading-tight">
              INTEGRITY <span className="text-[#B15C41]">+</span><br />
              COMMITMENT
            </h3>
          </div>
          
          <div className="w-full md:w-1/4">
            <p className="text-sm text-gray-300 leading-relaxed">
              Unwavering dedication to doing what&#39;s
              right and delivering on every promise.
            </p>
          </div>
        </div>

        {/* CREATIVITY + GROWTH */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-8">
          <div className="w-full md:w-1/4 invisible">
            <p className="text-white text-sm font-light">(Our Values)</p>
          </div>
          
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl lg:text-4xl uppercase text-white leading-tight">
              CREATIVITY <span className="text-[#B15C41]">+</span><br />
              GROWTH
            </h3>
          </div>
          
          <div className="w-full md:w-1/4">
            <p className="text-sm text-gray-300 leading-relaxed">
              Turning bold ideas into powerful strategies
              that accelerate brand growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}