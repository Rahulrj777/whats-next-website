import React, { useEffect, useRef } from 'react';
import contact from '../../assets/contact.png';
import './Home8.css';

const Home8 = () => {
  const textRef = useRef(null);
  const formRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (formRef.current) observer.observe(formRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="contact-container">
      <div className="contact-header" ref={textRef}>
        <h2>Contact Us</h2>
        <p>Reach out to us for more information and personalized assistance with our bulk messaging software</p>
      </div>

      <div className="contact-content">
        <div className="contact-image" ref={imageRef}>
          <img src={contact} alt="Contact Us" />
        </div>

        <div className="contact-form" ref={formRef}>
          <div>
            <h3>Full Name</h3>
            <input type="text" placeholder="Full Name" />
          </div>
          <div>
            <h3>Email Address</h3>
            <input type="email" placeholder="Example@domain.com" />
          </div>
          <div>
            <h3>Subject</h3>
            <input type="text" placeholder="Enter Your Subject" />
          </div>
          <div>
            <h3>Message</h3>
            <textarea placeholder="Enter Your Message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Home8;
