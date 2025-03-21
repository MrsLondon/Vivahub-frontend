import React from "react";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <div className="logo">VivaHub</div>
        <button className="login-signup-button">log in</button>
      </header>

      {/* Search Bar Section */}
      <section className="search-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Find Salons"
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>
      </section>

      {/* Featured Salons Section */}
      <section className="featured-salons">
        <h2>Discover Featured Salons</h2>
        <div className="salon-carousel">
          <div className="salon-card">
            <img src="https://via.placeholder.com/150" alt="Salon 1" />
            <h3>Salon 1</h3>
            <p>Rating: ★★★★☆</p>
          </div>
          <div className="salon-card">
            <img src="https://via.placeholder.com/150" alt="Salon 2" />
            <h3>Salon 2</h3>
            <p>Rating: ★★★★☆</p>
          </div>
          <div className="salon-card">
            <img src="https://via.placeholder.com/150" alt="Salon 3" />
            <h3>Salon 3</h3>
            <p>Rating: ★★★★☆</p>
          </div>
          <div className="salon-card">
            <img src="https://via.placeholder.com/150" alt="Salon 4" />
            <h3>Salon 4</h3>
            <p>Rating: ★★★★☆</p>
          </div>
          <div className="salon-card">
            <img src="https://via.placeholder.com/150" alt="Salon 5" />
            <h3>Salon 5</h3>
            <p>Rating: ★★★★☆</p>
          </div>
        </div>
      </section>

      <section className="customer-reviews">
  <h2>What Our Customers Say</h2>
  <div className="review-carousel">
    <div className="review-card">
      <p>"Amazing service! Highly recommend."</p>
      <h4>- Jane Doe</h4>
    </div>
    <div className="review-card">
      <p>"The best salon experience I've ever had."</p>
      <h4>- John Smith</h4>
    </div>
    <div className="review-card">
      <p>"Great staff and excellent results every time."</p>
      <h4>- Sarah Lee</h4>
    </div>
    <div className="review-card">
      <p>"Affordable and professional. Will come back again!"</p>
      <h4>- Michael Brown</h4>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="footer">
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#privacy">Privacy Policy</a>
      </footer>
    </div>
  );
};

export default Homepage;