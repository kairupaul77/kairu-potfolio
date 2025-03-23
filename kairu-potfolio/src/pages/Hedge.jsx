import React from 'react';
import { Link } from 'react-router-dom';

const Hedge = () => {
  return (
    <div className="page hedge">
      {/* Hero Section */}
      <div className="hero">
        <h1>Hedges</h1>
        <p>Add beauty and privacy to your garden with our premium hedges.</p>
      </div>

      {/* Image Gallery with Descriptions */}
      <div className="image-gallery">
        <div className="gallery-item">
          <img src="https://i.pinimg.com/736x/e9/de/54/e9de5457a41a609a89e79e2de9cb4831.jpg" alt="Hedge 1" />
          <p className="image-description">Classic evergreen hedges for a timeless look.</p>
        </div>
        <div className="gallery-item">
          <img src="https://i.pinimg.com/736x/82/44/5b/82445bc9a0ffa3cf1a31bcd0e10b72f7.jpg" alt="Hedge 2" />
          <p className="image-description">Flowering hedges to add color to your home.</p>
        </div>
        <div className="gallery-item">
          <img src="https://i.pinimg.com/736x/34/f7/c1/34f7c1513f799c7a1fe6c7e03ee1a482.jpg" alt="Hedge 3" />
          <p className="image-description">Low-maintenance hedges for busy homeowners.</p>
        </div>
        <div className="gallery-item">
          <img src="https://i.pinimg.com/736x/b0/98/89/b09889e68f78195b56d32c05acaeeca9.jpg" alt="Hedge 4" />
          <p className="image-description">Tall hedges for maximum privacy.</p>
        </div>
        <div className="gallery-item">
          <img src="https://i.pinimg.com/736x/81/77/2e/81772ee0de50d1cc87d5a2a8d10b1abb.jpg" alt="Hedge 5" />
          <p className="image-description">Custom-shaped hedges for unique designs.</p>
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="back-to-home">
        <Link to="/" className="learn-more-btn">Back to Home</Link>
      </div>
    </div>
  );
};

export default Hedge;