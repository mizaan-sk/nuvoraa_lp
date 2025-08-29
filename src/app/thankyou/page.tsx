"use client";
import Link from 'next/link';
import { useEffect } from 'react';

export default function ThankYouPage() {
  useEffect(() => {
    console.log('Thank you page loaded');
  }, []);

  return (
    <div className="bg-black text-[#E0D9CD] min-h-screen flex flex-col items-center justify-center font-sans p-4">
      <div className="text-center max-w-xl">
        <h1 className="text-5xl sm:text-7xl  text-[#B15C41] mb-6">Thank You!</h1>
        <p className="text-xl sm:text-2xl mb-8">
          We appreciate you reaching out to us. Our team will get back to you soon.
        </p>
        <div>
          <Link href="/" className="bg-[#E0D9CD] hover:bg-amber-100 text-black px-8 py-3 text-xl sm:text-2xl inline-block transition-colors">
            <h1>
              Back to Home
            </h1>
            
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-8 w-full max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#B15C41] tracking-tighter">
          NUVORAA!
        </h2>
      </div>
    </div>
  );
}
