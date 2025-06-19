import React, { useRef, useEffect } from 'react';
import './Home7.css';

const Home7 = () => {
  const textRef = useRef(null);
  const videoRef = useRef(null);

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
    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="reference-section">
      <div className="text-content" ref={textRef}>
        <h2>REFERENCE VIDEO</h2>
        <p>
          Learn how to effortlessly use our bulk messaging software with this step-by-step tutorial.
          From setup to sending your first bulk message, we'll guide you through the entire process
          and highlight the key benefits, including enhanced communication efficiency, cost-effectiveness,
          and improved audience engagement.
        </p>
      </div>

      <div className="video-content" ref={videoRef}>
        <iframe
          width="200"
          height="300"
          src="https://www.youtube.com/embed/Y2ydY4yVqsk?si=1OPr7EPcLbXglgvr"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Home7;
