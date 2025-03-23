import React from 'react';
import { Link } from 'react-router-dom';

const Clean = () => {
  return (
    <div className="page clean">
      {/* Hero Section */}
      <div className="hero">
        <h1>Cleaning Services</h1>
        <p>Keep your home or office spotless with our professional cleaning services.</p>
      </div>

      {/* Image Gallery with Descriptions */}
      <div className="image-gallery">
        <div className="gallery-item">
          <img src="https://i.pinimg.com/736x/e9/8a/f4/e98af4734d7e65d7258e5b09a8995bfb.jpg" alt="Cleaning 1" />
          <p className="image-description">Deep cleaning for a fresh start.</p>
        </div>
        <div className="gallery-item">
          <img src="https://i.pinimg.com/736x/3d/02/aa/3d02aa3df737786ee6b79a8d852f07f3.jpg" alt="Cleaning 2" />
          <p className="image-description">Eco-friendly cleaning products for your carpets.</p>
        </div>
        <div className="gallery-item">
          <img src="https://i.pinimg.com/736x/ed/38/66/ed38663596cc2b9472742b68c40b455b.jpg" alt="Cleaning 3" />
          <p className="image-description">Office carpets cleaning for a productive workspace.</p>
        </div>
        <div className="gallery-item">
          <img src="https://i.pinimg.com/736x/5a/bd/08/5abd08055691502d10b7c0267c6d454f.jpg" alt="Cleaning 4" />
          <p className="image-description">Carpet cleaning to remove stubborn stains.</p>
        </div>
        <div className="gallery-item">
          <img src="https://i.pinimg.com/736x/d9/86/71/d98671554389a0004d9f7c4e817ab164.jpg" alt="Cleaning 5" />
          <p className="image-description">Custom cleaning plans for your needs.</p>
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="back-to-home">
        <Link to="/" className="learn-more-btn">Back to Home</Link>
      </div>
    </div>
  );
};

export default Clean;