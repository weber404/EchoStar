'use strict';

'use client';

import React, { useState, useEffect } from 'react';

export default function FloatingActions() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 300) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 300) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* WhatsApp Button (Right) */}
      <a 
        href="https://api.whatsapp.com/send?phone=+91-9812506562&text=Hello,I Want to Know About..." 
        className="float" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp my-float"></i>
      </a>

      {/* Phone Button (Left) */}
      <a 
        href="tel:+91-9812506562" 
        className="float1" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Call Us"
      >
        <i className="fa fa-phone my-float"></i>
      </a>

      {/* Scroll to Top Button */}
      <div 
        className="scroll-to-top scroll-to-target" 
        onClick={scrollTop}
        style={{ display: showScroll ? 'block' : 'none' }}
        title="Scroll to Top"
      >
        <span className="fa fa-angle-up"></span>
      </div>
    </>
  );
}
