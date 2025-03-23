import React from 'react';
import { Link } from 'react-router-dom';

const Grass = () => {
  return (
    <div className="page grass">
      {/* Hero Section */}
      <div className="hero">
        <h1>Grass Carpets</h1>
        <p>Transform your outdoor spaces with our high-quality grass carpets.</p>
      </div>

      {/* Image Gallery with Descriptions */}
      <div className="image-gallery">
        <div className="gallery-item">
          <img src="https://i.pinimg.com/736x/ed/94/93/ed949316348aa2e4695a20549c0e29a0.jpg" alt="Grass 1" />
          <p className="image-description">Lush green grass carpets for a natural look.</p>
        </div>
        <div className="gallery-item">
          <img src="https://i.pinimg.com/736x/25/ff/3a/25ff3aa3d62b662b88f1cbd9604cebdb.jpg" alt="Grass 2" />
          <p className="image-description">Durable and weather-resistant grass carpets.</p>
        </div>
        <div className="gallery-item">
          <img src="https://i.pinimg.com/736x/6c/9f/a5/6c9fa5ed95ce204d74058c88f0789188.jpg" alt="Grass 3" />
          <p className="image-description">Perfect for gardens, balconies, and patios.</p>
        </div>
        <div className="gallery-item">
          <img src="https://i.pinimg.com/736x/4f/07/fa/4f07fabfe32278c22a42b8449315692b.jpg" alt="Grass 4" />
          <p className="image-description">Easy to install and maintain.</p>
        </div>
        <div className="gallery-item">
          <img src="https://i.pinimg.com/736x/df/61/64/df616439abb0c37757d7a5a48890fc86.jpg" alt="Grass 5" />
          <p className="image-description">Custom sizes available for any space.</p>
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="back-to-home">
        <Link to="/" className="learn-more-btn">Back to Home</Link>
      </div>
    </div>
  );
};

export default Grass;