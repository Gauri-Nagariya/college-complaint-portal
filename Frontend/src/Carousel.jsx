import React, { useState } from 'react';
import './styles/Carousel.css';

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      title: "Here’s What You Can Do:",
      content: [
        " File a Complaint —  Easily register any issue you're facing within the college.",
        " Track Your Complaints — Monitor the progress of your submitted complaints in real time.",
        " Get Updates — Receive notifications when your complaint status changes or gets resolved."
      ]
    //   background: "linear-gradient(45deg, #ff9a9e, #fad0c4)"
    },
    {
      title: "Why Use It?",
      content: [
        " No More Waiting — Skip the hassle of paperwork and long queues.",
        " Follow Up Easily — View every step taken on your complaint, without having to ask.",
        " Your Voice Matters — Make sure your concerns reach the right people and are acted upon."
      ]
    //   background: "linear-gradient(45deg, #a1c4fd, #c2e9fb)"
    },
    {
      title: "Why It’s Awesome:",
      content: [
        " Efficient Handling — Complaints are organized and processed systematically.",
        " Transparent System — Know who is responsible and what actions are being taken.",
        " Direct Action — Helps the admin team respond faster with proper tracking."
      ]
    //   background: "linear-gradient(45deg, #d4fc79, #96e6a1)"
    }
  ];

  const prevSlide = () => {
    setIndex(index === 0 ? slides.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === slides.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-slide"
        style={{ background: slides[index].background }}
      >
        <h2>{slides[index].title}</h2>
        <ul>
          {slides[index].content.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      <button className="prev" onClick={prevSlide}>	&lt;</button>
      <button className="next" onClick={nextSlide}>	&gt;</button>
    </div>
  );
};

export default Carousel;
