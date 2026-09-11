import React, { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 250) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className={`scroll-to-top scroll-to-target ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      style={{ display: visible ? 'block' : 'none' }}
      title="Scroll to Top"
    >
      <span className="fa fa-angle-up"></span>
    </div>
  );
}
