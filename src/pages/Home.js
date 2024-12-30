// Home.js
import React from 'react';
import './Home.css';
import wrapImage from '../assets/wrap.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { MapPin } from 'lucide-react';

import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';

import tiktokLogo from '../assets/tiktok-logo.png';
import instagramLogo from '../assets/instagram-logo.png';
import facebookLogo from '../assets/facebook-logo.png';




function Home() {
  const deliLocation = {
    address: "234 Morris Ave, Springfield, NJ 07081",
    coords: { lat: 40.7169, lng: -74.3285 },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.5363878554087!2d-74.33068792347941!3d40.71690663885661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3acc3efd324a9%3A0x1e21b0b64498c3d9!2s234%20Morris%20Ave%2C%20Springfield%2C%20NJ%2007081!5e0!3m2!1sen!2sus!4v1703947458090!5m2!1sen!2sus"
  };

  const handleGetDirections = () => {
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(deliLocation.address)}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <div className="home">
      {/* Hero Banner */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${wrapImage})` }}
      >
        <h1>Welcome to Our Deli</h1>
        <p>Where Quality Meets Flavor – We Serve Only the Best!</p>
        <button
          className="menu-button"
          onClick={() =>
            window.open(
              'https://order.online/store/the-deli-of-springfield-springfield-27522797/?hideModal=true&pickup=true',
              '_blank'
            )
          }
        >
          See Our Menu
        </button>
      </section>

      {/* Location Section */}
      <section className="location">
        <div className="location-container">
          <div className="location-content">
            <MapPin size={24} className="location-icon" />
            <div className="location-text">
              <h3>Find Us Here</h3>
              <p>{deliLocation.address}</p>
            </div>
            <button className="directions-button" onClick={handleGetDirections}>
              Get Directions
            </button>
          </div>
          <div className="map-container">
            <iframe
              src={deliLocation.mapUrl}
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Deli Location"
              className="location-map"
            />
          </div>
        </div>
      </section>

      {/* Photo Carousel */}
      <section className="photo-carousel">
        <h2>What We Offer</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
        >
          <SwiperSlide>
            <img src={photo3} alt="Deli item 1" className="carousel-photo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo2} alt="Deli item 2" className="carousel-photo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo1} alt="Deli item 3" className="carousel-photo" />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>Who We Are</h2>
        <p>
          The Deli of Springfield was founded on December 7th, 2023. The creation
          of the name came from the realization that every surrounding town has a
          food place named after the town, and that's exactly what was missing in
          Springfield, NJ. We bring our own recipes for people to try, and our
          mission is to serve freshness and quality. Most importantly, our secret
          that sets us apart from everyone else is that we serve everything with
          love and passion. We're proud to be a family-run business, and we look
          forward to continuing to serve Springfield and the surrounding towns
          for many years to come. We are "Where Quality Meets Flavor – We Serve
          Only the Best!" – The Deli of Springfield
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
  <div className="footer-social">
    <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
      <img src={tiktokLogo} alt="TikTok" />
    </a>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <img src={instagramLogo} alt="Instagram" />
    </a>
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <img src={facebookLogo} alt="Facebook" />
    </a>
  </div>
  <div className="footer-content">
    <p>© 2024 Your Deli Name. All rights reserved.</p>
    <p>123 Main Street, Springfield, NJ | Contact: (123) 456-7890</p>
  </div>
      </footer>
    </div>
  );
}

export default Home;
