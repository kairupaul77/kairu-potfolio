import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page home">
      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to Our Services</h1>
        <p>We provide the best services for your needs. Explore our offerings below:</p>
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        <div className="service-card">
          <img src="https://i.pinimg.com/736x/e7/98/f1/e798f1ee71385f2cccd8b69ef525a83a.jpg" alt="Grass Carpets" />
          <div className="service-content">
            <h2>Grass Carpets</h2>
            <p>Transform your outdoor spaces with our high-quality grass carpets.</p>
            <Link to="/grass" className="learn-more-btn">Learn More</Link>
          </div>
        </div>

        <div className="service-card">
          <img src="https://i.pinimg.com/736x/53/54/37/535437948892d859666ca55edab88b8b.jpg" alt="Hedges" />
          <div className="service-content">
            <h2>Hedges</h2>
            <p>Add beauty and privacy to your garden with our premium hedges.</p>
            <Link to="/hedge" className="learn-more-btn">Learn More</Link>
          </div>
        </div>

        <div className="service-card">
          <img src="https://i.pinimg.com/736x/0c/d8/4c/0cd84c506591be23c2fe922cad203cb5.jpg" alt="Panels" />
          <div className="service-content">
            <h2>Panels</h2>
            <p>Upgrade your interiors with our stylish panels.</p>
            <Link to="/panel" className="learn-more-btn">Learn More</Link>
          </div>
        </div>

        <div className="service-card">
          <img src="https://i.pinimg.com/736x/0a/90/f5/0a90f5df44fbe8d25c1cf0edf252f7d9.jpg" alt="Wallpapers" />
          <div className="service-content">
            <h2>Wallpapers</h2>
            <p>Give your walls a fresh look with our wide range of wallpapers.</p>
            <Link to="/wall" className="learn-more-btn">Learn More</Link>
          </div>
        </div>

        <div className="service-card">
          <img src="https://i.pinimg.com/736x/47/43/e3/4743e3417d34edbe1f47f45855899781.jpg" alt="Cleaning Services" />
          <div className="service-content">
            <h2>Cleaning Services</h2>
            <p>Keep your home or office spotless with our professional cleaning services.</p>
            <Link to="/clean" className="learn-more-btn">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;