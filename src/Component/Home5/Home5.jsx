import { useEffect } from 'react';
import './Home5.css';

import img1 from '../../assets/highlights_img_1.png';
import img2 from '../../assets/highlights_img_2.png';
import img3 from '../../assets/highlights_img_3.png';
import img4 from '../../assets/highlights_img_4.png';
import img5 from '../../assets/highlights_img_5.png';
import img6 from '../../assets/highlights_img_6.png';

const cardContent = [
  {
    img: img1,
    title: "Cost-Effective Communication",
    description: "Sending messages through WhatsApp is often more cost-effective than traditional SMS.",
  },
  {
    img: img2,
    title: "Wide Reach",
    description: "WhatsApp has a massive user base, providing a broad reach for your messages.",
  },
  {
    img: img3,
    title: "Media Sharing",
    description: "You can easily share multimedia content like images, videos, and documents through WhatsApp, making your messages more engaging.",
  },
  {
    img: img4,
    title: "Two-Way Communication",
    description: "Allows for two-way communication, enabling businesses to engage with their customers directly.",
  },
  {
    img: img5,
    title: "Instant Delivery",
    description: "Messages are delivered instantly, allowing for real-time communication.",
  },
  {
    img: img6,
    title: "Automation",
    description: "Some bulk messaging tools offer automation features, allowing you to schedule and send messages at specific times.",
  },
];

const Home5 = () => {
  useEffect(() => {
    const section = document.getElementById('home5');

    const onScroll = () => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100 && rect.bottom > 100;

        if (isVisible) {
        section.classList.add('animate');
        } else {
        section.classList.remove('animate'); 
        }
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
    }, []);

  return (
    <div className="home5-container" id="home5">
      <div className="home5-header">
        <h3>HIGHLIGHTS</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam voluptatibus iste error veniam ullam saepe quo vero excepturi fugit quis facere velit quas soluta natus recusandae libero nihil, tenetur nemo?</p>
      </div>

      <div className="home5-grid">
        {cardContent.map((card, i) => (
          <div className={`home5-card ${i < 3 ? 'from-left' : 'from-right'}`} key={i}>
            <img src={card.img} alt={`Highlight ${i + 1}`} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home5;
