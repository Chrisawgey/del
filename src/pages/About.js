import React from 'react';
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
  return (
    <div className={`about-page ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="about-hero">
        <h1>About Us</h1>
        <p className="about-tagline">A Family Story of Passion, Food, and Community</p>
      </div>

      {/* Our Story Section */}
      <section className="story-section">
        <h2 className="section-title">Our Story</h2>
        <div className="divider"></div>
        
        <div className="story-cards">
          {/* Leticia's Story */}
          <div className="story-card">
            <h3>Leticia Barraboza</h3>
            <p>
              I migrated from Mexico to the United States of America 25 years ago. This country has been a land of 
              opportunity, and I am deeply grateful to be part of this Country. After spending over 20 years 
              working in the food industry for other people, I decided it was time to take a risk and follow my dream. 
              Opening The Deli of Springfield has always been a dream of mine. I've helped others open their own 
              deli/bagel shops in Union County, and that motivated me to take a leap of faith. At The Deli of 
              Springfield, we are committed to serving the freshest and highest-quality food, always treating our 
              customers like family and making them feel at home.
            </p>
          </div>

          {/* Carlos's Story */}
          <div className="story-card">
            <h3>Carlos Rodriguez</h3>
            <p>
              I've worked in the food industry for over 20 years, with the last 17 years spent as the head cook at 
              Barth's Market in New Providence, NJ. Opening The Deli of Springfield was a dream of mine, and now, 
              I'm able to bring those recipes and ideas I had to life. I want every person who walks through our 
              doors to feel like they're at home, whether they're a first-time visitor or a regular. We take pride in 
              making everyone feel like family, and we're excited to continue to serve our community with the same passion.
            </p>
          </div>

          {/* Jimmy's Story */}
          <div className="story-card">
            <h3>Jimmy Barraboza</h3>
            <p>
              My dream has always been to make my parents' sacrifices get rewarded. After seeing them work hard for 
              over 25 years without feeling appreciated, I knew it was time to take a leap of faith and open The Deli 
              of Springfield. Thanks to my parents, I've been able to achieve so many things, including being part of 
              the National Honors Society in high school, graduating with high honors from Union County College, and 
              earning my degree in Accounting and Finance from Kean University, graduating cum laude. I'm now working 
              as a full-time accountant while also managing the deli on the weekends. My goal is to become a successful 
              entrepreneur and give back to the community in the future. A special shoutout to my brother Alex, who came 
              up with the name "The Deli of Springfield" after our research revealed a need for a place like this in our town.
            </p>
          </div>
        </div>
      </section>

      {/* Family Section */}
      <section className="family-section">
        <h2 className="section-title">Our Family</h2>
        <div className="divider"></div>
        <div className="family-photo-container">
          <img src={familyPhoto} alt="The Deli of Springfield Family" className="family-photo" />
          <div className="photo-caption">
            <p>The heart behind The Deli of Springfield: our family</p>
          </div>
        </div>
      </section>

      {/* Memories Section */}
      <section className="memories-section">
        <h2 className="section-title">Our Journey</h2>
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
                  <p>The beginning of our dream</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="memory-slide">
                <img src={pic2} alt="Our Journey 2" className="memory-image" />
                <div className="memory-caption">
                  <p>Creating memories with our community</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="memory-slide">
                <img src={pic3} alt="Our Journey 3" className="memory-image" />
                <div className="memory-caption">
                  <p>Bringing our passion to every plate</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          
          <p>
            At The Deli of Springfield, we're committed to serving the freshest, highest-quality food 
            made with love and passion. We believe in treating everyone who walks through our doors 
            like family, creating a warm and welcoming space where our community can gather, connect, 
            and enjoy exceptional food. We're not just a deli – we're a "Delin": something 
            in between a deli and a diner, bringing the best of both worlds to Springfield.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;