"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

// NavLink Component with Text Slide-Up Animation
const NavLink: React.FC<{ 
  href: string; 
  children: React.ReactNode;
  className?: string;
  hoverText?: string;
  textColor: string;
  isOfferLink?: boolean;
}> = ({ href, children, className, hoverText, textColor, isOfferLink }) => {
  const [isHovered, setIsHovered] = useState(false);
  const displayHoverText = hoverText || children;

  return (
    <Link href={href}>
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative overflow-hidden cursor-pointer ${className}`}
        style={{ perspective: '1000px' }}
      >
        <div className="relative h-full overflow-hidden">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: isHovered ? -30 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`inline-block w-full ${textColor}`}
          >
            {children}
          </motion.div>
          <motion.div
            initial={{ y: 30 }}
            animate={{ y: isHovered ? 0 : 30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`absolute left-0 inline-block w-full ${textColor}`}
          >
            {displayHoverText}
          </motion.div>
        </div>
        
        {/* Special underline animation for offer link */}
        {isOfferLink && (
          <motion.div 
            className={`absolute bottom-0 left-0 h-0.5 ${textColor === 'text-black' ? 'bg-black' : 'bg-white'}`}
            initial={{ width: '100%' }}
            animate={{ width: isHovered ? '30%' : '100%' }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        )}
      </motion.div>
    </Link>
  );
};

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [textColor, setTextColor] = useState('text-[#E0D9CD]');
  const [logoSrc, setLogoSrc] = useState('/logos/circle.png'); // New state for logo src

  const navigationLinks = [
    { path: '/', label: 'Home', hoverText: 'Home' },
    { path: '/aboutus', label: 'About Us', hoverText: 'About Us' },
    { path: '/digital-marketing-services', label: 'Services', hoverText: 'Services' },
    { path: '/digital-marketing-blog', label: 'Blog', hoverText: 'Blog' },
    
  ];

  const isActive = (path: string): boolean => pathname === path;

  // Detect which section is in view and update text color
  useEffect(() => {
    const detectSection = () => {
      // Get all sections with IDs
      const sections = document.querySelectorAll('section[id]');
      
      // Find which section is currently most visible in the viewport
      let currentSection = '';
      let maxVisibility = 0;
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Calculate how much of the section is visible in the viewport (as a percentage)
        const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        const visibilityPercentage = visibleHeight > 0 ? visibleHeight / section.clientHeight : 0;
        
        if (visibilityPercentage > maxVisibility) {
          maxVisibility = visibilityPercentage;
          currentSection = section.id;
        }
      });
      
      // Update text color and logo based on section ID
      if (['2', '4', '6'].includes(currentSection)) {
        setTextColor('text-black');
        setLogoSrc('/logos/circleblack.png'); // Use black logo on cream sections
      } else {
        setTextColor('text-[#E0D9CD]');
        setLogoSrc('/logos/circle.png'); // Use default logo on dark sections
      }
    };

    // Scroll handler that includes section detection
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollY;

      setShowNavbar(scrollingUp || currentScrollY < 10);
      setIsScrolledUp(scrollingUp && currentScrollY > 0);
      setLastScrollY(currentScrollY);
      
      detectSection();
    };

    // Initial detection on mount
    detectSection();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-2 left-0  right-0 w-full p-10 z-50 ${textColor} p-4 
        ${isScrolledUp ? 'bg-transparent' : 'bg-transparent'}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo - Dynamic based on section */}
        <Link href="/" className="h-16 flex items-center">
          <div className="relative h-18 w-18">
            <Image 
              src={logoSrc} 
              alt="Nuvoraa Logo" 
              fill
              className="object-contain" 
              sizes="64px"
              priority
            />
          </div>
        </Link>

        {/* Hamburger Button */}
        <button 
          className="md:hidden p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          aria-label="Toggle menu"
        >
          <motion.svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </motion.svg>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex md:flex-row md:space-x-2   items-center">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.path}
              href={link.path}
              hoverText={link.hoverText}
              textColor={textColor}
              className={`text-sm ml-10  ${isActive(link.path) ? textColor : textColor}`}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            href="/contactus"
            hoverText="Talk to Us"
            textColor={textColor}
            className={`text-sm ml-30 mr-20 relative pb-1`}
            isOfferLink={true}
          >
            Talk to Us
          </NavLink>
        </div>

        {/* Mobile Nav Links */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`md:hidden flex flex-col absolute top-16 left-0 w-full ${textColor === 'text-black' ? 'bg-white' : 'bg-black'} py-4 mt-10 px-4 space-y-4 z-50`}
            >
              {navigationLinks.map((link) => (
                <NavLink
                  key={link.path}
                  href={link.path}
                  hoverText={link.hoverText}
                  textColor={textColor}
                  className={`text-lg ${isActive(link.path) ? 'text-orange-500' : textColor}`}
                >
                  {link.label}
                </NavLink>
              ))}
              <NavLink
                href="/contactus"
                hoverText="Talk to Us"
                textColor={textColor}
                className={`text-lg relative pb-1`}
                isOfferLink={true}
              >
                Talk to Us
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;