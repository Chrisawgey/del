import React from 'react';
import './About.css';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import { Autoplay } from 'swiper/modules'; // Import Autoplay module
import 'swiper/css'; // Import Swiper styles

import leticiaImage from '../assets/leticia.jpg'; // Replace with actual paths
import carlosImage from '../assets/carlos.jpg';
import jimmyImage from '../assets/jimmy.jpg';
import familyPhoto from '../assets/family.jpg'; // Family picture
import pic1 from '../assets/pic1.jpg'; // Carousel images
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';

function About({ darkMode }) {
  return (
    <div className={`about-page ${darkMode ? 'dark-mode' : ''}`}>
      <h1>About Us</h1>
      <div className="team">
        {/* Leticia's Story */}
        <div className="team-member">
          <img src={leticiaImage} alt="Leticia Barraboza" className="member-image" />
          <div className="member-details">
            <h2>Leticia Barraboza</h2>
            <p>
            My name is Leticia Barraboza, and I migrated from Mexico to the United States 
            of America 25 years ago. This country has been a land of opportunity, and I 
            am deeply grateful to be part of this Country. After spending over 20 years 
            working in the food industry for other people, I decided it was time to take
             a risk and follow my dream. Opening The Deli of Springfield has always been 
             a dream of mine. I’ve helped others open their own deli/bagel shops in Union
              County, and that motivated me to take a leap of faith to open The Deli of 
              Springfield . At The Deli of Springfield, we are committed to serving the 
              freshest and highest-quality food, always treating our customers like family 
              and making them feel at home.
            </p>
          </div>
        </div>

        {/* Carlos's Story */}
        <div className="team-member reverse">
          <img src={carlosImage} alt="Carlos Rodriguez" className="member-image" />
          <div className="member-details">
            <h2>Carlos Rodriguez</h2>
            <p>
            My name is Carlos Rodriguez, and I've worked in the food industry for over 20 years, 
            with the last 17 years spent as the head cook at Barth’s Market in New Providence, NJ. 
            Opening The Deli of Springfield was a dream of mine, and now, I’m able to bring those
            recipes and ideas I had to life. I want every person who walks through our doors to feel 
            like they’re at home, whether they’re a first-time visitor or a regular. We take pride in 
            making everyone feel like family, and we’re excited to continue to serve our community with 
            the same passion.

            </p>
          </div>
        </div>

        {/* Jimmy's Story */}
        <div className="team-member">
          <img src={jimmyImage} alt="Jimmy Barraboza" className="member-image" />
          <div className="member-details">
            <h2>Jimmy Barraboza</h2>
            <p>
            The Deli of Springfield was founded on December 7th, 2023. The creation of the name 
            came from the realization that every surrounding town has a food place named after 
            the town, and that’s exactly what was missing in Springfield, NJ. We bring our own 
            recipes for people to try, and our mission is to serve freshness and quality. Most 
            importantly, our secret that sets us apart from everyone else is that we serve everything 
            with love and passion. We’re proud to be a family-run business, and we look forward to 
            continuing to serve Springfield and the surrounding towns for many years to come. We are 
            “Where Quality Meets Flavor – We Serve Only the Best!” – The Deli of Springfield

            </p>
          </div>
        </div>
      </div>

      {/* Family Picture Section */}
      <section className="family-section">
        <h2>Our Family</h2>
        <img src={familyPhoto} alt="Family" className="family-photo" />
      </section>

      {/* Carousel Section */}
      <section className="carousel-section">
        <h2>Our Memories</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
        >
          <SwiperSlide>
            <img src={pic1} alt="Memory 1" className="carousel-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic2} alt="Memory 2" className="carousel-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic3} alt="Memory 3" className="carousel-image" />
          </SwiperSlide>
          {/* Add more SwiperSlides as needed */}
        </Swiper>
      </section>
    </div>
  );
}

export default About;
