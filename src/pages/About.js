import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import familyPhoto from '../assets/family.jpg';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';

function About({ darkMode }) {
  const { t } = useTranslation();
  return (
    <div className={`about-page ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="about-hero">
        <h1>{t('about.hero.title')}</h1>
        <p className="about-tagline">{t('about.hero.tagline')}</p>
      </div>

      {/* Our Story Section */}
      <section className="story-section">
        <h2 className="section-title">{t('about.story.title')}</h2>
        <div className="divider"></div>

        <div className="story-cards">
          {/* Leticia's Story */}
          <div className="story-card">
            <h3>{t('about.story.leticia.name')}</h3>
            <p>{t('about.story.leticia.text')}</p>
          </div>

          {/* Carlos's Story */}
          <div className="story-card">
            <h3>{t('about.story.carlos.name')}</h3>
            <p>{t('about.story.carlos.text')}</p>
          </div>

          {/* Jimmy's Story */}
          <div className="story-card">
            <h3>{t('about.story.jimmy.name')}</h3>
            <p>{t('about.story.jimmy.text')}</p>
          </div>
        </div>
      </section>

      {/* Family Section */}
      <section className="family-section">
        <h2 className="section-title">{t('about.family.title')}</h2>
        <div className="divider"></div>
        <div className="family-photo-container">
          <img src={familyPhoto} alt="The Deli of Springfield Family" className="family-photo" />
          <div className="photo-caption">
            <p>{t('about.family.caption')}</p>
          </div>
        </div>
      </section>

      {/* Memories Section */}
      <section className="memories-section">
        <h2 className="section-title">{t('about.journey.title')}</h2>
        <div className="divider"></div>
        <div className="carousel-container">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            loop={true}
            className="memories-carousel"
          >
            <SwiperSlide>
              <div className="memory-slide">
                <img src={pic1} alt="Our Journey 1" className="memory-image" />
                <div className="memory-caption">
                  <p>{t('about.journey.caption1')}</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="memory-slide">
                <img src={pic2} alt="Our Journey 2" className="memory-image" />
                <div className="memory-caption">
                  <p>{t('about.journey.caption2')}</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="memory-slide">
                <img src={pic3} alt="Our Journey 3" className="memory-image" />
                <div className="memory-caption">
                  <p>{t('about.journey.caption3')}</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <p>{t('about.mission.text')}</p>
        </div>
      </section>
    </div>
  );
}

export default About;