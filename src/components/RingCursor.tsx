// components/RingCursor.jsx
'use client'; // Make sure it's a client component

import { useEffect, useState } from 'react';

const RingCursor = () => {
  const [mounted, setMounted] = useState(false);
  const [cursorColor, setCursorColor] = useState('rgba(255, 255, 255, 0.8)');

  useEffect(() => {
    // Only run on client side
    setMounted(true);
    
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    
    // Delay factor for the lagging effect (higher = more lag)
    const delay = 0.1;
    
    // Create cursor elements
    const cursorRing = document.createElement('div');
    cursorRing.classList.add('cursor-ring');
    
    const cursorDot = document.createElement('div');
    cursorDot.classList.add('cursor-dot');
    
    // Add to DOM
    document.body.appendChild(cursorRing);
    document.body.appendChild(cursorDot);
    
    // Update cursor positions on mouse move
    const onMouseMove = (e: MouseEvent) => {
      // Update mouse position immediately
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Update dot to follow mouse exactly
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
      
      // Check if cursor is over sections with IDs 2, 4, or 6
      const elementsUnderCursor = document.elementsFromPoint(mouseX, mouseY);
      let isOverTargetSection = false;
      
      elementsUnderCursor.forEach(element => {
        const id = element.id;
        if (id === '2' || id === '4' || id === '6') {
          isOverTargetSection = true;
          // Update color right away for DOM element
          cursorRing.style.borderColor = 'rgba(0, 0, 0, 0.8)';
          cursorDot.style.backgroundColor = 'black';
          // Update state for styled-jsx
          setCursorColor('rgba(0, 0, 0, 0.8)');
        }
      });
      
      if (!isOverTargetSection) {
        // Reset to default color
        cursorRing.style.borderColor = 'rgba(255, 255, 255, 0.8)';
        cursorDot.style.backgroundColor = 'white';
        setCursorColor('rgba(255, 255, 255, 0.8)');
      }
    };
    
    // Animation loop for smooth following effect
    const animateRing = () => {
      // Calculate distance between current ring position and mouse position
      ringX += (mouseX - ringX) * delay;
      ringY += (mouseY - ringY) * delay;
      
      // Update ring position
      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;
      
      requestAnimationFrame(animateRing);
    };
    
    // Add effects for mouse clicks
    const onMouseDown = () => {
      cursorRing.style.transform = 'translate(-50%, -50%) scale(0.8)';
    };
    
    const onMouseUp = () => {
      cursorRing.style.transform = 'translate(-50%, -50%) scale(1)';
    };
    
    // Add event listeners
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    
    // Start animation
    animateRing();
    
    // Cleanup
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.body.removeChild(cursorRing);
      document.body.removeChild(cursorDot);
    };
  }, []);

  // Only inject styles on client side
  if (!mounted) return null;

  return (
    <style jsx global>{`
      body {
        cursor: none; /* Hide the default cursor */
      }
      
      .cursor-ring {
        position: fixed;
        width: 40px;
        height: 40px;
        border: 2px solid ${cursorColor};
        border-radius: 50%;
        pointer-events: none;
        transform: translate(-50%, -50%);
        transition: transform 0.1s ease-out, border-color 0.3s ease;
        z-index: 9999;
      }
      
      .cursor-dot {
        position: fixed;
        width: 5px;
        height: 5px;
        background-color: ${cursorColor === 'rgba(0, 0, 0, 0.8)' ? 'black' : 'white'};
        border-radius: 50%;
        pointer-events: none;
        transform: translate(-50%, -50%);
        transition: background-color 0.3s ease;
        z-index: 9999;
      }
    `}</style>
  );
};

export default RingCursor;