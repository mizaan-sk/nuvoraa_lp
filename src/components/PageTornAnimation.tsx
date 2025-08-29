"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const PageTornTransition = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Start animation
    const animationTimer = setTimeout(() => {
      setIsAnimating(false);
    }, 2000);

    // Remove components after animation
    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 3500);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {isAnimating && (
        <>
          {/* Top half */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: '-100%' }}
            exit={{ y: '-100%' }}
            transition={{
              duration: 1.5,
              ease: [0.645, 0.045, 0.355, 1.000],
            }}
            className="fixed top-0 left-0 right-0 h-[50vh] bg-black z-[1000]"
            style={{
              backgroundImage: "url('/pattern.png')",
              backgroundSize: 'cover',
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 98%, 0% 100%)'
            }}
          />

          {/* Bottom half */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: '100%' }}
            exit={{ y: '100%' }}
            transition={{
              duration: 1.5,
              ease: [0.645, 0.045, 0.355, 1.000],
            }}
            className="fixed bottom-0 left-0 right-0 h-[50vh] bg-black z-[1000]"
            style={{
              backgroundImage: "url('/pattern.png')",
              backgroundSize: 'cover',
              clipPath: 'polygon(0% 2%, 100% 0%, 100% 100%, 0% 100%)'
            }}
          />

          {/* Torn effect overlay */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="fixed inset-0 z-[999] pointer-events-none"
            style={{
              background: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 2px)'
            }}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default PageTornTransition;