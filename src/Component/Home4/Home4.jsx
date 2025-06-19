import React, { useEffect } from "react";
import "./Home4.css";

import img1 from '../../assets/swiper_img_1.png';
import img2 from '../../assets/swiper_img_2.png';
import img3 from '../../assets/swiper_img_3.png';
import img4 from '../../assets/swiper_img_4.png';
import img5 from '../../assets/swiper_img_5.png';
import img6 from '../../assets/swiper_img_6.png';
import img7 from '../../assets/swiper_img_7.png';
import img8 from '../../assets/swiper_img_8.png';
import img9 from '../../assets/swiper_img_9.png';

const logos = [
  { src: img1, alt: 'Restaurant' },
  { src: img2, alt: 'Catering' },
  { src: img3, alt: 'Event' },
  { src: img4, alt: 'eCommerce' },
  { src: img5, alt: 'Shopping' },
  { src: img6, alt: 'Marketing' },
  { src: img7, alt: 'Academy' },
  { src: img8, alt: 'More' },
  { src: img9, alt: 'Others' },
];

export default function Home4() {
  useEffect(() => {
    const section = document.getElementById("home4");

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight - 100 && rect.bottom > 100;

      if (isVisible) {
        section.classList.add("animate");
      } else {
        section.classList.remove("animate"); // allow re-trigger
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // run on mount

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="home4-container" id="home4">
      <h2 className="home4-title">Who Experiences the Benefits of This Tool?</h2>
      <p className="home4-description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam voluptatibus iste error veniam ullam saepe quo vero excepturi fugit.
      </p>

      <div className="slider-wrapper">
        <div className="slider">
          {[...logos, ...logos].map((logo, index) => (
            <div className="slide" key={index}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
