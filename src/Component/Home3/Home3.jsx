import React, { useEffect, useRef, useState } from 'react';
import './Home3.css';
import whatsappBanner from '../../assets/whatsapp_banner.png';

const Home3 = () => {
  const sectionRef = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="home3-container">
      <div className={`home3-left ${inView ? 'slide-in-left' : 'slide-out-left'}`}>
        <img src={whatsappBanner} alt="WhatsApp Banner" className="home3-image" />
      </div>

      <div className={`home3-right ${inView ? 'slide-in-right' : 'slide-out-right'}`}>
        <h2 className="home3-title">WHAT IS WHAT'S NEXT?</h2>
        <p className="home3-description">
          WHATS NEXT With unlimited messages, short videos, audio, files, and images, you can create powerful marketing campaigns that resonate with your target audience. And with 365-day service, you can rely on What Next to help you achieve your marketing goals year-round. Best of all, WHATS NEXT is 100% safe and secure.
        </p>
        <button className="download-btn">Download</button>
      </div>
    </div>
  );
};

export default Home3;
