import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CateringAndEvents.css";
import food1 from "../assets/food1.jpeg";
import food2 from "../assets/food2.jpeg";
import food3 from "../assets/food3.jpeg";
import food4 from "../assets/food4.jpeg";

const CateringAndEvents = ({ darkMode }) => {
  const { t } = useTranslation();
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
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setSubmitted(true); // Show success message
    }).catch((error) => {
      console.error('EmailJS Error:', error.text);
    });
  };

  const images = [food1, food2, food3, food4];

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
    { key: "wedding", label: t('catering.contact.eventTypes.wedding') },
    { key: "corporateLunch", label: t('catering.contact.eventTypes.corporateLunch') },
    { key: "businessMeeting", label: t('catering.contact.eventTypes.businessMeeting') },
    { key: "holidayParty", label: t('catering.contact.eventTypes.holidayParty') },
    { key: "birthday", label: t('catering.contact.eventTypes.birthday') },
    { key: "graduation", label: t('catering.contact.eventTypes.graduation') },
    { key: "familyGathering", label: t('catering.contact.eventTypes.familyGathering') },
    { key: "other", label: t('catering.contact.eventTypes.other') }
  ];

  return (
    <div className={`catering-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="catering-hero">
        <h1>{t('catering.hero.title')}</h1>
        <p className="catering-tagline">{t('catering.hero.tagline')}</p>
      </div>

      <section className="catering-intro">
        <div className="intro-content">
          <h2>{t('catering.intro.title')}</h2>
          <div className="divider"></div>
          <p>{t('catering.intro.text')}</p>
        </div>
      </section>

      <section className="catering-showcase">
        <h2>{t('catering.showcase.title')}</h2>
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
        <h2>{t('catering.services.title')}</h2>
        <div className="divider"></div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🍽️</div>
            <h3>{t('catering.services.fullService.title')}</h3>
            <p>{t('catering.services.fullService.description')}</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📦</div>
            <h3>{t('catering.services.dropOff.title')}</h3>
            <p>{t('catering.services.dropOff.description')}</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🥪</div>
            <h3>{t('catering.services.boxedLunches.title')}</h3>
            <p>{t('catering.services.boxedLunches.description')}</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🎉</div>
            <h3>{t('catering.services.privateEvents.title')}</h3>
            <p>{t('catering.services.privateEvents.description')}</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>{t('catering.contact.title')}</h2>
        <div className="divider"></div>

        {submitted ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3>{t('catering.contact.success.title')}</h3>
            <p>{t('catering.contact.success.message')}</p>
          </div>
        ) : (
          <form className="catering-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="from_name">{t('catering.contact.form.name')}</label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  placeholder={t('catering.contact.form.namePlaceholder')}
                  className="catering-input"
                  required
                  autoComplete="name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="from_email">{t('catering.contact.form.email')}</label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  placeholder={t('catering.contact.form.emailPlaceholder')}
                  className="catering-input"
                  required
                  autoComplete="email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">{t('catering.contact.form.phone')}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('catering.contact.form.phonePlaceholder')}
                  className="catering-input"
                  required
                  autoComplete="tel"
                />
              </div>

              <div className="form-group">
                <label htmlFor="event_date">{t('catering.contact.form.eventDate')}</label>
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
                <label htmlFor="event_type">{t('catering.contact.form.eventType')}</label>
                <select
                  id="event_type"
                  name="event_type"
                  value={formData.event_type}
                  onChange={handleChange}
                  className="catering-input"
                  required
                >
                  <option value="" disabled>{t('catering.contact.form.eventTypePlaceholder')}</option>
                  {eventTypes.map((type) => (
                    <option key={type.key} value={type.label}>{type.label}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="guest_count">{t('catering.contact.form.guestCount')}</label>
                <input
                  type="number"
                  id="guest_count"
                  name="guest_count"
                  value={formData.guest_count}
                  onChange={handleChange}
                  placeholder={t('catering.contact.form.guestCountPlaceholder')}
                  className="catering-input"
                  min="1"
                  required
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">{t('catering.contact.form.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('catering.contact.form.messagePlaceholder')}
                  className="catering-textarea"
                  required
                  rows="4"
                ></textarea>
              </div>
            </div>

            <button type="submit" className="catering-submit-button">
              {t('catering.contact.form.submit')}
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

export default CateringAndEvents;