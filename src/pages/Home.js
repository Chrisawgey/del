import React, { useEffect, useState } from 'react';
import './Home.css';
import wrapImage from '../assets/wrap.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';

function Home() {
  const [specials, setSpecials] = useState([]);

  // Fetch daily specials from backend
  useEffect(() => {
    const fetchSpecials = async () => {
      try {
        const response = await fetch('https://api.example.com/daily-specials'); // Replace with your API
        const data = await response.json();
        setSpecials(data);
      } catch (error) {
        console.error('Error fetching daily specials:', error);
      }
    };

    fetchSpecials();
  }, []);

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

      {/* Daily Specials */}
      <section className="specials">
        <h2>Daily Specials</h2>
        <div className="specials-list">
          {specials.length > 0 ? (
            specials.map((special, index) => (
              <div key={index} className="special">
                <h3>{special.title}</h3>
                <p>{special.description}</p>
              </div>
            ))
          ) : (
            <p>Loading specials...</p>
          )}
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
          food place named after the town, and that’s exactly what was missing in
          Springfield, NJ. We bring our own recipes for people to try, and our
          mission is to serve freshness and quality. Most importantly, our secret
          that sets us apart from everyone else is that we serve everything with
          love and passion. We’re proud to be a family-run business, and we look
          forward to continuing to serve Springfield and the surrounding towns
          for many years to come. We are “Where Quality Meets Flavor – We Serve
          Only the Best!” – The Deli of Springfield
        </p>
      </section>
    </div>
  );
}

export default Home;
