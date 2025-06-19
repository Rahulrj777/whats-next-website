import React, { useEffect, useRef } from 'react';
import './Home2.css';

import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';

const Home2 = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          } else {
            entry.target.classList.remove('appear');
          }
        });
      },
      { threshold: 0.2 }
    );

    imageRefs.current.forEach(img => {
      if (img) observer.observe(img);
    });

    return () => observer.disconnect();
  }, []);

  const images = [img1, img2, img3, img4, img5];

  return (
    <div id="features" className="home2-section">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`animated-${index}`}
          className="slide-in"
          ref={el => (imageRefs.current[index] = el)}
          style={{ transitionDelay: `${index * 0.2}s` }}
        />
      ))}
    </div>
  );
};

export default Home2;
