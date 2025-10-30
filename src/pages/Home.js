import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { MapPin } from 'lucide-react';

import photo1 from '../assets/photo1.jpeg';
import photo2 from '../assets/photo2.jpeg';
import photo3 from '../assets/photo3.jpeg';

import tiktokLogo from '../assets/tiktok-logo.png';
import instagramLogo from '../assets/instagram-logo.png';
import facebookLogo from '../assets/facebook-logo.png';
import sandwichGif from '../assets/sandwich.gif';
import video2 from '../assets/video2.gif';

function Home({ darkMode }) {
  const { t } = useTranslation();
  const deliLocation = {
    address: "234 Morris Ave, Springfield, NJ 07081",
    coords: { lat: 40.7169, lng: -74.3285 },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.5363878554087!2d-74.33068792347941!3d40.71690663885661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3acc3efd324a9%3A0x1e21b0b64498c3d9!2s234%20Morris%20Ave%2C%20Springfield%2C%20NJ%2007081!5e0!3m2!1sen!2sus!4v1703947458090!5m2!1sen!2sus"
  };

  const handleGetDirections = () => {
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(deliLocation.address)}`;
    window.open(mapsUrl, '_blank');
  };

  const handleOrderOnline = () => {
    window.open(
      'https://www.seamless.com/menu/the-deli-of-springfield-234-morris-avenue-springfield/7678704',
      '_blank'
    );
  };

  // Background rotation logic
  const backgrounds = [sandwichGif, video2, photo1];
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={`home ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Hero Banner */}
      <section
        className="hero"
        style={{
          backgroundImage: backgrounds[currentBackground].endsWith('.mp4')
            ? undefined
            : `url(${backgrounds[currentBackground]})`,
        }}
      >
        {backgrounds[currentBackground].endsWith('.mp4') && (
          <video
            src={backgrounds[currentBackground]}
            autoPlay
            muted
            loop
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: -1,
            }}
          />
        )}
        <div className="hero-content">
          <h1>{t('home.hero.title')}</h1>
          <p className="hero-tagline">{t('home.hero.tagline')}</p>
          <div className="hero-buttons">
            <button
              className="primary-button"
              onClick={handleOrderOnline}
            >
              {t('home.hero.orderOnline')}
            </button>
            <button
              className="secondary-button"
              onClick={handleGetDirections}
            >
              {t('home.hero.getDirections')}
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={`about-section ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className="section-container">
          <h2 className="section-title">{t('home.about.title')}</h2>
          <div className="divider"></div>
          <p className="about-content">
            {t('home.about.content')}
          </p>
        </div>
      </section>

      {/* Menu Showcase */}
      <section className={`menu-showcase ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className="section-container">
          <h2 className="section-title">{t('home.menu.title')}</h2>
          <div className="divider"></div>
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={false}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: '.custom-pagination',
              dynamicBullets: false,
            }}
            navigation={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
                centeredSlides: true,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: false,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 25,
                centeredSlides: false,
              },
            }}
            loop={true}
            speed={600}
            grabCursor={true}
            touchRatio={1}
            touchAngle={45}
            className="menu-carousel"
          >
            <SwiperSlide>
              <div className="menu-item">
                <img src={photo3} alt="Deli item 1" className="menu-image" />
                <div className="menu-caption">{t('home.menu.item1')}</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="menu-item">
                <img src={photo2} alt="Deli item 2" className="menu-image" />
                <div className="menu-caption">{t('home.menu.item2')}</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="menu-item">
                <img src={photo1} alt="Deli item 3" className="menu-image" />
                <div className="menu-caption">{t('home.menu.item3')}</div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* Custom pagination outside of the slider */}
          <div className="custom-pagination"></div>

          <div className="menu-cta">
            <button
              className="primary-button"
              onClick={handleOrderOnline}
            >
              {t('home.menu.viewMenu')}
            </button>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className={`location-section ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className="section-container">
          <h2 className="section-title">{t('home.location.title')}</h2>
          <div className="divider"></div>

          <div className="location-info">
            <div className="location-details">
              <div className="location-icon-wrapper">
                <MapPin size={28} className="location-icon" />
              </div>
              <div className="location-text">
                <h3>{t('home.location.ourLocation')}</h3>
                <p>{t('home.location.address')}</p>
                <p>{t('home.location.contact')}</p>
                <button
                  className="directions-button"
                  onClick={handleGetDirections}
                >
                  {t('home.location.getDirections')}
                </button>
              </div>
            </div>
            
            <div className="map-container">
              <iframe
                src={deliLocation.mapUrl}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Deli Location"
                className="location-map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`footer ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className="footer-container">
          <div className="footer-social">
            <a href="https://www.tiktok.com/@thedeliofspringfield" target="_blank" rel="noopener noreferrer">
              <img src={tiktokLogo} alt="TikTok" />
            </a>
            <a href="https://www.instagram.com/thedeliofspringfield?igsh=YWgzbG16azFubGpr" target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61554868277687" target="_blank" rel="noopener noreferrer">
              <img src={facebookLogo} alt="Facebook" />
            </a>
          </div>
          <div className="footer-content">
            <p>© {new Date().getFullYear()} {t('home.footer.rights')}</p>
            <p>{t('home.footer.addressContact')}</p>
            <div className="developer-attribution">
              {t('home.footer.createdBy')} <a href="https://www.linkedin.com/in/chrisvpopoca/" target="_blank" rel="noopener noreferrer">Christopher Vargas</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;