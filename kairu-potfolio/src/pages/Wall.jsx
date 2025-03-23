import React from 'react';
import { Link } from 'react-router-dom';

const Wall = () => {
  return (
    <div className="page wall">
      {/* Hero Section */}
      <div className="hero">
        <h1>Wallpapers</h1>
        <p>Give your walls a fresh look with our wide range of wallpapers.</p>
      </div>

      {/* Image Gallery with Descriptions */}
      <div className="image-gallery">
        <div className="gallery-item">
          <img src="https://i.pinimg.com/736x/f9/e4/b9/f9e4b959c086c2485fc33e2a2675e1f9.jpg" alt="Wallpaper 1" />
          <p className="image-description">Floral patterns for a vibrant look.</p>
        </div>
        <div className="gallery-item">
          <img src="https://i.pinimg.com/736x/c8/1c/40/c81c409cd7e12a0a21503495344c1004.jpg" alt="Wallpaper 2" />
          <p className="image-description">Geometric designs for a modern touch.</p>
        </div>
        <div className="gallery-item">
          <img src="https://i.pinimg.com/736x/78/98/53/789853ea3e9e77c76c3530fecdd70af3.jpg" alt="Wallpaper 3" />
          <p className="image-description">Textured wallpapers for added depth.</p>
        </div>
        <div className="gallery-item">
          <img src="https://i.pinimg.com/736x/42/a5/9a/42a59a196a0d7080b2c615d31c971c38.jpg" alt="Wallpaper 4" />
          <p className="image-description">Minimalist patterns for a clean aesthetic.</p>
        </div>
        <div className="gallery-item">
          <img src="https://i.pinimg.com/736x/d3/5c/83/d35c83e6a0a30b945ab1cc3d103acbe0.jpg" alt="Wallpaper 5" />
          <p className="image-description">Custom wallpapers to match your style.</p>
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="back-to-home">
        <Link to="/" className="learn-more-btn">Back to Home</Link>
      </div>
    </div>
  );
};

export default Wall;