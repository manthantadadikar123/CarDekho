import React from "react";
import "./HotelDashboard.css";

const HotelDashboard = () => {
  return (
    <div className="hotel-dashboard">
      {/* Header Section */}
      <div className="header">
        <div className="user-info">
          <img className="user-avatar" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fjoana-barros-magalh%25C3%25A3es-0b5007aa&psig=AOvVaw3KZpfT7pZKj9uiKQJR6LTT&ust=1739941358857000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjz8-y4zIsDFQAAAAAdAAAAABAE" alt="User Avatar" />
          <div>
            <h3>Joana Barros</h3>
            <p>Hotel Guest</p>
          </div>
        </div>
        <div className="lock-icon">🔒</div>
      </div>

      {/* Recommended Section */}
      <div className="recommended">
        <h4>Recommended for you</h4>
        <div className="recommended-card">
          <p className="price-tag">From $30/person</p>
          <h5>Enjoy some me time</h5>
          <p>Relax with our massages and treatments.</p>
          <p className="time-info">Spa facilities will close in 4 hours</p>
        </div>
      </div>

      {/* Popular Experiences */}
      <div className="popular-experiences">
        <h4>Popular experiences</h4>
        <div className="experience-list">
          <div className="experience-card">
            <p>🚴 Bike Riding</p>
            <small>Varied tour options</small>
          </div>
          <div className="experience-card">
            <p>🍽️ Dinner at the Table</p>
            <small>From $30/person</small>
          </div>
        </div>
      </div>

      {/* All Services Section */}
      <div className="all-services">
        <h4>All services</h4>
        <div className="service-item">🏨 Facilities <span>➡️</span></div>
        <div className="service-item">🔑 Virtual Key <span>➡️</span></div>
        <div className="service-item">🛏️ My Room <span>➡️</span></div>
        <div className="service-item">🍽️ Order Room Service <span>➡️</span></div>
      </div>

      {/* Points Section */}
      <div className="points-section">
        <p><strong>06 points</strong></p>
        <p>Accumulate points with your stay. They will turn into special offers for you.</p>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <span>🏠</span>
        <span>📅</span>
        <span>🔔</span>
        <span>⚙️</span>
      </div>
    </div>
  );
};

export default HotelDashboard;