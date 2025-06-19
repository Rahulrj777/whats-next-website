import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './ScrollTop.css';

const ScrollTop = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [hideAnimation, setHideAnimation] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrollHeight = window.scrollY;

      if (scrollHeight > window.innerHeight * 0.1) {
        setHideAnimation(false);
        setShowIcon(true);
      } else {
        if (showIcon) {
          setHideAnimation(true);
          setTimeout(() => setShowIcon(false), 500); // matches animation duration
        }
      }
    };

    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, [showIcon]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showIcon && !hideAnimation) return null;

  return (
    <div
      className={`scroll-to-top ${hideAnimation ? 'hide' : 'show'}`}
      onClick={scrollToTop}
    >
      <FaArrowUp className="scroll-icon" />
    </div>
  );
};

export default ScrollTop;
