import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./CateringAndEvents.css";

const CateringAndEvents = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sending form data using EmailJS
    emailjs.sendForm(
      'service_96x11ys',   // Your EmailJS Service ID
      'template_ndraat5',  // Your EmailJS Template ID
      e.target,            // Form element
      'CyZ4x-6csDcqDFwCw'  // Your EmailJS Public Key
    ).then((result) => {
      console.log('Email sent successfully:', result.text);
      setSubmitted(true); // Show success message
    }).catch((error) => {
      console.error('EmailJS Error:', error.text);
    });

    e.target.reset(); // Reset form fields
  };

  const images = [
    require("../assets/food1.jpeg"),
    require("../assets/food2.jpeg"),
    require("../assets/food3.jpeg"),
    require("../assets/food4.jpeg"),
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="catering-container">
      <h1>Catering & Private Events</h1>
      <p className="catering-description">
        Host your dream event with us! Whether it’s a wedding, corporate meeting, or private party, we’ve got you covered.
      </p>

      <div className="carousel-container">
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img src={image} alt={`Event ${index + 1}`} className="carousel-image" />
            </div>
          ))}
        </Slider>
      </div>

      {submitted ? (
        <p className="catering-success">Thank you for reaching out! We'll get back to you soon.</p>
      ) : (
        <form className="catering-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="from_name" // Matches {{from_name}} in the template
            placeholder="Your Name"
            className="catering-input"
            required
          />
          <input
            type="email"
            name="from_email" // Matches {{from_email}} in the template
            placeholder="Your Email"
            className="catering-input"
            required
          />
          <textarea
            name="message" // Matches {{message}} in the template
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
