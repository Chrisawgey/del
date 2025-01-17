// CateringAndEvents.js
import React, { useState } from 'react';
import "./CateringAndEvents.css";

const CateringAndEvents = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const images = [
    require("../assets/food1.jpeg"),
    require("../assets/food2.jpeg"),
    require("../assets/food3.jpeg"),
    require("../assets/food4.jpeg"),
  ];

  return (
    <div className="catering-container">
      <h1>Catering & Private Events</h1>
      <p className="catering-description">
        Host your dream event with us! Whether it’s a wedding, corporate meeting, or private party, we’ve got you covered.
      </p>

      <div className="carousel-container">
        {images.map((image, index) => (
          <div key={index} className="carousel-image-container">
            <img src={image} alt={`Event ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </div>

      {submitted ? (
        <p className="catering-success">Thank you for reaching out! We'll get back to you soon.</p>
      ) : (
        <form className="catering-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="catering-input"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="catering-input"
            required
          />
          <textarea
            placeholder="Tell us about your event..."
            className="catering-textarea"
            required
          ></textarea>
          <button type="submit" className="catering-submit-button">Submit</button>
        </form>
      )}
    </div>
  );
};

export default CateringAndEvents;