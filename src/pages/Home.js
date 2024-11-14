import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Banner */}
      <section className="hero">
        <h1>Welcome to Our Deli</h1>
        <p>Fresh, Delicious, and Made with Love!</p>
        <button>See Our Menu</button>
      </section>

      {/* Daily Specials */}
      <section className="specials">
        <h2>Daily Specials</h2>
        <div className="specials-list">
          {/* Replace with dynamic content later */}
          <div className="special">
            <h3>Special Sandwich</h3>
            <p>Try our chef’s special sandwich, freshly made!</p>
          </div>
          <div className="special">
            <h3>Soup of the Day</h3>
            <p>Warm up with our hearty soup, made fresh every day.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>Who We Are</h2>
        <p>
          Our deli has been serving up fresh, quality food to our community for
          over 20 years. We’re a family-owned business with a passion for good
          food and great service.
        </p>
      </section>
    </div>
  );
}

export default Home;
