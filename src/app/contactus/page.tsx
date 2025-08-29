"use client"
import { useState, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function ContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullname: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);  // This will trigger the button text change
    setSubmitStatus(null);
  
    try {
      // Use our Next.js API route instead of directly calling Google Apps Script
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setFormData({
          fullname: '',
          company: '',
          phone: '',
          email: '',
          message: ''
        });
        
        // Redirect to thank you page
        router.push('/thankyou');
      } else {
        throw new Error(data.message || 'Error submitting form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);  // This will reset the button text
    }
  };

  useEffect(() => {
    if (submitStatus === 'success') {
      const timeout = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [submitStatus]);

  return (
    <div className="bg-black text-[#E0D9CD] min-h-screen font-sans pt-24 md:pt-32 px-4 md:px-0">
      <div className="container mx-auto py-6 md:py-10 max-w-full flex flex-col md:flex-row gap-8 md:h-[calc(100vh-6rem)]">
        {/* Left Column */}
        <div className="md:w-1/2 flex flex-col justify-between md:pl-8 lg:pl-16">
          {/* NUVORAA heading - appears first on mobile */}
          <div className="mt-4 order-first md:order-last mb-6 md:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl text-[#B15C41] tracking-tighter">
              NUVORAA!
            </h1>
          </div>
          
          {/* Contact info - appears second on mobile */}
          <div className="order-last md:order-first">
            <p className="text-xs sm:text-sm md:text-base mb-4">(Contact Us)</p>
            <p className="text-xl sm:text-2xl md:text-3xl leading-tight mb-6">
              Let&apos;s bring your brand to life with fresh ideas and a bold vision. Get in touch and let&apos;s craft something wild together.
            </p>
            <div className="space-y-10 mb-6">
              <p className="text-base sm:text-lg mt-10  md:text-xl">+91 9082506362</p>
              <div className="border-b-2 border-white/30 w-64">
                <p className="text-sm sm:text-lg md:text-xl pb-1">marketing@nuvoraa.com</p>
              </div>
              <div className="w-80 border-b-2 border-white/30">
                <p className="text-xs sm:text-sm md:text-base pb-1">801, A Wing, Pranik Chambers, Saki Naka, Andheri East, Mumbai-400072</p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Right Column - Form */}
        <div className="md:w-1/2 w-full flex justify-end">
          <form id="contact-form" className="space-y-4 w-full max-w-md md:pr-8 pr-4" onSubmit={handleSubmit}>
            {['fullname', 'company', 'phone', 'email', 'message'].map((field, idx) => {
              const isMessage = field === 'message';
              return (
                <div key={idx}>
                  <label htmlFor={field} className="text-sm sm:text-xl block mb-1 capitalize">
                    {field === 'fullname' ? 'Full Name' : field.charAt(0).toUpperCase() + field.slice(1)}
                    <span className="text-[#B15C41]">*</span>
                  </label>
                  {isMessage ? (
                    <textarea
                      id={field}
                      rows={3}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-white/30 py-1 px-1 focus:outline-none focus:border-amber-700 transition-colors duration-300"
                    />
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                      id={field}
                      required
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-white/30 py-1 px-1 focus:outline-none focus:border-amber-700 transition-colors duration-300"
                    />
                  )}
                </div>
              );
            })}
  
            <div className="pt-2 w-full">
              <button
                type="submit"
                id="submit-button"
                disabled={isSubmitting}
                className="w-full md:w-56 bg-[#E0D9CD] hover:bg-amber-100 text-black text-xl sm:text-2xl md:text-3xl py-2 px-4 flex justify-center items-center gap-2 transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <h4 className="inline-block">
                  {isSubmitting ? 'SENDING' : 'SEND'}
                </h4>
                {isSubmitting && <LoadingSpinner />}
              </button>
  
              {submitStatus === 'success' && (
                <p className="mt-2 text-green-400 text-sm">Your message has been successfully sent! We&apos;ll get back to you soon.</p>
              )}
              {submitStatus === 'error' && (
                <p className="mt-2 text-red-400 text-sm">Failed to send message. Please try again or contact us directly.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}