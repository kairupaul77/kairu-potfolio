import React from 'react';
import { Link } from 'react-router-dom';

const Panel = () => {
  return (
    <div className="page panel">
      {/* Hero Section */}
      <div className="hero">
        <h1>Panels</h1>
        <p>Upgrade your interiors with our stylish panels.</p>
      </div>

      {/* Image Gallery with Descriptions */}
      <div className="image-gallery">
        <div className="gallery-item">
          <img src="https://i.pinimg.com/736x/42/0b/cb/420bcbaf35dad331b261f02ca6cd9a21.jpg" alt="Panel 1" />
          <p className="image-description">Wooden panels for a warm and natural look.</p>
        </div>
        <div className="gallery-item">
          <img src="https://i.pinimg.com/736x/58/7b/42/587b4289861e42b9e336bad44bb5766b.jpg" alt="Panel 2" />
          <p className="image-description">Modern  panels for an industrial vibe.</p>
        </div>
        <div className="gallery-item">
          <img src="https://i.pinimg.com/736x/7e/8a/03/7e8a03c94004c9d9f4cdaceb795bc417.jpg" alt="Panel 3" />
          <p className="image-description">Textured panels for a unique touch.</p>
        </div>
        <div className="gallery-item">
          <img src="https://i.pinimg.com/736x/98/85/3c/98853cff9c7b372b3ad2bd1efa8c063d.jpg" alt="Panel 4" />
          <p className="image-description">Modern green panels .. amaizing.</p>
        </div>
        <div className="gallery-item">
          <img src="https://i.pinimg.com/736x/2a/1d/d8/2a1dd89b3097ff8bd2768548b22a703b.jpg" alt="Panel 5" />
          <p className="image-description">Custom-designed panels for any space.</p>
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="back-to-home">
        <Link to="/" className="learn-more-btn">Back to Home</Link>
      </div>
    </div>
  );
};

export default Panel;