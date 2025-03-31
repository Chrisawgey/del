import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./CateringAndEvents.css";

const CateringAndEvents = ({ darkMode }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    phone: '',
    event_date: '',
    event_type: '',
    guest_count: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

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
    arrows: true,
    fade: true
  };

  const eventTypes = [
    "Wedding Reception", 
    "Corporate Lunch", 
    "Business Meeting",
    "Holiday Party",
    "Birthday Celebration",
    "Graduation Party",
    "Family Gathering",
    "Other"
  ];

  return (
    <div className={`catering-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="catering-hero">
        <h1>Catering & Private Events</h1>
        <p className="catering-tagline">Elevate your gatherings with our exceptional food and service</p>
      </div>
      
      <section className="catering-intro">
        <div className="intro-content">
          <h2>Let Us Make Your Event Special</h2>
          <div className="divider"></div>
          <p>
            From intimate gatherings to large celebrations, The Deli of Springfield offers 
            personalized catering services that bring our delicious, freshly-prepared food to 
            your special occasion. Whether it's a corporate meeting, family celebration, or 
            wedding reception, we create custom menus tailored to your taste and budget.
          </p>
        </div>
      </section>

      <section className="catering-showcase">
        <h2>Our Catering Showcase</h2>
        <div className="divider"></div>
        <div className="carousel-container">
          <Slider {...sliderSettings}>
            {images.map((image, index) => (
              <div key={index} className="carousel-slide">
                <img src={image} alt={`Catering Example ${index + 1}`} className="carousel-image" />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="divider"></div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🍽️</div>
            <h3>Full-Service Catering</h3>
            <p>Let our professional staff handle everything from setup to service and cleanup.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📦</div>
            <h3>Drop-Off Catering</h3>
            <p>Delicious food delivered to your location, ready to serve.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🥪</div>
            <h3>Boxed Lunches</h3>
            <p>Perfect for corporate meetings and events with individually packaged meals.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🎉</div>
            <h3>Private Events</h3>
            <p>Host your special occasion at our location with customized menus and setups.</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Let's Plan Your Event</h2>
        <div className="divider"></div>
        
        {submitted ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3>Thank You!</h3>
            <p>Your catering inquiry has been submitted successfully. We'll contact you within 24 hours to discuss your event.</p>
          </div>
        ) : (
          <form className="catering-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="from_name">Your Name</label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="catering-input"
                  required
                  autoComplete="name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="from_email">Email Address</label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="catering-input"
                  required
                  autoComplete="email"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 555-5555"
                  className="catering-input"
                  required
                  autoComplete="tel"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="event_date">Event Date</label>
                <input
                  type="date"
                  id="event_date"
                  name="event_date"
                  value={formData.event_date}
                  onChange={handleChange}
                  className="catering-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="event_type">Event Type</label>
                <select
                  id="event_type"
                  name="event_type"
                  value={formData.event_type}
                  onChange={handleChange}
                  className="catering-input"
                  required
                >
                  <option value="" disabled>Select Event Type</option>
                  {eventTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="guest_count">Number of Guests</label>
                <input
                  type="number"
                  id="guest_count"
                  name="guest_count"
                  value={formData.guest_count}
                  onChange={handleChange}
                  placeholder="Estimated Guest Count"
                  className="catering-input"
                  min="1"
                  required
                />
              </div>
              
              <div className="form-group full-width">
                <label htmlFor="message">Tell Us About Your Event</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Menu preferences, dietary needs, or special requests..."
                  className="catering-textarea"
                  required
                  rows="4"
                ></textarea>
              </div>
            </div>
            
            <button type="submit" className="catering-submit-button">
              Submit Inquiry
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

export default CateringAndEvents;