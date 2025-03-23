import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Title */}
      <div className="navbar-title">
        <h1>Interiorskairu</h1>
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/grass">Grass Carpets</Link></li>
        <li><Link to="/hedge">Hedges</Link></li>
        <li><Link to="/panel">Panels</Link></li>
        <li><Link to="/wall">Wallpapers</Link></li>
        <li><Link to="/clean">Cleaning Services</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;