import React, { useEffect, useRef } from 'react';
import './Home6.css';

const Home6 = () => {
  const headerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    }, observerOptions);

    if (headerRef.current) observer.observe(headerRef.current);
    if (card1Ref.current) observer.observe(card1Ref.current);
    if (card2Ref.current) observer.observe(card2Ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleBuyClick = (planName) => {
    alert(`Redirecting to payment page for ${planName}...`);
  };

  return (
    <div id="pricing" className="pricing-container">
      <div className="pricing-section">
        <div className="header" ref={headerRef}>
          <h2>PRICING PLANS</h2>
          <p>Choose from flexible pricing plans tailored to meet your bulk messaging needs</p>
        </div>

        <div className="pricing-cards">
          <div className="pricing-card slide-left" ref={card1Ref}>
            <div className="plan-name">WHATS NEXT</div>
            <div className="plan-price">₹ 3999</div>
            <div className="plan-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <ul className="features-list">
              <li>1 PC Access</li>
              <li>1 Year Free Update</li>
              <li>Auto Reply</li>
              <li>Number Filter</li>
              <li>Group Grabber</li>
              <li>Whatsapp & Email Support</li>
            </ul>
            <button className="buy-button" onClick={() => handleBuyClick('WHATS NEXT')}>BUY NOW</button>
          </div>

          <div className="pricing-card slide-right" ref={card2Ref}>
            <div className="plan-name">DATA EXTRACTOR</div>
            <div className="plan-price">₹ 3,000</div>
            <div className="plan-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <ul className="features-list">
              <li>1 PC Access</li>
              <li>1 Year Free Update</li>
              <li>Auto Reply</li>
              <li>Number Filter</li>
              <li>Group Grabber</li>
              <li>Whatsapp & Email Support</li>
            </ul>
            <button className="buy-button" onClick={() => handleBuyClick('DATA EXTRACTOR')}>BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home6;
